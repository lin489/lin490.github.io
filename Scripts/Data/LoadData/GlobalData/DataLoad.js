
/**GeoServer地址*/
window.geoserverURL = 'https://dikuai.tonghuarenshen.com.cn:8989';
window.mode_RenShen = 'All';

var allShpMode = true;
var showState_JiAn = true, showState_HuiNan = true, showState_TongHuaChengQu = true, showState_LiuHe = true, showState_TongHua = true

/**显示宜参地图斑*/
var showSuitableArea = false
/**显示已种植图斑*/
var showPlantedArea = false
/**显示未种植图斑*/
var showUnplantedArea = false

/**显示林下参已种植图斑*/
var showPlantedForest = false
/**显示园参已种植图斑*/
var showPlantedGarden = false

/**显示林下参未种植图斑*/
var showUnplantedForest = false
/**显示园参未种植图斑*/
var showUnplantedGarden = false


var presentTempBtn = 0
var tempBtnHighLight_1 = false, tempBtnHighLight_2 = false, tempBtnHighLight_3 = false

var plantedShpLoadState = false;

var forestShpLoadState = false
var gardenShpLoadState = false

//首页--林下参未种植影像数组
window.WMTSForestList_County = []
//首页--园参未种植影像数组
window.WMTSGardenList_County = []
//林下参--林下参未种植影像 分通天、通地、通人三级
window.WMTSList = [];
//园参--园参已种植影像数组
window.wmtsGarden;

//KMZ加载参数
var options = {
    camera: viewer0.scene.camera,
    canvas: viewer0.scene.canvas,
    clampToGround: true
};

//通化所有数据.shp加载情况
var allShpLoadState = false;

var TongHuaMapLoadState_2023 = false;
var TongHuaMapList_2023 = [];
var TongHuaMapLoadState_2022 = false;
var TongHuaMapList_2022 = [];
var hadChangeColor = false;

//LoadFutureRenShenShp()

/**
 * 默认加载数据 在HierarchyPanel.js中被调用
 * 通化区划.geojson 通化蒙版.geojson
 */
function DefaultDataLoad() {

    Cesium.GeoJsonDataSource.load('geojson/通化区划.geojson', {
        clampToGround: true,
        fill: Cesium.Color.PINK.withAlpha(0)
    })
        .then(function (datasource) {
            datasource._name = 'geojson/通化区划.geojson';
            viewer0.dataSources.add(datasource);
            AddNode('通化区划', 'geojson/通化区划.geojson');
            entities = datasource.entities.values;
            console.log(entities)
            entities.forEach(entity => {
                var positions = entity.polygon.hierarchy._value.positions;

                datasource.entities.add({
                    name: 'boderLine',
                    polyline: {
                        positions: positions,
                        width: 1,
                        material: Cesium.Color.BLACK.withAlpha(0.6),
                        clampToGround: false
                    },
                })
            })
        });

    Cesium.GeoJsonDataSource.load('geojson/通化蒙版.geojson', {
        clampToGround: true,
        fill: new Cesium.Color(0.37, 0.26, 0.37, 0.5)
    })
        .then(function (datasource) {
            datasource._name = 'geojson/通化蒙版.geojson';
            viewer0.dataSources.add(datasource);
            AddNode('通化蒙版', 'geojson/通化蒙版.geojson');
        });


    CreateLabel()
    LoadGeoServerData()
    try { Home(); }
    catch (e) { }

}

/**
 * 添加通化所有geojson数据
 */
