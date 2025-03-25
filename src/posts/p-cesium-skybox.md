---
outline: deep
title: cesium 设置 skybox
date: 2024-03-07
excerpt: 设置cesium的天空盒...
tags: ["cesium"]
---

# cesium 设置 skybox

<PostMeta />

cesium 默认 skybox 是黑色的，不适用大多数应用场景，因此我们可以尝试进行修改。

## API 参考

查看 `https://cesium.com/learn/cesiumjs/ref-doc/Viewer.html?classFilter=viewer`

## 图片资源

翻看 api 会发现，skybox 的背景图需要 6 个不同方位的图片组成，6 张图片的关系如下图：

![alt text](/images/skybox.png)

因此我们需要先准备好同一场景下的 6 张图片资源，假设命名为: px.jpg, py.jpg, pz.jpg, nx.jpg, ny.jpg, nz.jpg

## 代码实现

有了图片资源后，我们可以对 skybox 进行设置（忽略其他代码）:

```javascript
let currSkyBox: Cesium.SkyBox;
if (sky) {
  currSkyBox = new Cesium.SkyBox({
    sources: {
      positiveX: sky.assets.px,
      negativeX: sky.assets.nx,
      positiveY: sky.assets.py,
      negativeY: sky.assets.ny,
      positiveZ: sky.assets.pz,
      negativeZ: sky.assets.nz,
    },
  });
}

const defaultSkybox = viewer.scene.skyBox;
if (sky) {
  viewer.scene.preUpdate.addEventListener(() => {
    let position = viewer.scene.camera.position;
    let cameraHeight = Cesium.Cartographic.fromCartesian(position).height;
    if (cameraHeight <= 20000) {
      // 当相机高度小于 20000 时 才会替换skybox 此高度可以根据需求调整
      viewer.scene.skyBox = currSkyBox;
      //关闭地球大气层
      viewer.scene.skyAtmosphere.show = false;
    } else {
      //使用系统默认星空天空盒
      viewer.scene.skyBox = defaultSkybox;
      //显示大气层
      viewer.scene.skyAtmosphere.show = true;
    }
  });
}
```

<PostNav />
