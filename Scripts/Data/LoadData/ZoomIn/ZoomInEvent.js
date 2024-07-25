
window.zoomIn = false;
window.zoomInLocation = '';
window.lockZoomInEvent = false;

ExitZoomInListener()

/** 根据高度退出县级放大事件 （监听） */
function ExitZoomInListener() {
    viewer0.camera.moveEnd.addEventListener(() => {
        let cameraPosition = viewer0.scene.camera.positionCartographic;
        let longitude = Cesium.Math.toDegrees(cameraPosition.longitude).toFixed(6);
        let latitude = Cesium.Math.toDegrees(cameraPosition.latitude).toFixed(6);
        let height = cameraPosition.height.toFixed(4);
        console.log(height);
        console.log(zoomIn)
        if (zoomIn && height >= 200000) {
            if (mode_RenShen == 'Forest') {
                viewer0.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(125.974696, 41.765546, 418000),
                    orientation: {
                        heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
                        pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
                        roll: 0 // 视口翻滚角度
                    }
                });
                HideGardenShp_JiAn()
                ShowForestChart();
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        console.log(showPlantedForest)
                        console.log(showUnplantedForest)
                        if (showPlantedForest) {
                            datasource.entities._entities._array.forEach(entity => {
                                try {
                                    if (entity.properties.种植 == '已种植') {
                                        entity.show = true;
                                    }
                                }
                                catch { }
                            });
                        }
                        if (showUnplantedForest) {
                            datasource.entities._entities._array.forEach(entity => {
                                try {
                                    if (entity.properties.种植 == '未种植') {
                                        entity.show = true;
                                    }
                                }
                                catch { }
                            });
                        }
                    }
                })

            } else if (mode_RenShen == 'Garden') {

                viewer0.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(125.974696, 41.765546, 418000),
                    orientation: {
                        heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
                        pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
                        roll: 0 // 视口翻滚角度
                    }
                });
                HideGardenShp_JiAn()
                ShowGardenChart()
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/园参.geojson') {
                        if (showPlantedGarden) {
                            datasource.entities._entities._array.forEach(entity => {
                                try {
                                    if (entity.properties.种植 == '已种植') {
                                        entity.show = true;
                                    }
                                }
                                catch { }
                            });
                        }
                        if (showUnplantedGarden) {
                            datasource.entities._entities._array.forEach(entity => {
                                try {
                                    if (entity.properties.种植 == '未种植') {
                                        entity.show = true;
                                    }
                                }
                                catch { }
                            });
                        }
                    }
                })

            } else {
                viewer0.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(125.974696, 41.765546, 423000),
                    orientation: {
                        heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
                        pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
                        roll: 0 // 视口翻滚角度
                    }
                });

                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        if (showPlantedArea) {
                            datasource.entities._entities._array.forEach(entity => {
                                try {
                                    if (entity.properties.种植 == '已种植') {
                                        entity.show = true;
                                    }
                                }
                                catch { }
                            });
                        }
                        if (showUnplantedArea) {
                            datasource.entities._entities._array.forEach(entity => {
                                try {
                                    if (entity.properties.种植 == '未种植') {
                                        entity.show = true;
                                    }
                                }
                                catch { }
                            });
                        }
                    }
                    if (datasource._name == 'geojson/园参.geojson') {
                        if (showPlantedArea) {
                            datasource.entities._entities._array.forEach(entity => {
                                try {
                                    if (entity.properties.种植 == '已种植') {
                                        entity.show = true;
                                    }
                                }
                                catch { }
                            });
                        }
                        if (showUnplantedArea) {
                            datasource.entities._entities._array.forEach(entity => {
                                try {
                                    if (entity.properties.种植 == '未种植') {
                                        entity.show = true;
                                    }
                                }
                                catch { }
                            });
                        }
                    }
                })

            }
            zoomIn = false;
            zoomInLocation = '';
            window.parent.postMessage({
                eventName: 'zoomOut', // 事件名称
                // 参数
                params: {
                    val: 2
                }
            }, '*')
        }
    });
}



//双击事件监听
let handler_ZoomIn = new Cesium.ScreenSpaceEventHandler(viewer0.scene.canvas);