async function LoadAllRenShenShp() {
    //判断是否已经加载过
    if (!allShpLoadState) {
        Cesium.GeoJsonDataSource.load('geojson/林下参.geojson', {
            clampToGround: true,

        })
            .then(function (datasource) {
                datasource._name = 'geojson/林下参.geojson';
                viewer0.dataSources.add(datasource);
                entities = datasource.entities.values;
                // console.log(entities)

                entities.forEach(entity => {
                    //为每个polygon绘制描边
                    var positions = entity.polygon.hierarchy._value.positions;
                    var lineEntity = datasource.entities.add({
                        name: 'boderLine',
                        polyline: {
                            positions: positions,
                            //描边宽度
                            width: 1,
                            //描边材质
                            material: Cesium.Color.GREY.withAlpha(0.3),
                            //根据相机距离控制显示与否
                            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 100000)
                        },
                    })
                    lineEntity.name = entity.id;

                    //根据地块分级上色
                    var color_1 = new Cesium.Color(0.758, 0.207, 0.191, 1);
                    var color_2 = new Cesium.Color(0.000, 0.921, 0.640, 1);
                    var color_3 = new Cesium.Color(0.601, 0.367, 0.972, 1);

                    if (entity.properties.分级 == '通天') {
                        entity.polygon.material = color_1;

                    } else if (entity.properties.分级 == '通地') {
                        entity.polygon.material = color_2;

                    } else if (entity.properties.分级 == '通人') {
                        entity.polygon.material = color_3;
                    }
                    entity.show = false;
                })
                forestShpLoadState = true;
            });

        Cesium.GeoJsonDataSource.load('geojson/园参.geojson', {
            clampToGround: true,
        })
            .then(function (datasource) {
                datasource._name = 'geojson/园参.geojson';
                viewer0.dataSources.add(datasource);
                entities = datasource.entities.values;
                // console.log(entities)

                entities.forEach(entity => {
                    //为每个polygon绘制描边
                    var positions = entity.polygon.hierarchy._value.positions;
                    var lineEntity = datasource.entities.add({
                        name: 'boderLine',
                        polyline: {
                            positions: positions,
                            //描边宽度
                            width: 1,
                            //描边材质
                            material: Cesium.Color.GREY.withAlpha(0.3),
                            //根据相机距离控制显示与否
                            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 100000)
                        },
                    })
                    lineEntity.name = entity.id;

                    if (entity.properties.参龄 == '1') {
                        entity.polygon.material = Cesium.Color.fromCssColorString('#5E0004')
                    } else if (entity.properties.参龄 == '2') {
                        entity.polygon.material = Cesium.Color.fromCssColorString('#FF6347')
                    } else if (entity.properties.参龄 == '3') {
                        entity.polygon.material = Cesium.Color.fromCssColorString('#F7E14D')
                    } else if (entity.properties.参龄 == '4') {
                        entity.polygon.material = Cesium.Color.fromCssColorString('#81CECF')
                    } else if (entity.properties.参龄 == '5') {
                        entity.polygon.material = Cesium.Color.fromCssColorString('#8A42C6')
                    }
                    entity.show = false;
                })
                gardenShpLoadState = true;

            });


            
        // //加载集安园参非官方.geojson
        // Cesium.GeoJsonDataSource.load('geojson/集安园参非官方.geojson', {
        //     clampToGround: true,
        //     fill: Cesium.Color.YELLOW.withAlpha(0.8),
        // })
        //     .then(function (datasource) {
        //         datasource._name = 'geojson/集安园参非官方.geojson';
        //         viewer0.dataSources.add(datasource);
        //         datasource.show = false;
        //     });
        // //加载集安园参官方.geojson
        // Cesium.GeoJsonDataSource.load('geojson/集安园参官方.geojson', {
        //     clampToGround: true,
        //     fill: Cesium.Color.YELLOW.withAlpha(0.8),
        // })
        //     .then(function (datasource) {
        //         datasource._name = 'geojson/集安园参官方.geojson';
        //         viewer0.dataSources.add(datasource);
        //         datasource.show = false;
        //     });


        allShpLoadState = true;
    } else {
        viewer0.dataSources._dataSources.forEach(datasource => {
            if (datasource._name == 'geojson/林下参.geojson') {
                datasource.show = false;
            }
            if (datasource._name == 'geojson/园参.geojson') {
                datasource.show = false;
            }
        })
        //ShowYiShenPrimitive()
    }

    WMTSList.forEach(wmts => {
        wmts.show = false;
    });

    allShpMode = true;
}

//加载林下参Shp
async function LoadForestShp() {
    allShpMode = false;
    HideYiShenPrimitive()
}

//修改通化所有数据.geojson的entity颜色为首页状态 (已弃用)
function ChangeAllShpColor() {
    return new Promise((resolve) => {
        viewer0.dataSources._dataSources.forEach(datasource => {
            if (datasource._name == 'geojson/通化所有数据.geojson') {
                datasource.entities._entities._array.forEach(entity => {
                    try {
                        if (entity.properties.地块类型 == '林下参') {
                            entity.polygon.material = Cesium.Color.YELLOW.withAlpha(0.8);
                        }
                    }
                    catch { }
                    hadChangeColor = false;
                    entity.show = true;
                });
            }
        });
    });
}

//修改通化所有数据.geojson的entity颜色为林下参状态 (已弃用)
function ChangeForestShpColor() {
    return new Promise((resolve) => {
        viewer0.dataSources._dataSources.forEach(datasource => {
            if (datasource._name == 'geojson/通化所有数据.geojson') {
                var color_1 = new Cesium.Color(0.857, 0.207, 0.191, 1);
                var color_2 = new Cesium.Color(0.683, 0.816, 0.222, 1);
                var color_3 = new Cesium.Color(0.378, 0.625, 0.656, 1);

                datasource.entities._entities._array.forEach(entity => {
                    try {
                        if (entity.properties.地块类型 == '林下参') {
                            entity.show = true;

                        } else {
                            entity.show = false;
                        }

                        if (entity.properties.分级 == '通天') {
                            //entity.polygon.material = Cesium.Color.RED.withAlpha(0.8);
                            entity.polygon.material = color_1;

                        } else if (entity.properties.分级 == '通地') {
                            //entity.polygon.material = Cesium.Color.GREY.withAlpha(0.8);
                            entity.polygon.material = color_2;

                        } else if (entity.properties.分级 == '通人') {
                            //entity.polygon.material = Cesium.Color.WHITE.withAlpha(0.8);
                            entity.polygon.material = color_3;

                        }

                    }
                    catch { }
                });
                hadChangeColor = true;
            }
        });
    });
}


