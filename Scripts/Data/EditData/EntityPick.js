
/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
var editGeojsonEntityCollectionId;
var text = '';
var json = '';
var previousPick;
var previousPickColor;
window.pick;

window.pickEntity;
let heightEntity = null;
//GetCoordinate()

//单击拾取事件
let handler = new Cesium.ScreenSpaceEventHandler(viewer0.scene.canvas);//处理用户输入事件
handler.setInputAction(function (event) {       // 设置右键点击事件
    var picks = viewer0.scene.drillPick(event.position);
    picks.forEach(newPick => {
        if (Cesium.defined(newPick)) {// 判断是否获取到了 pick 
            console.log(newPick);
            if (Cesium.defined(newPick.id._properties)&&Cesium.defined(newPick.id._properties.种植)){
                if (newPick.id.polygon.material._color._value.alpha > 0.5) {
                    HighLightEntity(newPick.id)
                }

                var rightClickDiv = document.getElementById("rightClick");
                rightClickDiv.style.display = 'block';
                rightClickDiv.style.top = event.position.y + 100 + 'px'
                rightClickDiv.style.left = event.position.x + 'px'
                //console.log(rightClickDiv.style.top + "," + rightClickDiv.style.left)
                this.pick = newPick;
                pickEntity = newPick.id;
            }
        } else {
            document.getElementById("dataINFO").style.display = 'none';
        }
    });
}, Cesium.ScreenSpaceEventType.RIGHT_CLICK);


function LoadDataInfoPanel() {
    EditPolygon(pickEntity);

    document.getElementById("rightClick").style.display = 'none';
    console.log(pickEntity.entityCollection._owner._name)
    if (pickEntity.entityCollection._owner._name == 'geojson/林下参.geojson') {
        ShowDataInfoPanel();
        try {
            document.getElementById("info01").innerText = pickEntity._properties.县区;
            document.getElementById("info02").innerText = pickEntity._properties.乡村;
            document.getElementById("info03").innerText = pickEntity._properties.所属;
            document.getElementById("info04").innerText = parseFloat(pickEntity._properties.面积).toFixed(2) + ' (㎡)';
            document.getElementById("info05").innerText = pickEntity._properties.坡向;
            document.getElementById("info06").innerText = pickEntity._properties.坡度;
            document.getElementById("info07").innerText = pickEntity._properties.树木;
            document.getElementById("info08").innerText = pickEntity._properties.坡位;
            document.getElementById("info09").innerText = pickEntity._properties.土壤类型;
            document.getElementById("info10").innerText = pickEntity._properties.土层厚度;
            document.getElementById("info11").innerText = pickEntity._properties.优势树种;
            document.getElementById("info12").innerText = pickEntity._properties.郁闭度;
        } catch (error) {
            console.log(error);
        }
    } else if(pickEntity.entityCollection._owner._name == 'geojson/园参.geojson') {
        ShowGardenDataInfoPanel();
        try {
            document.getElementById("info01_garden").innerText = pickEntity._properties.县区;
            document.getElementById("info02_garden").innerText = pickEntity._properties.乡村;
            document.getElementById("info03_garden").innerText = pickEntity._properties.所属;
            document.getElementById("info04_garden").innerText = parseFloat(pickEntity._properties.面积).toFixed(2) + ' (㎡)';
            document.getElementById("info05_garden").innerText = pickEntity._properties.租赁周期;
            document.getElementById("info06_garden").innerText = pickEntity._properties.播种时间;
            document.getElementById("info07_garden").innerText = pickEntity._properties.参龄;
            document.getElementById("info08_garden").innerText = pickEntity._properties.采收时间;
        } catch (error) {
            console.log(error);
        }

    }

}

function DeleteEntity() {
    console.log(pickEntity);
    viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/林下参.geojson' ||datasource._name == 'geojson/园参.geojson' || datasource._name == 'measureLayer') {
            datasource.entities.remove(pickEntity);
            document.getElementById("rightClick").style.display = 'none';
        }
    });

}

