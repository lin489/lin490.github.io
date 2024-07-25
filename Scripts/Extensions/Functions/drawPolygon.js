// 多边形全部点的数组
var polygon_point_arr = [];
// 折线全部点的数组
var polyline_point_arr = [];
// 临时多边形entity
var temporary_polygon_entity = null;
// 临时折线entity
var temporary_polyline_entity = null;
var handler10 = null;
var handler11 = null;
var handler12 = null;
let rsMode = '林下参'
// 开启绘制的方法
function ClickDrawPolygon(type) {
    rsMode = type;

    // 清除可能会用到的监听事件
    if (handler10) {
        handler10.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
        handler10.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        handler10.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    }
    handler10 = new Cesium.ScreenSpaceEventHandler(viewer0.scene.canvas);

    //鼠标左键--确定选中点
    handler10.setInputAction((event) => {
        // 屏幕坐标转为空间坐标
        let cartesian = viewer0.camera.pickEllipsoid(event.position, viewer0.scene.globe.ellipsoid);
        // 判断是否定义（是否可以获取到空间坐标）
        if (Cesium.defined(cartesian)) {
            // 将点添加进保存多边形点的数组中，鼠标停止移动的时添加的点和，点击时候添加的点，坐标一样
            polygon_point_arr.push(cartesian);
            // 判断是否开始绘制动态多边形，没有的话则开始绘制
            if (temporary_polygon_entity == null) {
                // 绘制动态多边形
                DrawDynamicPolygon();
            }
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    //鼠标移动--实时绘制多边形
    handler10.setInputAction((event) => {
        // 屏幕坐标转为空间坐标
        let cartesian = viewer0.camera.pickEllipsoid(event.endPosition, viewer0.scene.globe.ellipsoid);
        // 判断是否定义（是否可以获取到空间坐标）
        if (Cesium.defined(cartesian)) {
            // 判断是否已经开始绘制动态多边形，已经开始的话，则可以动态拾取鼠标移动的点，修改点的坐标
            if (temporary_polygon_entity) {
                // 只要元素点大于一，每次就删除一个点，因为实时动态的点是添加上去的
                if (polygon_point_arr.length > 1) {
                    // 删除数组最后一个元素（鼠标移动添加进去的点）
                    polygon_point_arr.pop();
                }
                // 将新的点添加进动态多边形点的数组中，用于实时变化，注意：这里是先添加了一个点，然后再删除点，再添加，这样重复的
                polygon_point_arr.push(cartesian);
            }
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    //鼠标右键--结束绘制
    handler10.setInputAction((event) => {
        // 取消鼠标移动监听
        handler10.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        // 清除动态绘制的多边形
        viewer0.entities.remove(temporary_polygon_entity);
        // 删除保存的临时多边形的entity
        temporary_polygon_entity = null;
        // 绘制结果多边形
        let polygonEntity = DrawPolygon();
        // 清空多边形点数组，用于下次绘制
        polygon_point_arr = [];
        // 清除所有事件
        if (handler10) {
            handler10.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
            handler10.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            handler10.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
        }

        newEntity = polygonEntity
        if (rsMode == '林下参') {
            AddProperties_Forest(0);
        } else {
            AddProperties_Garden(0);
        }


    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
}

//绘制动态多边形
function DrawDynamicPolygon() {
    temporary_polygon_entity = viewer0.entities.add({
        polygon: {
            // 这个方法上面有重点说明
            hierarchy: new Cesium.CallbackProperty(() => {
                // PolygonHierarchy 定义多边形及其孔的线性环的层次结构（空间坐标数组）
                return new Cesium.PolygonHierarchy(polygon_point_arr);
            }, false),
            extrudedHeight: 0,  // 多边体的高度（多边形拉伸高度）
            height: 0,  // 多边形离地高度
            material: Cesium.Color.GREY.withAlpha(0.7),
        },
    });
}

//绘制结果多边形
function DrawPolygon() {
    // 删除最后一个动态添加的点，如果鼠标没移动，最后一个和倒数第二个是一样的，所以也要删除
    polygon_point_arr.pop();
    // 三个点以上才能绘制成多边形
    console.log(rsMode)
    console.log(polygon_point_arr)
    polygon_point_arr.push(polygon_point_arr[0])
    console.log(polygon_point_arr)
    let polygon_point_entity;
    if (polygon_point_arr.length >= 3) {
        if (rsMode == '林下参') {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/林下参.geojson') {
                    polygon_point_entity = datasource.entities.add({
                        polygon: {
                            hierarchy: polygon_point_arr,
                            extrudedHeight: 0,  // 多边体的高度（多边形拉伸高度）
                            height: 0,  // 多边形离地高度
                            material: Cesium.Color.RED.withAlpha(0.5),

                        },
                    });
                }
            });
        } else if (rsMode == '园参') {
            console.log(11111111111111111)
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    polygon_point_entity = datasource.entities.add({
                        polygon: {
                            hierarchy: polygon_point_arr,
                            extrudedHeight: 0,  // 多边体的高度（多边形拉伸高度）
                            height: 0,  // 多边形离地高度
                            material: Cesium.Color.RED.withAlpha(0.5),

                        },
                    });
                }
            });
        } else {
            polygon_point_entity = viewer0.entities.add({
                polygon: {
                    hierarchy: polygon_point_arr,
                    extrudedHeight: 0,  // 多边体的高度（多边形拉伸高度）
                    height: 0,  // 多边形离地高度
                    material: Cesium.Color.WHITE.withAlpha(0.5),

                },
            });
        }
        console.log(polygon_point_entity)
        return polygon_point_entity

        // 坐标转换--这里可以输出所有点位坐标，不需要就删除了
        // polygon_point_arr.forEach(val => {
        //   let polyObj = {}
        //   let cartographic = viewer0.scene.globe.ellipsoid.cartesianToCartographic(val)
        //   polyObj.lon = Cesium.Math.toDegrees(cartographic.longitude)
        //   polyObj.lat = Cesium.Math.toDegrees(cartographic.latitude)
        //   point_arr.push([polyObj.lon, polyObj.lat])
        // })
        // return point_arr;
    } else {
        return
    }
}

function EditPolygon(entity) {
    console.log(entity)
    console.log(entity.polygon.hierarchy._value.positions)
    points = entity.polygon.hierarchy._value.positions
    let movePoint;
    let pointEntitiesList = []
    for (let index = 0; index < points.length; index++) {
        const point = points[index];

        pointEntity = viewer0.entities.add({
            // fromDegrees（经度，纬度，高度，椭球，结果）从以度为单位的经度和纬度值返回Cartesian3位置
            position: point,
            point: {
                // 点的大小（像素）
                pixelSize: 5,
                // 点位颜色，fromCssColorString 可以直接使用CSS颜色
                color: Cesium.Color.fromCssColorString('#ee0000'),
                // 边框颜色
                outlineColor: Cesium.Color.fromCssColorString('#fff'),
                // 边框宽度(像素)
                outlineWidth: 2,
                // 显示在距相机的距离处的属性，多少区间内是可以显示的
                //distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 1500),
                // 是否显示
                show: true,

            }
        });
        pointEntity.name = index
        //console.log(pointEntity)
        pointEntitiesList.push(pointEntity)
    }

    if (handler11) {
        handler11.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
        handler11.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        handler11.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    }
    handler11 = new Cesium.ScreenSpaceEventHandler(viewer0.scene.canvas);

    handler11.setInputAction((event) => {
        var pick = viewer0.scene.pick(event.position);
        console.log(pick)
        if (Cesium.defined(pick.id.point)) {
            console.log(1)
            movePoint = pick.id
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    handler11.setInputAction((event) => {
        // 屏幕坐标转为空间坐标
        let cartesian = viewer0.camera.pickEllipsoid(event.endPosition, viewer0.scene.globe.ellipsoid);
        // 判断是否定义（是否可以获取到空间坐标）
        if (Cesium.defined(cartesian) && Cesium.defined(movePoint)) {
            movePoint.position = cartesian

            let positions = entity.polygon.hierarchy._value.positions
            positions[movePoint.name] = cartesian

            entity.polygon.hierarchy = new Cesium.PolygonHierarchy(positions)
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    handler11.setInputAction((event) => {
        // 取消鼠标移动监听
        handler11.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);

        pointEntitiesList.forEach(pointEntity => {
            viewer0.entities.remove(pointEntity)
        });

        // 清除所有事件
        if (handler11) {
            handler11.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
            handler11.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            handler11.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
        }

    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
}


function SplitPolygon() {
    var targetEntity = pickEntity
    var targetPolygon = targetEntity.polygon.hierarchy._value.positions;
    var targetDatasource = targetEntity.entityCollection._owner;
    document.getElementById("rightClick").style.display = 'none';
    if (handler12) {
        handler12.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
        handler12.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        handler12.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    }
    handler12 = new Cesium.ScreenSpaceEventHandler(viewer0.scene.canvas);

    //确定选中点
    handler12.setInputAction((event) => {
        // 屏幕坐标转为空间坐标
        let cartesian = viewer0.camera.pickEllipsoid(event.position, viewer0.scene.globe.ellipsoid);
        // 判断是否定义（是否可以获取到空间坐标）
        if (Cesium.defined(cartesian)) {
            // 将点添加进保存多边形点的数组中，鼠标停止移动的时添加的点和，点击时候添加的点，坐标一样
            polyline_point_arr.push(cartesian);
            // 判断是否开始绘制动态多边形，没有的话则开始绘制
            if (temporary_polyline_entity == null) {
                // 绘制动态polyline
                DrawDynamicPolyline();
            }
        }

    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    //鼠标移动--实时绘制polyline
    handler12.setInputAction((event) => {
        let cartesian = viewer0.camera.pickEllipsoid(event.endPosition, viewer0.scene.globe.ellipsoid);
        // 判断是否定义（是否可以获取到空间坐标）
        if (Cesium.defined(cartesian)) {
            // 判断是否已经开始绘制动态多边形，已经开始的话，则可以动态拾取鼠标移动的点，修改点的坐标
            if (temporary_polyline_entity) {
                // 只要元素点大于一，每次就删除一个点，因为实时动态的点是添加上去的
                if (polyline_point_arr.length > 1) {
                    // 删除数组最后一个元素（鼠标移动添加进去的点）
                    polyline_point_arr.pop();
                }
                // 将新的点添加进动态多边形点的数组中，用于实时变化，注意：这里是先添加了一个点，然后再删除点，再添加，这样重复的
                polyline_point_arr.push(cartesian);
            }
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    //生成折线切割polyline
    handler12.setInputAction((event) => {
        // 取消鼠标移动监听
        handler12.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        // 清除动态绘制的polyline
        viewer0.entities.remove(temporary_polyline_entity);
        // 删除保存的临时polyline的entity
        temporary_polyline_entity = null;
        // 绘制结果多边形
        let polylineEntity = DrawPolyline();
        // 清空polyline点数组，用于下次绘制
        polyline_point_arr = [];
        // 清除所有事件
        if (handler12) {
            handler12.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
            handler12.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            handler12.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
        }
        var result = SplitPolygonByTurf(polylineEntity.polyline.positions._value, targetPolygon);
        // var reverseLine = new Array(polylineEntity.polyline.positions._value.length);
        // for (let index = 0; index < polylineEntity.polyline.positions._value.length; index++) {
        //     reverseLine[index] = polylineEntity.polyline.positions._value[polylineEntity.polyline.positions._value.length-index-1]
        // }
        // console.log(reverseLine)


        console.log(result)
        result.forEach(polygon => {
            CreatePolygonEntityByPolgonFeature(polygon, targetDatasource)
        });

        viewer0.entities.remove(polylineEntity)
        targetDatasource.entities.remove(targetEntity)

    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
}

//绘制动态polyline
function DrawDynamicPolyline() {
    console.log(polyline_point_arr)
    temporary_polyline_entity = viewer0.entities.add({
        polyline: {
            positions: new Cesium.CallbackProperty(() => {
                // PolygonHierarchy 定义多边形及其孔的线性环的层次结构（空间坐标数组）
                return polyline_point_arr;
            }, false),
            width: 2,
            material: Cesium.Color.WHITE.withAlpha(0.8),
        },
    });
}
//绘制结果polyline
function DrawPolyline() {

    // 删除最后一个动态添加的点，如果鼠标没移动，最后一个和倒数第二个是一样的，所以也要删除
    polyline_point_arr.pop();

    let polyline_point_entity = viewer0.entities.add({
        polyline: {
            positions: polyline_point_arr,
            width: 2,
            material: Cesium.Color.WHITE.withAlpha(0.8),
        },
    });

    return polyline_point_entity

}

/**
 * 使用turf工具进行切割面
 * @param line 线段数据
 * @param outerPolygon 面数据
 * return  返回切割的面数据
 */
function SplitPolygonByTurf(linePos, outerPolygonPos) {
    var tempArr = []
    var ellipsoid = viewer0.scene.globe.ellipsoid;

    linePos.forEach(point => {
        var ellipsoid = viewer0.scene.globe.ellipsoid;
        var cartesian3 = point;
        var cartographic = ellipsoid.cartesianToCartographic(cartesian3);
        var lat = Cesium.Math.toDegrees(cartographic.latitude);
        var lon = Cesium.Math.toDegrees(cartographic.longitude);
        var alt = cartographic.height;

        let tempData = [lat, lon]
        tempArr.push(tempData)
    });
    linePos = tempArr
    tempArr = []

    outerPolygonPos.forEach(point => {
        var ellipsoid = viewer0.scene.globe.ellipsoid;
        var cartesian3 = point;
        var cartographic = ellipsoid.cartesianToCartographic(cartesian3);
        var lat = Cesium.Math.toDegrees(cartographic.latitude);
        var lon = Cesium.Math.toDegrees(cartographic.longitude);
        var alt = cartographic.height;

        let tempData = [lat, lon]
        tempArr.push(tempData)
    });
    outerPolygonPos = tempArr


    let line = {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "coordinates": linePos,
            "type": "LineString"
        }
    };

    let outerPolygon = {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "coordinates": [outerPolygonPos],
            "type": "Polygon"
        }
    };
    console.log(outerPolygon)
    var polylineCreateByPolygon = outerPolygon.geometry.coordinates[0]
    // polylineCreateByPolygon.push(outerPolygon.geometry.coordinates[0][0])

    let truncatedSplitter = turf.truncate(turf.lineString(polylineCreateByPolygon), { precision: 7 });
    console.log(truncatedSplitter)
    //求交点
    let intersectCollection = turf.lineIntersect(line, truncatedSplitter);
    console.log(intersectCollection)
    if (intersectCollection.features.length < 2) {
        console.log('intersectCollection.features.length')
        return null;
    }
    //将点合并成MultiPoint
    let intersectCombined = turf.combine(intersectCollection).features[0];

    //分别获取切割线
    let outerPieceCollection = turf.lineSplit(line, intersectCombined);
    let splitterPieceCollection = turf.lineSplit(truncatedSplitter, intersectCombined);

    //将所有的线段放到一起
    let pieceCollection = turf.featureCollection(outerPieceCollection.features.concat(splitterPieceCollection.features));
    
    //使用turf将闭合线组成多边形
    let polygonCollection = turf.polygonize(pieceCollection);
    //对多边形进行判断，切割外的多边形丢弃
    let innerPolygons = polygonCollection.features.filter(polygon => {
        console.log(polygon)
        CreatePolygonEntityByPolgonFeature(polygon)
        let center = turf.centroid(polygon);
        return turf.booleanWithin(center, outerPolygon);
    });

    // // 构造切割的另一面多边形
    // var polyLine = turf.polygonToLine(outerPolygon)
    // var skipNum = 0; // 记录前面被跳过的点的个数
    // var isStartPush = false;
    // for (var i = 0; i < polyLine.geometry.coordinates.length; i++) {
    //     var coordinate = polyLine.geometry.coordinates[i];
    //     if (!IsOnLine(turf.point(coordinate), slicedPolyLine)) {
    //         if (isStartPush) {
    //             pointList.push(coordinate)
    //         } else {
    //             skipNum++
    //         }

    //     } else {
    //         isStartPush = true;
    //     }
    // };
    // // 将前面跳过的点补充到 点数组中
    // for (var i = 0; i < skipNum; i++) {
    //     pointList.push(polyLine.geometry.coordinates[i])
    // }

    // var slicedPolyLine_2 = turf.lineString(pointList);
    // var resultPolyline2 = ConnectLine(slicedPolyLine_2, slicedClipLine)
    // // 闭合线 来构造多边形
    // resultPolyline2.geometry.coordinates.push(resultPolyline2.geometry.coordinates[0])
    // var resultPolygon2 = turf.lineToPolygon(resultPolyline2);
    // console.log(resultPolygon2)

    //处理镂空数据（多处镂空数据会导致计算错误，因为polygonize方法无法正常的返回数据）
    if (outerPolygon.geometry.coordinates?.length > 1) {
        //获取镂空的面数据
        let holeCollection = turf.featureCollection(outerPolygon.geometry.coordinates.slice(1).map(item => turf.polygon([item])));

        //剔除掉镂空的部分数据
        innerPolygons = innerPolygons.map(polygon => {
            let diff = polygon;
            turf.featureEach(holeCollection, (hole) => {
                diff = turf.difference(diff, hole);
            });
            return diff;
        });
    }
    return innerPolygons;

    var polyLine = turf.polygonToLine(outerPolygon)
    var intersects = turf.lineIntersect(polyLine, clipLine);
    if (intersects.features.length !== 2) {
        throw { state: '裁剪失败', message: '切割线与多边形交点应该为2个,当前交点个数为' + intersects.features.length };
    }

    // 通过裁切点 分割多边形（只能获得多边形的一部分）
    var slicedPolyLine = turf.lineSlice(intersects.features[0], intersects.features[1], polyLine);
    // 裁剪线分割 保留多边形内部部分
    var slicedClipLine = turf.lineSlice(intersects.features[0], intersects.features[1], clipLine);
    // 重新拼接多边形 存在 对接的问题 所以先进行判断 如何对接裁剪的多边形和裁剪线
    var resultPolyline1 = ConnectLine(slicedPolyLine, slicedClipLine)
    // 闭合线 来构造多边形
    resultPolyline1.geometry.coordinates.push(resultPolyline1.geometry.coordinates[0])
    var resultPolygon1 = turf.lineToPolygon(resultPolyline1);
    // 构造切割的另一面多边形
    var firstPointOnLine = IsOnLine(turf.point(polyLine.geometry.coordinates[0]), slicedPolyLine);
    var pointList = [];
    if (firstPointOnLine) {
        for (var i = 0; i < polyLine.geometry.coordinates.length; i++) {
            var coordinate = polyLine.geometry.coordinates[i];
            if (!IsOnLine(turf.point(coordinate), slicedPolyLine)) {
                pointList.push(coordinate)
            }
        };
    } else {
        var skipNum = 0; // 记录前面被跳过的点的个数
        var isStartPush = false;
        for (var i = 0; i < polyLine.geometry.coordinates.length; i++) {
            var coordinate = polyLine.geometry.coordinates[i];
            if (!IsOnLine(turf.point(coordinate), slicedPolyLine)) {
                if (isStartPush) {
                    pointList.push(coordinate)
                } else {
                    skipNum++
                }

            } else {
                isStartPush = true;
            }
        };
        // 将前面跳过的点补充到 点数组中
        for (var i = 0; i < skipNum; i++) {
            pointList.push(polyLine.geometry.coordinates[i])
        }
    }
    var slicedPolyLine_2 = turf.lineString(pointList);
    var resultPolyline2 = ConnectLine(slicedPolyLine_2, slicedClipLine)
    // 闭合线 来构造多边形
    resultPolyline2.geometry.coordinates.push(resultPolyline2.geometry.coordinates[0])
    var resultPolygon2 = turf.lineToPolygon(resultPolyline2);
    // 返回面要素集
    return turf.featureCollection([
        resultPolygon1,
        resultPolygon2
    ]);

}

function CreatePolygonEntityByPolgonFeature(polygon, targetDatasource) {


    var cartesian3List = []
    polygon.geometry.coordinates[0].forEach(position => {
        var ellipsoid = viewer0.scene.globe.ellipsoid;
        var cartographic = Cesium.Cartographic.fromDegrees(position[1], position[0], 0);
        var cartesian3 = ellipsoid.cartographicToCartesian(cartographic);
        cartesian3List.push(cartesian3)
    });

    let ent;
    viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource == targetDatasource) {
            ent = datasource.entities.add({
                polygon: {
                    hierarchy: cartesian3List,
                    extrudedHeight: 0,  // 多边体的高度（多边形拉伸高度）
                    height: 0,  // 多边形离地高度
                    material: Cesium.Color.fromRandom({ alpha: 0.5 }),
                },
            });
            console.log(datasource._name)
            if (datasource._name == 'geojson/林下参.geojson') {
                var properties_Forest = {
                    "县区": "",
                    "乡村": "",
                    "所属": "",
                    "面积": 0,
                    "坡向": "",
                    "坡度": "",
                    "树木": "",
                    "坡位": "",
                    "种植": "",
                    "土壤类型": "",
                    "土层厚度": "",
                    "优势树种": "",
                    "郁闭度": "",
                }
                ent._properties = properties_Forest;
            } else 
            if (datasource._name == 'geojson/园参.geojson') {
                var properties_Garden = {
                    "县区": "",
                    "乡村": "",
                    "所属": "",
                    "面积": 0,
                    "租赁周期": "",
                    "播种时间": "",
                    "参龄": "",
                    "采收时间": "",
                    "种植": "",
                }
                ent._properties = properties_Garden;
            }
        }
    });

    return ent
}

/**
    * 连接两条线
    * 方法会将两条线段最近的一段直接连接
    */
function ConnectLine(line1, line2) {
    var line2_length = line2.geometry.coordinates.length;
    var line1_startPoint = line1.geometry.coordinates[0]
    var line2_startPoint = line2.geometry.coordinates[0]
    var line2_endPoint = line2.geometry.coordinates[line2_length - 1]
    var pointList = [];
    // 获取line1 所有点坐标
    for (var i = 0; i < line1.geometry.coordinates.length; i++) {
        var coordinate = line1.geometry.coordinates[i];
        pointList.push(coordinate)
    };

    // 判断两条线的 起点是否接近，如果接近 逆转line2线 进行连接
    if (turf.distance(line1_startPoint, line2_startPoint) < turf.distance(line1_startPoint, line2_endPoint)) {
        line2.geometry.coordinates = line2.geometry.coordinates.reverse();
    }
    for (var i = 0; i < line2.geometry.coordinates.length; i++) {
        var coordinate = line2.geometry.coordinates[i];
        pointList.push(coordinate)
    };
    return turf.lineString(pointList);
}

/**
 * 判断点是否在线里面
 * 注：线组成的坐标对比
 */
function IsOnLine(point, line) {
    for (var i = 0; i < line.geometry.coordinates.length; i++) {
        var coordinate = line.geometry.coordinates[i];
        if (point.geometry.coordinates[0] === coordinate[0] && point.geometry.coordinates[1] === coordinate[1]) {
            return true;
        }
    };
    return false;
}