/**
 * 加载园参Shp
 */
function LoadGardenShp() {
    viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/通化所有数据.geojson') {
            datasource.show = true;
            datasource.entities._entities._array.forEach(entity => {
                try {
                    if (entity.properties.地块类型 == '园参') {
                        entity.show = true;

                    } else {
                        entity.show = false;
                    }

                    // if(entity.properties.分级 == '通天'){
                    //     //entity.polygon.material = Cesium.Color.RED.withAlpha(0.8);
                    //     entity.polygon.material = new Cesium.Color(0.89, 0.2, 0.19, 0.9);
                    // }else if(entity.properties.分级 == '通地'){
                    //     //entity.polygon.material = Cesium.Color.GREY.withAlpha(0.8);
                    //     entity.polygon.material = new Cesium.Color(0.183, 0.269, 0.328, 0.9);
                    // }else if(entity.properties.分级 == '通人'){
                    //     //entity.polygon.material = Cesium.Color.WHITE.withAlpha(0.8);
                    //     entity.polygon.material =new Cesium.Color(0.378, 0.625, 0.656, 0.9);
                    // }
                }
                catch { }
            });
        }
        if (datasource._name == 'geojson/通化首页数据.geojson') {
            datasource.show = false;
        }

    });
    allShpMode = false;

    HideYiShenPrimitive()
}

/**
 * 加载林分图
 */
function LoadForestJson() {
    Cesium.GeoJsonDataSource.load('geojson/林分图.geojson', {
        clampToGround: true,
        fill: Cesium.Color.GREEN.withAlpha(0.9)
    })
        .then(function (datasource) {
            datasource._name = 'geojson/林分图.geojson';
            viewer0.dataSources.add(datasource);
            AddNode('林分图', 'geojson/林分图.geojson');
            viewer0.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(125.665197, 41.987551, 16000),
                orientation: {
                    heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
                    pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
                    roll: 0 // 视口翻滚角度
                }
            });
        });
}

/**
 * 加载2023年的通化遥感影像
 */
function LoadTongHuaTif_2023() {

    if (TongHuaMapLoadState_2023 == false) {
        TongHuaMapList_2023.push(LoadWMS(geoserverURL + "/geoserver/renshen/wms", 'renshen:tonghuaquanyu_1', '通化影像1'));
        TongHuaMapList_2023.push(LoadWMS(geoserverURL + "/geoserver/renshen/wms", 'renshen:tonghuaquanyu_2', '通化影像2'));
        TongHuaMapList_2023.push(LoadWMS(geoserverURL + "/geoserver/renshen/wms", 'renshen:tonghuaquanyu_3', '通化影像3'));
        TongHuaMapList_2023.push(LoadWMS(geoserverURL + "/geoserver/renshen/wms", 'renshen:tonghuaquanyu_4', '通化影像4'));
        TongHuaMapList_2023.push(LoadWMS(geoserverURL + "/geoserver/renshen/wms", 'renshen:tonghuaquanyu_5', '通化影像5'));
        TongHuaMapList_2023.push(LoadWMS(geoserverURL + "/geoserver/renshen/wms", 'renshen:tonghuaquanyu_6', '通化影像6'));
        TongHuaMapList_2023.push(LoadWMS(geoserverURL + "/geoserver/renshen/wms", 'renshen:tonghuaquanyu_7', '通化影像7'));

        TongHuaMapLoadState_2023 = true;
    }
    else {
        TongHuaMapList_2023.forEach(element => {
            element.show = true;
        });
    }
}

/**
 * 隐藏通化遥感影像
 */
function HideTongHuaTif() {

    if (TongHuaMapLoadState_2023 == true) {
        TongHuaMapList_2023.forEach(element => {

            element.show = false;
        });
    }
    if (TongHuaMapLoadState_2022 == true) {
        TongHuaMapList_2022.forEach(element => {

            element.show = false;
        });
    }
}

/**
 * 添加识别园参数据
 */
function LoadGardenAnalyseShp() {
    if (gardenAnalyseShpLoadState) {
        viewer0.dataSources._dataSources.forEach(datasource => {
            if (datasource._name == 'geojson/属性表/园参识别属性表.geojson') {
                datasource.show = true;
            }
        });
        return;
    }

    Cesium.GeoJsonDataSource.load('geojson/属性表/园参识别属性表.geojson', {
        clampToGround: true,
        fill: Cesium.Color.YELLOW.withAlpha(0.8)
    })
        .then(function (datasource) {
            datasource._name = 'geojson/属性表/园参识别属性表.geojson';
            viewer0.dataSources.add(datasource);
            entities = datasource.entities.values;
            // console.log(entities)
            entities.forEach(entity => {

                // 设置点标记坐标  
                entity.polygon.material = Cesium.Color.YELLOW.withAlpha(0.8);

            })
            gardenAnalyseShpLoadState = true;
            AddNode('园参识别属性表', 'geojson/属性表/园参识别属性表.geojson');
        });

}

