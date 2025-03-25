---
outline: deep
---

# 定义
`MapStyle` 类型定义:

```ts
// 地图样式文件类型
export type MapStyle = {
  id: string
  version: number
  name: string
  title: string
  zoom: number
  bearing: number
  center: [number, number]
  pitch?: number
  initialExtent?: MapExtent
  crs?: string
  sources: {
    [_: string]: MapSourceType
  }
  layers: MapLayerType[]
  controls: MapControlType[]
  // 调试模式 会开启tileDebug等
  debug?: boolean
  metadata?: Record<string, any>
} & Record<string, any>
```

## zoom
缩放层级

## bearing

设置视角姿态 方位角 默认0

## center
地图的默认中心点 [x,y] 经纬度数组

## pitch 

设置视角姿态 倾斜角度 默认0

## initialExtent
地图初始范围，类型:
```ts
export type MapExtent = {
  /**
   * [minx, miny, maxx, maxy]
   */
  coordinates: number[]

  /**
   * 坐标系,为空时，默认EPSG:4326
   */
  crs?: string
}
```

## sources
数据源，类型：

```ts
export type MapSourceType = {
  type: 'xyz' | 'vector-tile' | 'vector' | 'geotiff' | 'osm' | string
  url: string
  /**
   * eg: 'EPSG:3857'
   */
  projection?: string
  /**
   * 256
   */
  tileSize?: number

  /**
   * 定制 origin
   */
  origin?: [number, number]

  /**
   * 定制分辨率
   */
  resolutions?: number[]

  /**
   * 扩展
   */
  [key: string]: any
}
```

## layers

地图加载的图层，类型：

```ts
/**
 * 地图图层类型
 */
export type MapLayerType = {
  /**
   * 唯一标识 自定义
   */
  id: string

  /**
   * 图层类型 自定义
   */
  type: 'shp' | 'vector' | 'vector-tile' | 'webgl-tile' | 'tile' | 'image' | 'webgl-vector' | string

  /**
   * 显示名称 用于图层控制等 自定义
   */
  name: string

  /**
   * 数据来源id
   * shp layer 不需要此属性！
   */
  source?: string

  /**
   * 透明度
   */
  opacity?: number

  /**
   * 是否加载显示
   */
  visible: boolean

  /**
   *  [minx, miny, maxx, maxy]
   */
  extent?: number[]

  /**
   * 层叠顺序
   */
  zIndex?: number
  minZoom?: number
  maxZoom?: number
  properties?: { [key: string]: any }

  // background?: string

  /**
   * 图层样式
   */
  style?: VectorFeatureStyleType | RasterTileStyleType

  projection?: string

  /**
   * 扩展
   */
  [key: string]: any
}
```

## controls

地图加载的组件定义，类型：

```ts
export type MapControlType = {
  /**
   * 唯一id
   */
  id: string

  /**
   * 组件名称 vue场景下等同于vue组件名
   */
  name: string

  /**
   * 可见性
   */
  visible: boolean

  /**
   * 组件定位
   */
  position: MapControlPosition

  /**
   * 标题
   */
  title?: string

  /**
   * 定义组件的外观样式
   */
  style?: { [k: string]: any }

  /**
   * 控件选项
   */
  options: MapControlOptions
}
```
