---
outline: deep
---

# 初始化
下面演示如何把组件库集成到项目中。

使用脚手架工程搭建一个vue3项目，并安装相关组件依赖，新建 map.ts, 来编写地图相关的代码。

```ts
import { ITYPES, Ioc, Map } from '@vintage-gis/core'
import type { App } from 'vue'
import { OpenLayersMap } from '@vintage-gis/ol'
import { IocPlugin } from './ioc'

const mapControls = import.meta.glob('src/components/map/controls/**/*.vue', {
  eager: true
})

export function useMap() {

  const ioc = IocPlugin.of().container
  /**
   * setup
   * @param app
   */
  function setup(app: App) {
    const mapPlugin = MapPlugin.of()
    app.use(mapPlugin)
    app.component(PureMapView.name ?? '', PureMapView)
    app.component(PureMapPopup.name ?? '', PureMapPopup)
    console.log('load map controls...', mapControls)
    // 指定 map 实现为 ol 实现
    ioc.bind<Map>(ITYPES.Map).to(OpenLayersMap)
    // 引入所有control
    Object.keys(mapControls).forEach(key => {
      const wrapper = mapControls[key] as any
      const name = wrapper.default.__name
      mapPlugin.registerMapControl(wrapper.default as Component, name)
    })
    console.log('all map controls loaded')
  }
}
class MapPlugin {
  static #holder: MapPlugin | undefined = undefined
  #app!: App

  private constructor() {
    //
  }

  get app(): App {
    return this.#app
  }

  /**
   * 保持单例
   * @returns 实例
   */
  static of(): MapPlugin {
    if (this.#holder === undefined) {
      this.#holder = new MapPlugin()
    }
    return this.#holder
  }

  /**
   * instal map
   * @param app vue
   * @param options 用于注册自定义control 可选
   */
  install(app: App, options?: { setup: (vueMap: MapPlugin) => void }): any {
    this.#app = app
    if (options) {
      options.setup(this)
    }
  }

  /**
   * 注册一个vue组件为地图control
   * @param control vue组件
   */
  registerMapControl(control: Component, name?: string): void {
    const compName = name ?? control.name ?? ''
    this.#app.component(compName, control)
    info(`成功注册vue组件[${compName}]为地图control`, '')
  }
}

```

在 main.ts 中引入并使用:

```ts
import { useMap } from './map'
const { setup: setupMap } = useMap()

const app = createApp(App)
setupMap(app)

```