/**
 * 隐藏识别园参数据
 */
function HideGardenAnalyseShp() {
    if (gardenAnalyseShpLoadState) {
        viewer0.dataSources._dataSources.forEach(datasource => {
            if (datasource._name == 'geojson/属性表/园参识别属性表.geojson') {
                datasource.show = false;
            }
        });
    }
}

/**
 * 为每个区划创建一个名称label
 */
function CreateLabel() {

    viewer0.entities.add(
        new Cesium.Entity({
            position: Cesium.Cartesian3.fromDegrees(125.634133, 41.716438, 0),
            name: '',
            label: {
                text: '通化县',
                scale: 0.6,
                fillColor: Cesium.Color.AQUA,
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,//对齐方式
                verticalOrigin: Cesium.VerticalOrigin.CENTER,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(1000, 800000)
            }
        })
    );
    viewer0.entities.add(
        new Cesium.Entity({
            position: Cesium.Cartesian3.fromDegrees(126.241524, 41.535799, 0),
            name: '',
            label: {
                text: '通化县',
                scale: 0.6,
                fillColor: Cesium.Color.AQUA,
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,//对齐方式
                verticalOrigin: Cesium.VerticalOrigin.CENTER,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(1000, 800000)
            }
        })
    );

    viewer0.entities.add(
        new Cesium.Entity({
            position: Cesium.Cartesian3.fromDegrees(125.979885, 41.665926, 0),
            name: '',
            label: {
                text: '东昌区',
                scale: 0.6,
                fillColor: Cesium.Color.AQUA,
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,//对齐方式
                verticalOrigin: Cesium.VerticalOrigin.CENTER,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(1000, 800000)
            }
        })
    );

    viewer0.entities.add(
        new Cesium.Entity({
            position: Cesium.Cartesian3.fromDegrees(126.149686, 41.741582, 0),
            name: '',
            label: {
                text: '二道江区',
                scale: 0.6,
                fillColor: Cesium.Color.AQUA,
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,//对齐方式
                verticalOrigin: Cesium.VerticalOrigin.CENTER,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(1000, 800000)
            }
        })
    );
    viewer0.entities.add(
        new Cesium.Entity({
            position: Cesium.Cartesian3.fromDegrees(125.963277, 41.240496, 0),
            name: '',
            label: {
                text: '集安市',
                scale: 0.6,
                fillColor: Cesium.Color.AQUA,
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,//对齐方式
                verticalOrigin: Cesium.VerticalOrigin.CENTER,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(1000, 800000)
            }
        })
    );
    viewer0.entities.add(
        new Cesium.Entity({
            position: Cesium.Cartesian3.fromDegrees(125.895398, 42.178959, 0),
            name: '',
            label: {
                text: '柳河县',
                scale: 0.6,
                fillColor: Cesium.Color.AQUA,
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,//对齐方式
                verticalOrigin: Cesium.VerticalOrigin.CENTER,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(1000, 800000)
            }
        })
    );
    viewer0.entities.add(
        new Cesium.Entity({
            position: Cesium.Cartesian3.fromDegrees(126.337523, 42.514256, 0),
            name: '',
            label: {
                text: '辉南县',
                scale: 0.6,
                fillColor: Cesium.Color.AQUA,
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,//对齐方式
                verticalOrigin: Cesium.VerticalOrigin.CENTER,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(1000, 800000)
            }
        })
    );
}

/**
 * 加载Geoserver影像数据
 */