let handler_1 = new Cesium.ScreenSpaceEventHandler(viewer0.scene.canvas);//处理用户输入事件
handler_1.setInputAction(function (event) {       // 设置左键点击事件
    try {
        document.getElementById("rightClick").style.display = 'none';
    } catch (error) {
    }
    HighLightEntity(null);
    try {
        RetreatPanel();
    } catch (error) {
        
    }
    
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);


function HighLightEntity(entity) {
    if (previousPick != null) {
        previousPick.polygon.material = previousPickColor;
        previousPick = null;
        previousPickColor = null;
    }
    if (entity != null) {
        previousPickColor = entity.polygon.material;
        previousPick = entity;
        console.log(entity.entityCollection._owner._name)
        entityOwnerDatasourceName = entity.entityCollection._owner._name
        viewer0.dataSources._dataSources.forEach(datasource => {
            if (datasource._name == entityOwnerDatasourceName) {
                if (heightEntity) {
                    datasource.entities.remove(heightEntity);
                }
                try {
                    heightEntity = datasource.entities.add({
                        polyline: {
                            positions: entity.polygon.hierarchy._value.positions,
                            width: 5,
                            material: new Cesium.PolylineGlowMaterialProperty({
                                glowPower: 0.5, // 一个数字属性，指定发光强度，占总线宽的百分比。
                                color: Cesium.Color.ORANGERED,
                            }),
                            clampToGround: true,
                        },
                    });
                } catch {

                }
                entity.polygon.material = Cesium.Color.RED.withAlpha(1);
            }
        });
    } else {
        console.log(previousPick)
        if(previousPick==null){return}
        previousPickOwnerDatasourceName = previousPick.entityCollection._owner._name
        viewer0.dataSources._dataSources.forEach(datasource => {
            if (datasource._name == previousPickOwnerDatasourceName) {
                if (heightEntity) {
                    datasource.entities.remove(heightEntity);
                }
            }
        });

    }
}


//启用编辑
// function EditInfo() {
//     if(text!=''){
//         if(pick.id.entityCollection._id!=editGeojsonEntityCollectionId){
//             layui.use('form', function () {
//                 layer.msg('非选择所编辑的文件,请选择矢量-可编辑json文件作为所要修改的数据');
//                 console.log(text);
//                 console.log(pick.id.entityCollection._id);
//                 console.log(editGeojsonEntityCollectionId);
//           });
//           return;
//         }

//         document.getElementById("edit01").value = pick.id._properties.name;
//         document.getElementById("edit02").value = pick.id._properties.owner;
//         document.getElementById("edit03").value = pick.id._properties.area;
//         document.getElementById("edit04").value = pick.id._properties.plant;
//         if( document.getElementById("edit05").value== ''){
//             document.getElementById("edit05").value= '无';
//         }else{
//             document.getElementById("edit05").value = pick.id._properties.land;
//         }

//         document.getElementById("dataINFO").style.display = 'none';
//         document.getElementById("dataEdit").style.display = 'block';


//     }else{
//         LoadEditData(pick.id.entityCollection._owner._name);
//         editGeojsonEntityCollectionId = pick.id.entityCollection._id;

//         document.getElementById("edit01").value = pick.id._properties.name;
//         document.getElementById("edit02").value = pick.id._properties.owner;
//         document.getElementById("edit03").value = pick.id._properties.area;
//         document.getElementById("edit04").value = pick.id._properties.plant;
//         if( document.getElementById("edit05").value== ''){
//             document.getElementById("edit05").value= '无';
//         }else{
//             document.getElementById("edit05").value = pick.id._properties.land;
//         }

//         document.getElementById("dataINFO").style.display = 'none';
//         document.getElementById("dataEdit").style.display = 'block';

//         layui.use('form', function () {
//             layer.msg('已进入该数据的编辑模式，在选择保存数据之前无法编辑其他数据！');
//         });
//     }

// }
//编辑完成
function ShowInfo() {
    document.getElementById("dataINFO").style.display = 'block';
    document.getElementById("dataEdit").style.display = 'none';
}


//关闭数据面板
function CloseDataInfoPanel() {
    document.getElementById("dataINFO").style.display = 'none';
}

//显示信息面板
// function ShowDataInfoPanel() {
//     document.getElementById("dataINFO").style.display = 'block';
// }

//关闭编辑面板
function CloseInfoEditPanel() {
    document.getElementById("dataEdit").style.display = 'none';
}

function LoadEditData(url) {
    var request = new XMLHttpRequest();

    request.open("get", url);/*设置请求方法与路径*/
    request.send(null);/*不发送数据到服务器*/
    request.onload = function () {/*XHR对象获取到返回信息后执行*/0
        if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
            console.log(request.responseText);
            text = request.responseText;
            json = JSON.parse(text);
        }
    }
};

function SaveEdit() {

    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "jsondata.json");

}
function UndoEdit() {
    text = '';
    json = '';
    layui.use('form', function () {
        layer.msg('已退出');
    });
}

function NotFinish() {
    layui.use('form', function () {
        layer.msg('未完成');
    });
}
function NoData() {
    layui.use('form', function () {
        layer.msg('无数据');
    });
}

function SetEditGeojsonEntityCollectionId(id) {
    editGeojsonEntityCollectionId = id;
}

//左键获取经纬度
function GetCoordinate() {
    let handler = new Cesium.ScreenSpaceEventHandler(viewer0.scene.canvas);
    handler.setInputAction(function (event) {
        let ray = viewer0.camera.getPickRay(event.position);
        let cartesian = viewer0.scene.globe.pick(ray, viewer0.scene);
        let cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        let _longitude = Cesium.Math.toDegrees(cartographic.longitude);
        let _latitude = Cesium.Math.toDegrees(cartographic.latitude);
        let _height = cartographic.height;
        let coordinate = {
            longitude: Number(_longitude.toFixed(6)),
            latitude: Number(_latitude.toFixed(6)),
            altitude: Number(_height.toFixed(2))
        };
        console.log(coordinate);

    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}