handler_ZoomIn.setInputAction(function (event) {
    var pick = viewer0.scene.pick(event.position);
    //是否允许击穿放大判断
    if (!lockZoomInEvent) {
        switch (pick.id._name) {
            case '集安市':
                viewer0.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(126.034696, 41.185546, 153000),
                    orientation: {
                        heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
                        pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
                        roll: 0 // 视口翻滚角度
                    }
                });
                try {
                    if (mode_RenShen == 'Forest') {
                        LoadForestShp_JiAn();
                        console.log(pick.id)
                        window.parent.postMessage({
                            eventName: 'zoomIn_JiAn_Forest', // 事件名称
                            // 参数
                            params: {
                                val: 220582000000
                            }
                        }, '*')
                    } else if (mode_RenShen == 'Garden') {
                        LoadGardenShp_JiAn();
                        HideAllLeftPanel()
                        document.getElementById("UIPanel_left_JiAnGarden").style.visibility = 'visible';
                        window.parent.postMessage({
                            eventName: 'zoomIn_JiAn_Garden', // 事件名称
                            // 参数
                            params: {
                                val: 220582000000
                            }
                        }, '*')
                    } else if (mode_RenShen == 'All') {
                        LoadShp_JiAn();
                        window.parent.postMessage({
                            eventName: 'zoomIn_JiAn_All', // 事件名称
                            // 参数
                            params: {
                                val: 220582000000
                            }
                        }, '*')
                    }
                }
                catch {
                    window.parent.postMessage({
                        eventName: 'zoomIn_JiAn_All', // 事件名称
                        // 参数
                        params: {
                            val: 220582000000
                        }
                    }, '*')
                }

                zoomInLocation = 'JiAn';
                break;
            case '柳河县':
                viewer0.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(125.954696, 42.165546, 170000),
                    orientation: {
                        heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
                        pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
                        roll: 0 // 视口翻滚角度
                    }
                });
                try {
                    if (mode_RenShen == 'Forest') {
                        LoadForestShp_LiuHe();
                        window.parent.postMessage({
                            eventName: 'zoomIn_LiuHe_Forest', // 事件名称
                            // 参数
                            params: {
                                val: 220524000000
                            }
                        }, '*')
                    } else if (mode_RenShen == 'Garden') { 
                        LoadGardenShp_LiuHe();
                        HideAllLeftPanel()
                        document.getElementById("UIPanel_left_LiuHe").style.visibility = 'visible';
                    } else if (mode_RenShen == 'All') {
                        LoadShp_LiuHe();
                        window.parent.postMessage({
                            eventName: 'zoomIn_LiuHe_All', // 事件名称
                            // 参数
                            params: {
                                val: 220524000000
                            }
                        }, '*')
                    }
                } catch (error) {
                    window.parent.postMessage({
                        eventName: 'zoomIn_LiuHe_All', // 事件名称
                        // 参数
                        params: {
                            val: 220524000000
                        }
                    }, '*')
                }

                zoomInLocation = 'LiuHe';
                break;
            case '通化县':
                viewer0.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(125.884696, 41.685546, 160000),
                    orientation: {
                        heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
                        pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
                        roll: 0 // 视口翻滚角度
                    }
                });
                try {
                    if (mode_RenShen == 'Forest') {
                        LoadForestShp_TongHua();
                        window.parent.postMessage({
                            eventName: 'zoomIn_TongHua_Forest', // 事件名称
                            // 参数
                            params: {
                                val: 220521000000
                            }
                        }, '*')
                    } else if (mode_RenShen == 'Garden') {
                        LoadGardenShp_TongHua();
                        HideAllLeftPanel()
                        document.getElementById("UIPanel_left_TongHua").style.visibility = 'visible';
                        window.parent.postMessage({
                            eventName: 'zoomIn_TongHua_Garden', // 事件名称
                            // 参数
                            params: {
                                val: 220521000000
                            }
                        }, '*')
                    } else if (mode_RenShen == 'All') {
                         LoadShp_Tonghua();
                        window.parent.postMessage({
                            eventName: 'zoomIn_TongHua_All', // 事件名称
                            // 参数
                            params: {
                                val: 220521000000
                            }
                        }, '*')
                    }
                } catch (error) {
                    window.parent.postMessage({
                        eventName: 'zoomIn_TongHua_All', // 事件名称
                        // 参数
                        params: {
                            val: 220521000000
                        }
                    }, '*')
                }

                zoomInLocation = 'TongHua';

                break;
            case '二道江区':
                viewer0.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(126.104696, 41.785546, 70000),
                    orientation: {
                        heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
                        pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
                        roll: 0 // 视口翻滚角度
                    }
                });
                try {
                    if (mode_RenShen == 'Forest') {
                        LoadForestShp_ErDaoJiang();
                        window.parent.postMessage({
                            eventName: 'zoomIn_ErDaoJiang_Forest', // 事件名称
                            // 参数
                            params: {
                                val: 220503000000
                            }
                        }, '*')
                    } else if (mode_RenShen == 'Garden') {
                        LoadGardenShp_ErDaoJiang();
                        HideAllLeftPanel()
                        document.getElementById("UIPanel_left_ErDaoJiang").style.visibility = 'visible';
                        window.parent.postMessage({
                            eventName: 'zoomIn_ErDaoJiang_Garden', // 事件名称
                            // 参数
                            params: {
                                val: 220503000000
                            }
                        }, '*')
                    } else if (mode_RenShen == 'All') {
                         LoadShp_ErDaoJiang();
                        window.parent.postMessage({
                            eventName: 'zoomIn_ErDaoJiang_All', // 事件名称
                            // 参数
                            params: {
                                val: 220503000000
                            }
                        }, '*')
                    }
                } catch (error) {
                    window.parent.postMessage({
                        eventName: 'zoomIn_ErDaoJiang_All', // 事件名称
                        // 参数
                        params: {
                            val: 220503000000
                        }
                    }, '*')
                }

                zoomInLocation = 'ErDaoJiang';

                break;
            case '东昌区':
                viewer0.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(125.934696, 41.655546, 70000),
                    orientation: {
                        heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
                        pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
                        roll: 0 // 视口翻滚角度
                    }
                });
                try {
                    if (mode_RenShen == 'Forest') {
                        LoadForestShp_DongChang();
                        window.parent.postMessage({
                            eventName: 'zoomIn_DongChang_Forest', // 事件名称
                            // 参数
                            params: {
                                val: 220502000000
                            }
                        }, '*')
                    } else if (mode_RenShen == 'Garden') {
                        LoadGardenShp_DongChang();
                        HideAllLeftPanel()
                        document.getElementById("UIPanel_left_DongChang").style.visibility = 'visible';
                        window.parent.postMessage({
                            eventName: 'zoomIn_DongChang_Garden', // 事件名称
                            // 参数
                            params: {
                                val: 220502000000
                            }
                        }, '*')
                    } else if (mode_RenShen == 'All') {
                         LoadShp_DongChang();
                        window.parent.postMessage({
                            eventName: 'zoomIn_DongChang_All', // 事件名称
                            // 参数
                            params: {
                                val: 220502000000
                            }
                        }, '*')
                    }
                } catch (error) {
                    window.parent.postMessage({
                        eventName: 'zoomIn_DongChang_All', // 事件名称
                        // 参数
                        params: {
                            val: 220502000000
                        }
                    }, '*')
                }

                zoomInLocation = 'DongChang';

                break;
            case '辉南县':
                viewer0.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(126.294696, 42.555546, 120000),
                    orientation: {
                        heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
                        pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
                        roll: 0 // 视口翻滚角度
                    }
                });
                try {
                    if (mode_RenShen == 'Forest') {
                        LoadForestShp_HuiNan();
                        window.parent.postMessage({
                            eventName: 'zoomIn_HuiNan_Forest', // 事件名称
                            // 参数
                            params: {
                                val: 220523000000
                            }
                        }, '*')
                    } else if (mode_RenShen == 'Garden') {
                        LoadGardenShp_HuiNan();
                        HideAllLeftPanel()
                        document.getElementById("UIPanel_left_HuiNan").style.visibility = 'visible';
                        window.parent.postMessage({
                            eventName: 'zoomIn_HuiNan_Garden', // 事件名称
                            // 参数
                            params: {
                                val: 220523000000
                            }
                        }, '*')
                    } else if (mode_RenShen == 'All') {
                         LoadShp_HuiNan();
                        window.parent.postMessage({
                            eventName: 'zoomIn_HuiNan_All', // 事件名称
                            // 参数
                            params: {
                                val: 220523000000
                            }
                        }, '*')
                    }
                } catch (error) {
                    window.parent.postMessage({
                        eventName: 'zoomIn_HuiNan_All', // 事件名称
                        // 参数
                        params: {
                            val: 220523000000
                        }
                    }, '*')
                }

                zoomInLocation = 'HuiNan';

                break;
        }
        zoomIn = true;
    }
}, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);