function LoadGeoServerData() {
    // LoadGeojsonDataByPrimitive('geojson/辉南县未种植_通天_FeaturesToJSON.geojson',new Cesium.Color(0.738, 0.535, 0.199, 0.6))
    // LoadGeojsonDataByPrimitive('geojson/辉南县未种植_通地_FeaturesToJSON.geojson',new Cesium.Color(0.000, 0.921, 0.640, 0.6))
    // LoadGeojsonDataByPrimitive('geojson/辉南县未种植_通人_FeaturesToJSON.geojson',new Cesium.Color(0.601, 0.367, 0.972, 0.6))

    // LoadGeojsonDataByPrimitive('geojson/集安市未种植_通天_FeaturesToJSON.geojson',new Cesium.Color(0.738, 0.535, 0.199, 0.6))
    // LoadGeojsonDataByPrimitive('geojson/集安市未种植_通地_FeaturesToJSON.geojson',new Cesium.Color(0.000, 0.921, 0.640, 0.6))
    // LoadGeojsonDataByPrimitive('geojson/集安市未种植_通人_FeaturesToJSON.geojson',new Cesium.Color(0.601, 0.367, 0.972, 0.6))

    // LoadGeojsonDataByPrimitive('geojson/柳河县未种植_通天_FeaturesToJSON.geojson',new Cesium.Color(0.738, 0.535, 0.199, 0.6))
    // LoadGeojsonDataByPrimitive('geojson/柳河县未种植_通地_FeaturesToJSON.geojson',new Cesium.Color(0.000, 0.921, 0.640, 0.6))
    // LoadGeojsonDataByPrimitive('geojson/柳河县未种植_通人_FeaturesToJSON.geojson',new Cesium.Color(0.601, 0.367, 0.972, 0.6))

    // LoadGeojsonDataByPrimitive('geojson/通化城区未种植_通天_FeaturesToJSON.geojson',new Cesium.Color(0.738, 0.535, 0.199, 0.6))
    // LoadGeojsonDataByPrimitive('geojson/通化城区未种植_通地_FeaturesToJSON.geojson',new Cesium.Color(0.000, 0.921, 0.640, 0.6))
    // LoadGeojsonDataByPrimitive('geojson/通化城区未种植_通人_FeaturesToJSON.geojson',new Cesium.Color(0.601, 0.367, 0.972, 0.6))

    // LoadGeojsonDataByPrimitive('geojson/通化县未种植_通天_FeaturesToJSON.geojson',new Cesium.Color(0.738, 0.535, 0.199, 0.6))
    // LoadGeojsonDataByPrimitive('geojson/通化县未种植_通地_FeaturesToJSON.geojson',new Cesium.Color(0.000, 0.921, 0.640, 0.6))
    // LoadGeojsonDataByPrimitive('geojson/通化县未种植_通人_FeaturesToJSON.geojson',new Cesium.Color(0.601, 0.367, 0.972, 0.6))
    // http://localhost:8989/geoserver/gwc/service/wmts/rest/renshen:通化城区未种植_通天_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}?format=image/png

    // let wmts0 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:柳河县未种植_通天_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:柳河县未种植_通天_ExportFeatures', '柳河县未种植_通天')
    // wmts0.alpha = 0.5
    // wmts0.brightness = 2
    // let wmts1 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:柳河县未种植_通地_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:柳河县未种植_通地_ExportFeatures', '柳河县未种植_通地')
    // wmts1.alpha = 0.5
    // wmts1.brightness = 2
    // let wmts2 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:柳河县未种植_通人_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:柳河县未种植_通人_ExportFeatures', '柳河县未种植_通人')
    // wmts2.alpha = 0.5
    // wmts2.brightness = 2

    // let wmts3 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:辉南县未种植_通天_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:辉南县未种植_通天_ExportFeatures', '辉南县未种植_通天')
    // wmts3.alpha = 0.5
    // wmts3.brightness = 2
    // let wmts4 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:辉南县未种植_通地_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:辉南县未种植_通地_ExportFeatures', '辉南县未种植_通地')
    // wmts4.alpha = 0.5
    // wmts4.brightness = 2
    // let wmts5 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:辉南县未种植_通人_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:辉南县未种植_通人_ExportFeatures', '辉南县未种植_通人')
    // wmts5.alpha = 0.5
    // wmts5.brightness = 2

    // let wmts6 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:通化县未种植_通天_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:通化县未种植_通天_ExportFeatures', '通化县未种植_通天')
    // wmts6.alpha = 0.5
    // wmts6.brightness = 2
    // let wmts7 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:通化县未种植_通地_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:通化县未种植_通地_ExportFeatures', '通化县未种植_通地')
    // wmts7.alpha = 0.5
    // wmts7.brightness = 2
    // let wmts8 = (geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:通化县未种植_通人_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:通化县未种植_通人_ExportFeatures', '通化县未种植_通人')
    // wmts8.alpha = 0.5
    // wmts8.brightness = 2

    // let wmts9 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:通化城区未种植_通天_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:通化城区未种植_通天_ExportFeatures', '通化城区未种植_通天')
    // wmts9.alpha = 0.5
    // wmts9.brightness = 2
    // let wmts10 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:通化城区未种植_通地_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:通化城区未种植_通地_ExportFeatures', '通化城区未种植_通地')
    // wmts10.alpha = 0.5
    // wmts10.brightness = 2
    // let wmts11 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:通化城区未种植_通人_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:通化城区未种植_通人_ExportFeatures', '通化城区未种植_通人')
    // wmts11.alpha = 0.5
    // wmts11.brightness = 2

    // let wmts12 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:集安市未种植_通天_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:集安市未种植_通天_ExportFeatures', '集安市未种植_通天')
    // wmts12.alpha = 0.5
    // wmts12.brightness = 2
    // let wmts13 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:集安市未种植_通地_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:集安市未种植_通地_ExportFeatures', '集安市未种植_通地')
    // wmts13.alpha = 0.5
    // wmts13.brightness = 2
    // let wmts14 = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:集安市未种植_通人_ExportFeatures/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:集安市未种植_通人_ExportFeatures', '集安市未种植_通人')
    // wmts14.alpha = 0.5
    // wmts14.brightness = 2

    // WMTSList.push(wmts0)
    // WMTSList.push(wmts1)
    // WMTSList.push(wmts2)
    // WMTSList.push(wmts3)
    // WMTSList.push(wmts4)
    // WMTSList.push(wmts5)
    // WMTSList.push(wmts6)
    // WMTSList.push(wmts7)
    // WMTSList.push(wmts8)
    // WMTSList.push(wmts9)
    // WMTSList.push(wmts10)
    // WMTSList.push(wmts11)
    // WMTSList.push(wmts12)
    // WMTSList.push(wmts13)
    // WMTSList.push(wmts14)

    wmtsGarden = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:园参宜参地/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:园参宜参地', '园参宜参地')
    wmtsGarden.alpha = 0.7
    wmtsGarden.brightness = 2

    wmtsGarden.show = false
    // LoadGeojsonData('geojson/辉南县林下参已种植.geojson', Cesium.Color.RED.withAlpha(1), '辉南县林下参已种植', true)
    // LoadGeojsonData('geojson/集安市林下参已种植.geojson', Cesium.Color.RED.withAlpha(1), '集安市林下参已种植', true)
    // LoadGeojsonData('geojson/柳河县林下参已种植.geojson', Cesium.Color.RED.withAlpha(1), '柳河县林下参已种植', true)
    // LoadGeojsonData('geojson/通化城区林下参已种植.geojson', Cesium.Color.RED.withAlpha(1), '通化城区林下参已种植', true)
    // LoadGeojsonData('geojson/通化县林下参已种植.geojson', Cesium.Color.RED.withAlpha(1), '通化县林下参已种植', true)



    let wmtsForest_LiuHe = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:林下参未种植_柳河县/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:林下参宜参地_柳河县', '林下参宜参地_柳河县')
    wmtsForest_LiuHe.alpha = 1
    wmtsForest_LiuHe.brightness = 1.4
    let wmtsForest_HuiNan = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:林下参未种植_辉南县/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:林下参宜参地_辉南县', '林下参宜参地_辉南县')
    wmtsForest_HuiNan.alpha = 1
    wmtsForest_HuiNan.brightness = 1.4
    let wmtsForest_TongHua = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:林下参未种植_通化县/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:林下参宜参地_通化县', '林下参宜参地_通化县')
    wmtsForest_TongHua.alpha = 1
    wmtsForest_TongHua.brightness = 1.4
    let wmtsForest_TongHuaChengQu = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:林下参未种植_通化城区/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:林下参宜参地_通化城区', '林下参宜参地_通化城区')
    wmtsForest_TongHuaChengQu.alpha = 1
    wmtsForest_TongHuaChengQu.brightness = 1.4
    let wmtsForest_JiAn = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:林下参未种植_集安市/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:林下参宜参地_集安市', '林下参宜参地_集安市')
    wmtsForest_JiAn.alpha = 1
    wmtsForest_JiAn.brightness = 1.4

    WMTSList.push(wmtsForest_LiuHe)
    WMTSList.push(wmtsForest_HuiNan)
    WMTSList.push(wmtsForest_TongHua)
    WMTSList.push(wmtsForest_TongHuaChengQu)
    WMTSList.push(wmtsForest_JiAn)

    WMTSForestList_County.push(wmtsForest_LiuHe)
    WMTSForestList_County.push(wmtsForest_HuiNan)
    WMTSForestList_County.push(wmtsForest_TongHua)
    WMTSForestList_County.push(wmtsForest_TongHuaChengQu)
    WMTSForestList_County.push(wmtsForest_JiAn)

    let wmtsGarden_LiuHe = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:园参宜参地_柳河县/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:园参宜参地_柳河县', '园参宜参地_柳河县')
    wmtsGarden_LiuHe.alpha = 1
    wmtsGarden_LiuHe.brightness = 2
    let wmtsGarden_HuiNan = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:园参宜参地_辉南县/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:园参宜参地_辉南县', '园参宜参地_辉南县')
    wmtsGarden_HuiNan.alpha = 1
    wmtsGarden_HuiNan.brightness = 2
    let wmtsGarden_TongHua = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:园参宜参地_通化县/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:园参宜参地_通化县', '园参宜参地_通化县')
    wmtsGarden_TongHua.alpha = 1
    wmtsGarden_TongHua.brightness = 2
    let wmtsGarden_TongHuaChengQu = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:园参宜参地_通化城区/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:园参宜参地_通化城区', '园参宜参地_通化城区')
    wmtsGarden_TongHuaChengQu.alpha = 1
    wmtsGarden_TongHuaChengQu.brightness = 2
    let wmtsGarden_JiAn = LoadWMTS(geoserverURL + "/geoserver/gwc/service/wmts/rest/renshen:园参宜参地_集安市/{style}/{TileMatrixSet}/{TileMatrixSet}:{TileMatrix}/{TileRow}/{TileCol}?format=image/png", 'renshen:园参宜参地_集安市', '园参宜参地_集安市')
    wmtsGarden_JiAn.alpha = 1
    wmtsGarden_JiAn.brightness = 2

    WMTSGardenList_County.push(wmtsGarden_LiuHe)
    WMTSGardenList_County.push(wmtsGarden_HuiNan)
    WMTSGardenList_County.push(wmtsGarden_TongHua)
    WMTSGardenList_County.push(wmtsGarden_TongHuaChengQu)
    WMTSGardenList_County.push(wmtsGarden_JiAn)

    WMTSForestList_County.forEach(element => {
        element.show = false
    });
    WMTSGardenList_County.forEach(element => {
        element.show = false
    });
    WMTSList.forEach(element => {
        element.show = false
    });
    wmtsGarden.show = false;
}

