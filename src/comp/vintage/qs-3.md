---
outline: deep
---
# vue 组件

上一章节创建了 map 的 vue插件，并指定了实现为 openlayers实现，这一章节创建地图展示的vue组件。

## 创建组件
::: code-group
```vue [MapView.vue]
<template>
  <div class="map-wrapper" :style="props.cssStyle ?? {}">
    <div :id="props.mapId" class="map-container"></div>
    <template v-if="mapControls.length > 0">
      <template v-for="control in mapControls" :key="control.id">
        <Teleport :to="`.ol-overlaycontainer-stopevent`">
          <pure-map-control-wrapper
            v-if="control.visible"
            :name="control.id"
            :mv="mapViewId"
            :position="control.position"
            :style="control.style"
            :options="control.options"
          ></pure-map-control-wrapper>
        </Teleport>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Map, MapControlType, MapStyleSource } from '@vintage-gis/core'
import { MapView, MapContext, invoke } from '@vintage-gis/core'
import { onMounted, onUnmounted, ref } from 'vue'
import { CSSProperties } from 'vue'
import { useMap } from 'src/hooks/map'
import PureMapControlWrapper from './PureMapControlWrapper.vue'
import { useIoc } from 'src/hooks/ioc'
/**
 * 组件 props 类型
 * 命名规范
 */
export interface VmapContainerProps {
  mapStyle: MapStyleSource
  mapId: string
  cssStyle?: CSSProperties
  preLoad?: () => void | Promise<any>
  onLoaded?: (map: Map) => void | Promise<any>
  // 地图移除后触发
  onRemoved?: () => void | Promise<any>
}

const mapLoaded = ref<boolean>(false)
const mapControls = ref<Array<MapControlType>>([])
let mapView: MapView
const mapViewId = ref('')
const { useMapStore } = useMap()
const mapStore = useMapStore()

const props = withDefaults(defineProps<VmapContainerProps>(), {
  mapId: 'mainMap',
  mapStyle: '/map_style.json',
  onLoaded: (map: Map) => {
    console.log(`'${map.mapView?.id}' loaded.`)
  }
})

onMounted(() => {
  mapView = new MapView({
    container: props.mapId,
    styleSource: props.mapStyle,
    ioc: useIoc().container
  })
  mapViewId.value = MapContext.getInstance().provide(mapView)
  mapStore.mapView = mapView
  // 加载前注册 crs 等
  const { preLoad, onLoaded } = props
  if (preLoad) {
    invoke(preLoad)
  }

  mapView.once('map_load_end', ({ map }) => {
    mapLoaded.value = true
    mapStore.isReady = true
    if (onLoaded) {
      invoke(onLoaded, map)
    }
  })
  mapView.once('map_load_start', ({ style }) => {
    if (preLoad) {
      invoke(preLoad)
    }
    mapControls.value = style.controls
    // console.log('load start...')
  })
  mapView.load()
})
onUnmounted(() => {
  mapView?.destroy()
  const { onRemoved } = props
  if (onRemoved) {
    invoke(onRemoved)
  }
})
</script>

<style scoped></style>
```

```vue [MapControlWrapper.vue]
<template>
  <div></div>
</template>

<script lang="ts">
import { h, resolveComponent, defineComponent } from 'vue'
import type { PropType } from 'vue'
import { MapControlPosition, MapContext } from '@vintage-gis/core'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    mv: {
      // 地图view 对象 id
      type: String,
      required: true
    },
    // 定位 样式
    position: {
      type: Object as PropType<MapControlPosition>,
      required: true
    },
    // 其他自定义样式
    style: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return () => {
      return h(resolveComponent(props.name), {
        options: {
          ...props.options,
          mv: MapContext.getInstance().get(props.mv)
        },
        style: {
          pointerEvents: 'auto',
          position: 'absolute',
          ...props.position,
          ...props.style
        },
        onMouseenter: () => {
        },
        onMouseleave: () => {
        }
      })
    }
  }
})
</script>

<style scoped></style>
```

```vue [MapPopup.vue]
<template>
  <template v-if="dom">
    <teleport :to="dom"><slot></slot></teleport>
  </template>
</template>

<script setup lang="ts">
import { getUuid } from '@vintage-gis/core'
import { Coordinate } from 'ol/coordinate'
import Overlay, { PanIntoViewOptions, Positioning } from 'ol/Overlay'
import { useMap } from 'src/hooks/map'
import { onUnmounted, ref, watch } from 'vue'
import * as ol from 'ol'

const { useMapStore } = useMap()
const mapStore = useMapStore()

const props = defineProps<{
  id?: string
  position?: Coordinate
  offset?: number[]
  positioning?: Positioning
  stopEvent?: boolean
  insertFirst?: boolean
  autoPan?: boolean | PanIntoViewOptions
  classNames?: string[] | undefined
}>()

const dom = ref()
const id = props.id ?? getUuid()
const element = document.createElement('div')
element.className = `map-pop-wrapper ${props.classNames?.join(' ') ?? ''}`
const popup = new Overlay({
  id,
  offset: props.offset,
  element,
  positioning: props.positioning,
  stopEvent: props.stopEvent,
  insertFirst: props.insertFirst,
  autoPan: props.autoPan
})
popup.on('change:position', e => {
  const wrap = e?.target?.element?.getElementsByClassName('map-pop-wrapper')
  if (wrap?.length) {
    dom.value = wrap[0]
  } else {
    dom.value = undefined
  }
})

onUnmounted(() => {
  const map = mapStore.mapView?.map
  if (map && map?.nativeMap) {
    const nativeMap = map.nativeMap as ol.Map
    const temp = nativeMap.getOverlayById(id)
    if (temp) {
      nativeMap.removeOverlay(temp)
    }
  }
})

watch(
  () => props.position,
  next => {
    const map = mapStore.mapView?.map
    if (map && map?.nativeMap) {
      const nativeMap = map.nativeMap as ol.Map
      const temp = nativeMap.getOverlayById(id)
      if (temp) {
        if (next) {
          temp.setPosition(next)
        } else {
          nativeMap.removeOverlay(temp)
        }
      } else {
        if (next) {
          popup.setPosition(next)
          nativeMap.addOverlay(popup)
        }
      }
    }
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss"></style>

```
:::

## 创建地图样式文件

:::warning 🚧 Under Construction
Coming soon...
:::

## 测试使用

:::warning 🚧 Under Construction
Coming soon...
:::