window.PrimitiveHigh;
window.PrimitiveMid;
window.PrimitiveLow;

// $.get('geojson/通化市_通人.geojson', function(data) {
//     const features = data.features;
//     PrimitiveLow = AddDataToGlobe(features,new Cesium.Color(0.378, 0.625, 0.656, 0.8))
// })
// $.get('geojson/通化市_通地.geojson', function(data) {
//     const features = data.features;
//     PrimitiveMid = AddDataToGlobe(features,new Cesium.Color(0.683, 0.816, 0.222, 0.8))
// })
// $.get('geojson/通化市_通天.geojson', function(data) {
//     const features = data.features;
//     PrimitiveHigh = AddDataToGlobe(features,new Cesium.Color(0.757, 0.207, 0.191, 0.8))
// })


function AddDataToGlobe(features,CesiumColor){
	const instances = [];
	for(let i=0; i<features.length; i++){
	    for(let j=0; j<features[i].geometry.coordinates.length; j++){
	        const polygonArr = features[i].geometry.coordinates[j].toString().split(',');
	        const polygon = new Cesium.PolygonGeometry({
	            polygonHierarchy : new Cesium.PolygonHierarchy(
	                Cesium.Cartesian3.fromDegreesArray(polygonArr)
	            ),
	            vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT
	        });
	        const geometry = Cesium.PolygonGeometry.createGeometry(polygon);
	        instances.push(new Cesium.GeometryInstance({
	            geometry : geometry,
	            attributes : {
	                color : Cesium.ColorGeometryInstanceAttribute.fromColor(CesiumColor),
	            },
	        }));
	    }
	}
	
	const primitive = new Cesium.Primitive({
	    geometryInstances : instances,
	    appearance :  new Cesium.PerInstanceColorAppearance({ // 为每个instance着色
	        translucent : true,
	        closed : false
	    }),
	    asynchronous : true,  // 确定基元是异步创建还是阻塞直到准备就绪
	});
	
	viewer0.scene.primitives.add(primitive);
    return primitive;
}

function ShowYiShenPrimitive(){
	try{
		PrimitiveLow.show = true;
		PrimitiveMid.show = true;
		PrimitiveHigh.show = true;
	}catch(e){


	}
}

function HideYiShenPrimitive(){
	try{
		PrimitiveLow.show = false;
		PrimitiveMid.show = false;
		PrimitiveHigh.show = false;
	}catch(e){

	}

}

// //单独绘制外观
// // 在GeometryInstance中添加attributes，使用color属性可以设置颜色
// let instance = new Cesium.GeometryInstance({
// 	geometry,
// 	attributes: {
// 		// 设置单独的color可以使每个几何实例的外观都不一样
// 		color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
// 	}
// })
// // 同时primitive也需要调整
// let primitive = new Cesium.Primitive({
// 	geometryInstances: instances,
// 	// PerInstanceColorAppearance中可以设置参数，具体可以参考官方文档
// 	appearance: new Cesium.PerInstanceColorAppearance({})
// })