/**
 * 添加 geojson数据
 * @arguments[0] geojsonURL
 * @arguments[1] color（可选）
 * @arguments[2] 层级面板中的图层name（可选）
 */
function LoadGeojsonData() {
    let url = arguments[0];
    let color = Cesium.Color.YELLOW.withAlpha(1);
    color = arguments[1];
    let name = '图层'
    name = arguments[2];
    let modifyAppearance = false
    modifyAppearance = arguments[3];
    Cesium.GeoJsonDataSource.load(url, {
        clampToGround: true,
        fill: color
    })
        .then(function (datasource) {
            datasource._name = url
            viewer0.dataSources.add(datasource);

            if (modifyAppearance) {
                entities = datasource.entities.values;
                entities.forEach(entity => {
                    var positions = entity.polygon.hierarchy._value.positions;
                    var lineEntity = datasource.entities.add({
                        name: 'boderLine',
                        polyline: {
                            positions: positions,
                            width: 1,
                            material: Cesium.Color.GREY.withAlpha(0.3),

                            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 100000)
                        },
                    })

                    lineEntity.name = entity.id;
                    var color_1 = new Cesium.Color(0.738, 0.535, 0.199, 1);
                    var color_2 = new Cesium.Color(0.000, 0.921, 0.640, 1);
                    var color_3 = new Cesium.Color(0.601, 0.367, 0.972, 1);
                    if (entity.properties.分级 == '通天') {
                        entity.polygon.material = color_1;

                    } else if (entity.properties.分级 == '通地') {
                        entity.polygon.material = color_2;

                    } else if (entity.properties.分级 == '通人') {
                        entity.polygon.material = color_3;

                    }

                })
            }

            AddNode(name, url);
        });


}

function LoadGeojsonDataByPrimitive() {
    let url = arguments[0];
    let color = Cesium.Color.YELLOW.withAlpha(1);
    color = arguments[1];
    let name = '图层'
    name = arguments[2];
    $.get(url, function (data) {
        const features = data.features;
        PrimitiveLow = AddDataToGlobe(features, color)
        AddNode(name, url);
    })
}

/**
 * 控制首页已种植数据'geojson/通化首页数据.geojson'的显示与隐藏
 */
function ShowPlantedShp(show) {
    // if (plantedShpLoadState) {
    //     viewer0.dataSources._dataSources.forEach(datasource => {
    //         if (datasource._name == 'geojson/通化首页数据.geojson') {
    //             datasource.show = datasource.show == true ? false : true;
    //             showPlantedArea = datasource.show == true ? true : false;
    //         }
    //     })
    // } else {
    //     LoadPlantedShp()
    //     plantedShpLoadState = true;
    //     showPlantedArea = true;
    // }

        viewer0.dataSources._dataSources.forEach(datasource => {
            if (datasource._name == 'geojson/林下参.geojson') {
                entities = datasource.entities.values;
                entities.forEach(entity => {
                    try{
                        if (entity.properties.种植 == '已种植') {
                            entity.show = show;
                        }
                    }catch{}

                })
            }
            if (datasource._name == 'geojson/园参.geojson') {
                entities = datasource.entities.values;
                entities.forEach(entity => {
                    try{
                        if (entity.properties.种植 == '已种植') {
                            entity.show = show;
                        }
                    }catch{}

                })
            }
        })
}

function ShowUnplantedShp(show){
    viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/林下参.geojson') {

            entities = datasource.entities.values;
            entities.forEach(entity => {
                try{
                    if (entity.properties.种植 == '未种植') {
                        entity.show = show;
                    }
                }catch{}

            })
        }
        if (datasource._name == 'geojson/园参.geojson') {
            entities = datasource.entities.values;
            entities.forEach(entity => {
                try{
                    if (entity.properties.种植 == '未种植') {
                        entity.show = show;
                    }
                }catch{}

            })
        }
    })
}

/**
 * 添加首页 已种植人参的geojson数据
 * datasource._name = 'geojson/通化首页数据.geojson'
 */
function LoadPlantedShp() {
    Cesium.GeoJsonDataSource.load('geojson/通化所有数据.geojson', {
        clampToGround: true,
        fill: Cesium.Color.BLUE.withAlpha(0.8),
    })
        .then(function (datasource) {
            datasource._name = 'geojson/通化首页数据.geojson';
            viewer0.dataSources.add(datasource);
            datasource.show = true;
            entities = datasource.entities.values;
            entities.forEach(entity => {
                var positions = entity.polygon.hierarchy._value.positions;
                var lineEntity = datasource.entities.add({
                    name: 'boderLine',
                    polyline: {
                        positions: positions,
                        width: 1,
                        material: Cesium.Color.GREY.withAlpha(0.3),

                        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 100000)
                    },
                })

                lineEntity.name = entity.id;
                var color_2 = new Cesium.Color(0.027, 0.46875, 1, 1);
                var color_3 = new Cesium.Color(1, 0.98, 0.32, 1);
                if (entity.properties.地块类型 == '林下参') {
                    entity.polygon.material = color_2;
                }
                else if (entity.properties.地块类型 == '园参') {
                    entity.polygon.material = color_3;
                }


            })
        });
}

/**
 * 添加园参未来种植情况.geojson数据
 * 'geojson/园参未来种植情况.geojson'
 */
function LoadFutureRenShenShp() {
    Cesium.GeoJsonDataSource.load('geojson/园参未来种植情况.geojson', {
        fill: Cesium.Color.BLUE.withAlpha(1),
        clampToGround: true
    })
        .then(function (datasource) {
            datasource._name = 'geojson/园参未来种植情况.geojson';  0
            viewer0.dataSources.add(datasource);
            datasource.show = false;
            entities = datasource.entities.values;
            entities.forEach(entity => {
                var positions = entity.polygon.hierarchy._value.positions;
                var lineEntity = datasource.entities.add({
                    name: entity.properties.未来,
                    polyline: {
                        positions: positions,
                        width: 2,
                        material: Cesium.Color.BLUE.withAlpha(0.8),

                        //distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 100000)
                    },
                })
            })
        });
}

/**
 * 加载WMS影像 
 * @param {string} url 第一个参数 Geoserver影像地址
 * @param {string} layer 第二个参数 Geoserver影像图层
 * @param {string} name 第三个参数（可选）将显示的影像名称
 * @param {boolean} show 第四个参数（可选）显示状态-默认为true
 * @returns cesiumLayer
 */
function LoadWMS() {
    let url, layer, wmslayer, name, show = true;
    switch (arguments.length) {
        case 2:
            url = arguments[0];
            layer = arguments[1];
            AddNode(layer, url + '/' + layer);
            break;
        case 3:
            url = arguments[0];
            layer = arguments[1];
            name = arguments[2];
            AddNode(name, url + '/' + layer);
            break;
        case 4:
            url = arguments[0];
            layer = arguments[1];
            name = arguments[2];
            show = arguments[3];
            AddNode(name, url + '/' + layer, show);
            break;
        default:
            break;
    }
    wmslayer = new Cesium.WebMapServiceImageryProvider({
        url: url,
        layers: layer,
        parameters: {
            transparent: true,
            format: "image/png",
            srs: "EPSG:4326",
            styles: "",
        },
    });
    let cesiumLayer = viewer0.imageryLayers.addImageryProvider(wmslayer);
    cesiumLayer.show = show;
    return cesiumLayer;
}

/**
 * 加载WMTS影像 
 * @param {string} url 第一个参数 Geoserver影像地址
 * @param {string} layer 第二个参数 Geoserver影像图层
 * @param {string} name 第三个参数（可选）将显示的影像名称
 * @param {boolean} show 第四个参数（可选）显示状态-默认为true
 * @returns cesiumLayer
 */
function LoadWMTS() {
    let url, layer, wmslayer, name, show = true;
    switch (arguments.length) {
        case 2:
            url = arguments[0];
            layer = arguments[1];
            AddNode(layer, url + '/' + layer);
            break;
        case 3:
            url = arguments[0];
            layer = arguments[1];
            name = arguments[2];
            AddNode(name, url + '/' + layer);
            break;
        case 4:
            url = arguments[0];
            layer = arguments[1];
            name = arguments[2];
            show = arguments[3];
            AddNode(name, url + '/' + layer, show);
            break;
        default:
            break;
    }
    var wmtsLayer = new Cesium.WebMapTileServiceImageryProvider({
        url: url,  //修改将{TileMatrix}改为{TileMatrixSet}:{TileMatrix}
        layer: layer,
        style: '',
        format: 'image/png',
        tileMatrixSetID: 'EPSG:900913', //EPSG需修改
        maximumLevel: 20
    })

    let cesiumLayer = viewer0.imageryLayers.addImageryProvider(wmtsLayer);
    cesiumLayer.show = show;

    return cesiumLayer;
}

/** 加载WFS服务*/
function LoadWFS(url) {
    $.ajax({
        url: url,
        cache: false,
        async: true,
        success: function (data) {
            var datasource = Cesium.GeoJsonDataSource.load(data);
            viewer0.dataSources.add(datasource);
            datasource.name = url;
        },
        error: function (data) {
            console.log("error");
        }
    })
}