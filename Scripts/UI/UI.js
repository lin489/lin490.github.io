



SetUIScaleByResolutionRatio()
UIInit()
doProhibit()

const tempRightBtn_1 = document.querySelector('#rightBtn_1');
tempRightBtn_1.addEventListener('click', (e) => {
  tempRightBtn_1.setAttribute('class', tempRightBtn_1.getAttribute("class") === "active" ? "" : "active");
  console.log(tempRightBtn_1.getAttribute("class"))
  TempRightBtn_1()
});
tempRightBtn_1.click();
const tempRightBtn_2 = document.querySelector('#rightBtn_2');
tempRightBtn_2.addEventListener('click', (e) => {
  tempRightBtn_2.setAttribute('class', tempRightBtn_2.getAttribute("class") === "active" ? "" : "active");
  console.log(tempRightBtn_2.getAttribute("class"))
  TempRightBtn_2()
});
tempRightBtn_2.click();
const tempRightBtn_3 = document.querySelector('#rightBtn_3');
tempRightBtn_3.addEventListener('click', (e) => {
  tempRightBtn_3.setAttribute('class', tempRightBtn_3.getAttribute("class") === "active" ? "" : "active");
  console.log(tempRightBtn_3.getAttribute("class"))
  TempRightBtn_3()
});
tempRightBtn_3.click();
const tempRightBtn_4 = document.querySelector('#rightBtn_4');
tempRightBtn_4.addEventListener('click', (e) => {
  tempRightBtn_4.setAttribute('class', tempRightBtn_4.getAttribute("class") === "active" ? "" : "active");
  console.log(tempRightBtn_4.getAttribute("class"))
  TempRightBtn_4()
});
tempRightBtn_4.click();
const tempRightBtn_5 = document.querySelector('#rightBtn_5');
tempRightBtn_5.addEventListener('click', (e) => {
  tempRightBtn_5.setAttribute('class', tempRightBtn_5.getAttribute("class") === "active" ? "" : "active");
  console.log(tempRightBtn_5.getAttribute("class"))
  TempRightBtn_5()
});
tempRightBtn_5.click();
/**根据分辨率调整UI尺寸
*/
function SetUIScaleByResolutionRatio() {
  let rootWidth = document.documentElement.clientWidth || document.body.clientWidth;
  let rootDom = document.querySelector('html');
  rootDom.style.fontSize = rootWidth / 256 + 'px';
  const getWindowInfo = () => {
    const windowInfo = {
      width: window.innerWidth,
      hight: window.innerHeight
    }
    console.log(windowInfo);
    let rootDom = document.querySelector('html');
    rootDom.style.fontSize = windowInfo.width / 256 + 'px';

  };
  const debounce = (fn, delay) => {
    let timer;
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn();
      }, delay);
    }
  };
  const cancalDebounce = debounce(getWindowInfo, 500);

  window.addEventListener('resize', cancalDebounce);
}


/**禁止浏览器默认右键交互 */
function doProhibit() {
  if (window.Event)
    document.captureEvents(Event.MOUSEUP);

  function nocontextmenu() {
    event.cancelBubble = true
    event.returnvalue = false;
    return false;
  }

  function norightclick(e) {
    if (window.Event) {
      if (e.which == 2 || e.which == 3)
        return false;
    } else if (event.button == 2 || event.button == 3) {
      event.cancelBubble = true
      event.returnvalue = false;
      return false;
    }
  }
  document.oncontextmenu = nocontextmenu;  // for IE5+ 
  document.onmousedown = norightclick;  //
}

function ChangeTif() {
  // layui.use('form', function () {
  //   layer.msg('暂无数据');
  // });
  WMTSList.forEach(wmts => {
    wmts.show = false;
  });
  wmtsGarden.show = false;
  WMTSForestList_County.forEach(wmts => {
    wmts.show = false;
  });
  WMTSGardenList_County.forEach(wmts => {
    wmts.show = false;
  });

  let changeTifBtn = document.getElementById('changeTifBtn');

  if (changeTifBtn.innerHTML == '显示宜参地') {
    changeTifBtn.innerHTML = '不显示宜参地'
    WMTSList.forEach(wmts => {
      wmts.show = false;
    });
    wmtsGarden.show = false;
  } else if (changeTifBtn.innerHTML == '不显示宜参地') {

    changeTifBtn.innerHTML = '显示宜参地'
    if (mode_RenShen == 'Forest') {
      console.log(1)
      WMTSList.forEach(wmts => {
        wmts.show = true;
      });
      console.log(1)
    }
    else if (mode_RenShen == 'Garden') {
      wmtsGarden.show = true;

    } else {
      WMTSForestList_County.forEach(wmts => {
        wmts.show = true;
      });
      WMTSGardenList_County.forEach(wmts => {
        wmts.show = true;
      });
    }
  }

}
/**UI初始化显示 */
function UIInit() {
  //document.getElementById("webMapServiceLoad").style.display = 'none';
  //document.getElementById("recordingIcon").style.display = 'none';
  //document.getElementById("measure").style.display = 'none';
  //document.getElementById("recordPanel").style.display = 'none';
  //document.getElementById("flyToPos").style.display = 'none';

  document.getElementById("dataINFO").style.display = 'none';
  document.getElementById("dataINFO_garden").style.display = 'none';

  document.getElementById("AddData").style.display = 'none';
  document.getElementById("editData").style.display = 'none';
  document.getElementById("editData").style.display = 'none';
  //document.getElementById("webMapTileServiceLoad").style.display = 'none';
  document.getElementById("districtFunction").style.display = 'none';
  //document.getElementById("forestDistrictFunction").style.display = 'none';
  //document.getElementById("gardenDistrictFunction").style.display = 'none';
  document.getElementById("UIPanel_left_forest").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_garden").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_JiAn").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_JiAnGarden").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_Analysis").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_Select").style.display = 'none';
  document.getElementById("UIPanel_left_LiuHe").style.visibility = 'hidden';
  document.getElementById("gardenSelect").style.display = 'none';
  document.getElementById("rightClick").style.display = 'none';
  document.getElementById("UIPanel_right").style.visibility = 'hidden';


  //document.getElementById("tifFunction").style.display = 'none';


  // document.addEventListener('mousedown', function (mousedown) {
  //   if (document.getElementById("districtFunction").style.display == 'block'){
  //     document.getElementById("districtFunction").style.display = 'none';
  //     console.log('关闭')
  //   }
  //     if (document.getElementById("forestDistrictFunction").style.display == 'block'){
  //       document.getElementById("forestDistrictFunction").style.display = 'none';
  //       console.log(2222)
  //     }

  //     if (document.getElementById("gardenDistrictFunction").style.display == 'block'){
  //       document.getElementById("gardenDistrictFunction").style.display = 'none';
  //       console.log(3333)
  //     }
  // });
}

//地块管理功能
function ManageDistrict() {
  if (document.getElementById("districtFunction").style.display == 'none') {
    document.getElementById("districtFunction").style.display = 'block';
    NavButtonHighLight(3)
  } else {
    document.getElementById("districtFunction").style.display = 'none';
    NavButtonHighLight(-1)
  }
}

//添加地块
function AddDistrict() {
  document.getElementById("districtFunction").style.display = 'none';
  HideAllLeftPanel()
  document.getElementById("AddData").style.display = 'block';
}

//筛选地块
function SelectDistrict() {
  document.getElementById("districtFunction").style.display = 'none';
  HideAllLeftPanel()
  document.getElementById("UIPanel_left_Select").style.display = 'Block';
  LoadAllRenShenShp()
}

//地块分析
function AnalyseDistrict() {
  document.getElementById("districtFunction").style.display = 'none';
  HideAllLeftPanel()
  //CreateTableData()
  NotFinish()
}

/** 点击 林下参园参共同显示（首页）*/
function AllDistrictMode() {
  mode_RenShen = 'All';
  TempRightBtnReset()
  TempBtnReset()
  ShowDefaultChart();
  LoadAllRenShenShp();
  HideGardenShp_JiAn()

  // document.getElementById('changeTifBtn').innerHTML = '不显示宜参地'
  WMTSList.forEach(wmts => {
    wmts.show = false;
  });
  wmtsGarden.show = false;
  //document.getElementById("districtFunction").style.display = 'none';
  WMTSForestList_County.forEach(element => {
    element.show = false
  })
  WMTSGardenList_County.forEach(element => {
    element.show = false
  });


  viewer0.dataSources._dataSources.forEach(datasource => {
    if (datasource._name == 'geojson/林下参.geojson') {
      datasource.show = true
      entities = datasource.entities.values;
      entities.forEach(entity => {
        entity.show = false
      })
    }
    if (datasource._name == 'geojson/园参.geojson') {
      datasource.show = true
      entities = datasource.entities.values;
      entities.forEach(entity => {
        entity.show = false
      })
    }
  })
}

//点击 林下参地块
function ForestDistrictMode() {
  mode_RenShen = 'Forest';
  TempBtnReset()
  // document.getElementById("forestDistrictFunction").style.display = 'block';
  ShowForestChart();
  document.getElementById("districtFunction").style.display = 'none';
  viewer0.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(125.974696, 41.765546, 418000),
    orientation: {
      heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
      pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
      roll: 0 // 视口翻滚角度
    }
  });
  //document.getElementById('changeTifBtn').innerHTML = '显示宜参地'

  HideGardenShp_JiAn()
  NavButtonHighLight(1)

  viewer0.dataSources._dataSources.forEach(datasource => {
    if (datasource._name == 'geojson/林下参.geojson') {
      datasource.show = true
      entities = datasource.entities.values;
      entities.forEach(entity => {
        entity.show = false
      })
    }
  })
}

//首页默认图表显示
function ShowDefaultChart() {
  HideAllLeftPanel()
  document.getElementById("UIPanel_left").style.visibility = 'visible';
  document.getElementById("UIPanel_right").style.visibility = 'hidden';
  document.getElementById("UIPanelEchart_right").style.visibility = 'visible';
  ChangePropertiesTableData(1)
}

//显示林下参图表
function ShowForestChart() {
  HideAllLeftPanel();
  document.getElementById("UIPanel_left_forest").style.visibility = 'visible';
  document.getElementById("UIPanelEchart_right").style.visibility = 'hidden';
  document.getElementById("UIPanel_right").style.visibility = 'visible';
  ChangePropertiesTableData(2)
}

//点击 园参地块
function GardenDistrictMode() {
  mode_RenShen = 'Garden';
  TempBtnReset()
  NavButtonHighLight(2)
  ShowGardenChart()
  document.getElementById("districtFunction").style.display = 'none';
  viewer0.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(125.974696, 41.765546, 418000),
    orientation: {
      heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
      pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
      roll: 0 // 视口翻滚角度
    }
  });
  //document.getElementById('changeTifBtn').innerHTML = '显示宜参地'

  HideGardenShp_JiAn()

  document.getElementById('tempBtnText_3').innerHTML = '未来可种植'

  viewer0.dataSources._dataSources.forEach(datasource => {
    if (datasource._name == 'geojson/园参.geojson') {
      datasource.show = true
      entities = datasource.entities.values;
      entities.forEach(entity => {
        entity.show = false
      })
    }
  })
}

/**显示园参图表*/
function ShowGardenChart() {
  HideAllLeftPanel()
  document.getElementById("UIPanel_left_garden").style.visibility = 'visible';
  document.getElementById("UIPanelEchart_right").style.visibility = 'hidden';
  document.getElementById("UIPanel_right").style.visibility = 'visible';
  ChangePropertiesTableData(4)
}

/**显示林下参集安市 图表 */
function ShowJiAnForestChart() {
  HideAllLeftPanel();
  document.getElementById("UIPanel_left_JiAn").style.visibility = 'visible';


  ChangePropertiesTableData(3)
}

/**显示园参集安市 图表 */
function ShowJiAnGardenChart() {
  HideAllLeftPanel()
  document.getElementById("UIPanel_left_JiAnGarden").style.visibility = 'visible';
  //ChangePropertiesTableData(5)
}

/**显示分析园参数据 图表 */
function ShowAnalysisGardenChart() {
  HideAllLeftPanel()
  document.getElementById("UIPanel_left_Analysis").style.visibility = 'visible';
  ShowAnalysisGardenShp();
  ChangePropertiesTableData(6)
}
/**显示分析园参数据 图斑 */
function ShowAnalysisGardenShp() {
  LoadGardenAnalyseShp();
}

function ShowTifFunction() {
  if (document.getElementById("tifFunction").style.display == 'none') {
    document.getElementById("districtFunction").style.display = 'none';
    document.getElementById("forestDistrictFunction").style.display = 'none';
    document.getElementById("gardenDistrictFunction").style.display = 'none';
    document.getElementById("tifFunction").style.display = 'block';

  } else {
    document.getElementById("tifFunction").style.display = 'none';
  }

}

function HideAllLeftPanel() {

  document.getElementById("UIPanel_left").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_forest").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_garden").style.visibility = 'hidden';
  document.getElementById("dataINFO").style.display = 'none';
  document.getElementById("dataINFO_garden").style.display = 'none';
  document.getElementById("AddData").style.display = 'none';
  document.getElementById("UIPanel_left_Analysis").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_JiAn").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_Select").style.display = 'none';
  document.getElementById("UIPanel_left_JiAnGarden").style.visibility = 'hidden';
  document.getElementById("editData").style.display = 'none';
  document.getElementById("editData_garden").style.display = 'none';
  document.getElementById("UIPanel_left_LiuHe").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_TongHua").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_HuiNan").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_ErDaoJiang").style.visibility = 'hidden';
  document.getElementById("UIPanel_left_DongChang").style.visibility = 'hidden';
}

/**
 * 回到首页
 */
function Home() {
  //screenShot()
  //相机位置初始化
  viewer0.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(125.974696, 41.765546, 423000),
    orientation: {
      heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
      pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
      roll: 0 // 视口翻滚角度
    }
  });
  AllDistrictMode()
  NavButtonHighLight(0)
  //document.getElementById("districtFunction").style.display = 'none';
}

function ShowDataInfoPanel() {
  HideAllLeftPanel()
  document.getElementById("dataINFO").style.display = 'block';
}

function ShowGardenDataInfoPanel() {
  HideAllLeftPanel()

  document.getElementById("dataINFO_garden").style.display = 'block';
}

function ShowLiuHeGarden() {
  HideAllLeftPanel()
  document.getElementById("UIPanel_left_LiuHe").style.visibility = 'visible';
}

function RetreatPanel() {
  if (zoomIn) {
    switch (zoomInLocation) {
      case 'JiAn':
        if (mode_RenShen == 'Forest') {
          ShowJiAnForestChart()
        } else if (mode_RenShen == 'Garden') {
          ShowJiAnGardenChart()
        } else {
          ShowDefaultChart()
        }
        break;
      case 'LiuHe':
        if (mode_RenShen == 'Forest') {
        } else if (mode_RenShen == 'Garden') {
          ShowLiuHeGarden()
        } else {
        }
        break;
    }

  } else {
    if (mode_RenShen == 'Forest') {
      ShowForestChart()
    } else if (mode_RenShen == 'Garden') {
      ShowGardenChart()
    } else {
      ShowDefaultChart()
    }
  }

}

function ResetCamera() {
  viewer0.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(125.974696, 41.765546, 418000),
    orientation: {
      heading: Cesium.Math.toRadians(0), // 水平旋转  -正北方向
      pitch: Cesium.Math.toRadians(-90), // 上下旋转  --俯视朝向
      roll: 0 // 视口翻滚角度
    }
  });
}


/**
 * 修改顶部导航按钮的高亮
 * @param {*} num  范围0-3对应按钮数字高亮  -1所有按钮还原默认
 */
function NavButtonHighLight(num) {
  switch (num) {
    case -1:
      document.getElementById("NavImg_0").setAttribute("src", 'Img/切图/1 拷贝 4@2x.png');
      document.getElementById("NavImg_1").setAttribute("src", 'Img/切图/1 拷贝 4@2x.png');
      document.getElementById("NavImg_2").setAttribute("src", 'Img/切图/1 拷贝 6@2x.png');
      document.getElementById("NavImg_3").setAttribute("src", 'Img/切图/1 拷贝 6@2x.png');
      break;
    case 0:
      document.getElementById("NavImg_0").setAttribute("src", 'Img/切图/组 2393 拷贝@2x.png');
      document.getElementById("NavImg_1").setAttribute("src", 'Img/切图/1 拷贝 4@2x.png');
      document.getElementById("NavImg_2").setAttribute("src", 'Img/切图/1 拷贝 6@2x.png');
      document.getElementById("NavImg_3").setAttribute("src", 'Img/切图/1 拷贝 6@2x.png');
      break;
    case 1:
      document.getElementById("NavImg_0").setAttribute("src", 'Img/切图/1 拷贝 4@2x.png');
      document.getElementById("NavImg_1").setAttribute("src", 'Img/切图/组 2393 拷贝@2x.png');
      document.getElementById("NavImg_2").setAttribute("src", 'Img/切图/1 拷贝 6@2x.png');
      document.getElementById("NavImg_3").setAttribute("src", 'Img/切图/1 拷贝 6@2x.png');
      break;
    case 2:
      document.getElementById("NavImg_0").setAttribute("src", 'Img/切图/1 拷贝 4@2x.png');
      document.getElementById("NavImg_1").setAttribute("src", 'Img/切图/1 拷贝 4@2x.png');
      document.getElementById("NavImg_2").setAttribute("src", 'Img/切图/组 2393 拷贝@2x(1).png');
      document.getElementById("NavImg_3").setAttribute("src", 'Img/切图/1 拷贝 6@2x.png');
      break;
    case 3:
      document.getElementById("NavImg_0").setAttribute("src", 'Img/切图/1 拷贝 4@2x.png');
      document.getElementById("NavImg_1").setAttribute("src", 'Img/切图/1 拷贝 4@2x.png');
      document.getElementById("NavImg_2").setAttribute("src", 'Img/切图/1 拷贝 6@2x.png');
      document.getElementById("NavImg_3").setAttribute("src", 'Img/切图/组 2393 拷贝@2x(1).png');
      break;
  }
}


function TempBtn_1() {
  switch (mode_RenShen) {
    case 'All':

      //按钮变色
      document.getElementById("tempBtn_1").setAttribute("src", 'Img/切图/按钮常规.png');
      document.getElementById("tempBtn_2").setAttribute("src", 'Img/切图/按钮常规.png');
      document.getElementById("tempBtn_3").setAttribute("src", 'Img/切图/按钮常规.png');
      if (!tempBtnHighLight_1) {
        document.getElementById("tempBtn_1").setAttribute("src", 'Img/切图/按钮高亮.png');
        tempBtnHighLight_1 = true
        document.getElementById("tempBtn_2").setAttribute("src", 'Img/切图/按钮高亮.png');
        tempBtnHighLight_2 = true
        document.getElementById("tempBtn_3").setAttribute("src", 'Img/切图/按钮高亮.png');
        tempBtnHighLight_3 = true
      } else {
        tempBtnHighLight_1 = false
        tempBtnHighLight_2 = false
        tempBtnHighLight_3 = false
      }

      //数据操控
      break;
    case 'Forest':

      //按钮变色
      document.getElementById("tempBtn_1").setAttribute("src", 'Img/切图/按钮常规.png');
      document.getElementById("tempBtn_2").setAttribute("src", 'Img/切图/按钮常规.png');
      document.getElementById("tempBtn_3").setAttribute("src", 'Img/切图/按钮常规.png');
      if (!tempBtnHighLight_1) {
        document.getElementById("tempBtn_1").setAttribute("src", 'Img/切图/按钮高亮.png');
        tempBtnHighLight_1 = true
        document.getElementById("tempBtn_2").setAttribute("src", 'Img/切图/按钮高亮.png');
        tempBtnHighLight_2 = true
        document.getElementById("tempBtn_3").setAttribute("src", 'Img/切图/按钮高亮.png');
        tempBtnHighLight_3 = true
      } else {
        tempBtnHighLight_1 = false
        tempBtnHighLight_2 = false
        tempBtnHighLight_3 = false
      }
     //数据操控

      break;
    case 'Garden':

      //按钮变色
      document.getElementById("tempBtn_1").setAttribute("src", 'Img/切图/按钮常规.png');

      if (!tempBtnHighLight_1) {
        document.getElementById("tempBtn_1").setAttribute("src", 'Img/切图/按钮高亮.png');
        tempBtnHighLight_1 = true
      } else {
        tempBtnHighLight_1 = false
      }

      //数据操控

      break;
  }


}

//已种植地块按钮
function TempBtn_2() {
  //按钮变色
  document.getElementById("tempBtn_2").setAttribute("src", 'Img/切图/按钮常规.png');
  if (!tempBtnHighLight_2) {
    document.getElementById("tempBtn_2").setAttribute("src", 'Img/切图/按钮高亮.png');
    tempBtnHighLight_2 = true

  } else {
    tempBtnHighLight_2 = false
  }


  //数据操控
  switch (mode_RenShen) {
    case 'All':
      ShowPlantedShp(tempBtnHighLight_2)
      showPlantedArea = tempBtnHighLight_2
      break;
    case 'Forest':
      viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/林下参.geojson') {
          entities = datasource.entities.values;
          entities.forEach(entity => {
            try {
              if (entity.properties.种植 == '已种植') {
                entity.show = tempBtnHighLight_2;
              }
            } catch { }

          })
        }
      })
      showPlantedForest = tempBtnHighLight_2
      break;
    case 'Garden':
      viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/园参.geojson') {
          entities = datasource.entities.values;
          entities.forEach(entity => {
            try {
              if (entity.properties.种植 == '已种植') {
                entity.show = tempBtnHighLight_2;
              }
            } catch { }

          })
        }
      })
      showPlantedGarden = tempBtnHighLight_2
      break;
  }
  showSuitableArea = showPlantedArea&&showUnplantedArea?true:false;
}

function TempBtn_3() {

  //按钮变色
  document.getElementById("tempBtn_3").setAttribute("src", 'Img/切图/按钮常规.png');
  if (!tempBtnHighLight_3) {
    document.getElementById("tempBtn_3").setAttribute("src", 'Img/切图/按钮高亮.png');
    tempBtnHighLight_3 = true
  } else {
    tempBtnHighLight_3 = false
  }

  //数据操控
  switch (mode_RenShen) {
    case 'All':
      ShowUnplantedShp(tempBtnHighLight_3)
      showUnplantedArea = tempBtnHighLight_3
      break;
    case 'Forest':
      viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/林下参.geojson') {

          entities = datasource.entities.values;
          entities.forEach(entity => {
            try {
              if (entity.properties.种植 == '未种植') {
                entity.show = tempBtnHighLight_3;
              }
            } catch { }

          })
        }
      })
      showUnplantedForest = tempBtnHighLight_3
      break;
    case 'Garden':
      viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/园参.geojson') {
          entities = datasource.entities.values;
          entities.forEach(entity => {
            try {
              if (entity.properties.未来 != ' ') {
                entity.show = tempBtnHighLight_3;
              }
            } catch { }

          })
        }
      })
      showUnplantedGarden = tempBtnHighLight_3
      break;
  }

  showSuitableArea = showPlantedArea&&showUnplantedArea?true:false;
}


function TempRightBtn_1() {
  console.log(1111111)
  if (showState_JiAn) {

    // WMTSForestList_County[4].show = false
    // WMTSGardenList_County[4].show = false
    viewer0.dataSources._dataSources.forEach(datasource => {
      if (datasource._name == 'geojson/林下参.geojson') {
        datasource.entities._entities._array.forEach(entity => {
          try {
            if (entity.properties.县区 == '集安市') {
              entity.show = false;
            }
          }
          catch { }

        });
      }
      if (datasource._name == 'geojson/园参.geojson') {
        datasource.entities._entities._array.forEach(entity => {
          try {
            if (entity.properties.县区 == '集安市') {
              entity.show = false;
            }
          }
          catch { }

        });
      }
    })
    showState_JiAn = false;

  } else {
    if (showUnplantedArea) {
      // WMTSForestList_County[4].show = true
      // WMTSGardenList_County[4].show = true
    }
    if (showPlantedArea) {
      viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/林下参.geojson') {
          datasource.entities._entities._array.forEach(entity => {
            try {
              if (entity.properties.县区 == '集安市') {
                entity.show = true;
              }
            }
            catch { }

          });
        }
        if (datasource._name == 'geojson/园参.geojson') {
          datasource.entities._entities._array.forEach(entity => {
            try {
              if (entity.properties.县区 == '集安市') {
                entity.show = true;
              }
            }
            catch { }

          });
        }
      })
    }
    showState_JiAn = true;

  }

  // if(!showState_JiAn){
  //   WMTSForestList_County.forEach(wmts => {
  //     wmts.show  = false
  //   });
  //   WMTSGardenList_County.forEach(wmts => {
  //     wmts.show  = false
  //   });
  //   WMTSForestList_County[4].show = true;

  //   document.getElementById("tempRightBtn_1").innerHTML = '隐藏'
  //   showState_JiAn = true
  // }else{
  //   WMTSForestList_County.forEach(wmts => {
  //     wmts.show  = true
  //   });
  //   WMTSGardenList_County.forEach(wmts => {
  //     wmts.show  = true
  //   });

  //   document.getElementById("tempRightBtn_1").innerHTML = '显示'
  //   showState_JiAn = false;
  // }
}
function TempRightBtn_2() {
  if (showState_HuiNan) {
    // WMTSForestList_County[1].show = false
    // WMTSGardenList_County[1].show = false
    viewer0.dataSources._dataSources.forEach(datasource => {
      if (datasource._name == 'geojson/林下参.geojson') {
        datasource.entities._entities._array.forEach(entity => {
          try {
            if (entity.properties.县区 == '辉南县') {
              entity.show = false;
            }
          }
          catch { }

        });
      }
      if (datasource._name == 'geojson/园参.geojson') {
        datasource.entities._entities._array.forEach(entity => {
          try {
            if (entity.properties.县区 == '辉南县') {
              entity.show = false;
            }
          }
          catch { }

        });
      }
    })
    showState_HuiNan = false;

  } else {
    if (showUnplantedArea) {
      // WMTSForestList_County[1].show = true
      // WMTSGardenList_County[1].show = true
    }
    if (showPlantedArea) {
      viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/林下参.geojson') {
          datasource.entities._entities._array.forEach(entity => {
            try {
              if (entity.properties.县区 == '辉南县') {
                entity.show = true;
              }
            }
            catch { }

          });
        }
        if (datasource._name == 'geojson/园参.geojson') {
          datasource.entities._entities._array.forEach(entity => {
            try {
              if (entity.properties.县区 == '辉南县') {
                entity.show = true;
              }
            }
            catch { }

          });
        }
      })
    }
    showState_HuiNan = true;
  }
}
function TempRightBtn_3() {
  if (showState_TongHuaChengQu) {
    // WMTSForestList_County[3].show = false
    // WMTSGardenList_County[3].show = false
    viewer0.dataSources._dataSources.forEach(datasource => {
      if (datasource._name == 'geojson/林下参.geojson') {
        datasource.entities._entities._array.forEach(entity => {
          try {
            if (entity.properties.县区 == '东昌区') {
              entity.show = false;
            }
            if (entity.properties.县区 == '二道江区') {
              entity.show = false;
            }
            if (entity.properties.县区 == '港务区') {
              entity.show = false;
            }
            if (entity.properties.县区 == '通化城区') {
              entity.show = false;
            }
          }
          catch { }

        });
      }
      if (datasource._name == 'geojson/园参.geojson') {
        datasource.entities._entities._array.forEach(entity => {
          try {
            if (entity.properties.县区 == '东昌区') {
              entity.show = false;
            }
            if (entity.properties.县区 == '二道江区') {
              entity.show = false;
            }
            if (entity.properties.县区 == '港务区') {
              entity.show = false;
            }
            if (entity.properties.县区 == '通化城区') {
              entity.show = false;
            }
          }
          catch { }

        });
      }
    })
    showState_TongHuaChengQu = false;

  } else {
    if (showUnplantedArea) {
      // WMTSForestList_County[3].show = true
      // WMTSGardenList_County[3].show = true
    }
    if (showPlantedArea) {
      viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/林下参.geojson') {
          datasource.entities._entities._array.forEach(entity => {
            try {
              if (entity.properties.县区 == '东昌区') {
                entity.show = true;
              }
              if (entity.properties.县区 == '二道江区') {
                entity.show = true;
              }
              if (entity.properties.县区 == '通化城区') {
                entity.show = true;
              }
            }
            catch { }

          });
        }
        if (datasource._name == 'geojson/园参.geojson') {
          datasource.entities._entities._array.forEach(entity => {
            try {
              if (entity.properties.县区 == '东昌区') {
                entity.show = true;
              }
              if (entity.properties.县区 == '二道江区') {
                entity.show = true;
              }
              if (entity.properties.县区 == '通化城区') {
                entity.show = true;
              }
            }
            catch { }

          });
        }
      })
    }
    showState_TongHuaChengQu = true;

  }
}
function TempRightBtn_4() {
  if (showState_LiuHe) {
    // WMTSForestList_County[0].show = false
    // WMTSGardenList_County[0].show = false
    viewer0.dataSources._dataSources.forEach(datasource => {
      if (datasource._name == 'geojson/林下参.geojson') {
        datasource.entities._entities._array.forEach(entity => {
          try {
            if (entity.properties.县区 == '柳河县') {
              entity.show = false;
            }
          }
          catch { }
        });
      }
      if (datasource._name == 'geojson/园参.geojson') {
        datasource.entities._entities._array.forEach(entity => {
          try {
            if (entity.properties.县区 == '柳河县') {
              entity.show = false;
            }
          }
          catch { }

        });
      }
    })
    showState_LiuHe = false;
  } else {
    if (showUnplantedArea) {
      // WMTSForestList_County[0].show = true
      // WMTSGardenList_County[0].show = true
    }
    if (showPlantedArea) {
      viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/林下参.geojson') {
          datasource.entities._entities._array.forEach(entity => {
            try {
              if (entity.properties.县区 == '柳河县') {
                entity.show = true;
              }

            }
            catch { }

          });
        }
        if (datasource._name == 'geojson/园参.geojson') {
          datasource.entities._entities._array.forEach(entity => {
            try {
              if (entity.properties.县区 == '柳河县') {
                entity.show = true;
              }

            }
            catch { }

          });
        }
      })
    }
    showState_LiuHe = true;

  }
}
function TempRightBtn_5() {
  if (showState_TongHua) {
    // WMTSForestList_County[2].show = false
    // WMTSGardenList_County[2].show = false
    viewer0.dataSources._dataSources.forEach(datasource => {
      if (datasource._name == 'geojson/林下参.geojson') {
        datasource.entities._entities._array.forEach(entity => {
          try {
            if (entity.properties.县区 == '通化县') {
              entity.show = false;
            }
          }
          catch { }

        });
      }
      if (datasource._name == 'geojson/园参.geojson') {
        datasource.entities._entities._array.forEach(entity => {
          try {
            if (entity.properties.县区 == '通化县') {
              entity.show = false;
            }
          }
          catch { }

        });
      }
    })
    showState_TongHua = false;
  } else {
    if (showUnplantedArea) {
      // WMTSForestList_County[2].show = true
      // WMTSGardenList_County[2].show = true
    }
    if (showPlantedArea) {
      viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/林下参.geojson') {
          datasource.entities._entities._array.forEach(entity => {
            try {
              if (entity.properties.县区 == '通化县') {
                entity.show = true;
              }

            }
            catch { }

          });
        }
        if (datasource._name == 'geojson/园参.geojson') {
          datasource.entities._entities._array.forEach(entity => {
            try {
              if (entity.properties.县区 == '通化县') {
                entity.show = true;
              }

            }
            catch { }

          });
        }
      })
    }
    showState_TongHua = true;
  }
}

function TempRightBtnReset() {
  showState_JiAn = true
  showState_HuiNan = true
  showState_TongHuaChengQu = true
  showState_LiuHe = true
  showState_TongHua = true
}

function TempBtnReset() {

  document.getElementById("tempBtn_1").setAttribute("src", 'Img/切图/按钮常规.png');
  document.getElementById("tempBtn_2").setAttribute("src", 'Img/切图/按钮常规.png');
  document.getElementById("tempBtn_3").setAttribute("src", 'Img/切图/按钮常规.png');
  document.getElementById('tempBtnText_3').innerHTML = '未种植地块'
  tempBtnHighLight_1 = false;
  tempBtnHighLight_2 = false;
  tempBtnHighLight_3 = false;

  showSuitableArea = false;
  showUnplantedArea = false;
  showPlantedArea = false;

  showPlantedForest = false
  showPlantedGarden = false
  showUnplantedGarden = false;
  WMTSList.forEach(wmts => {
    wmts.show = false;
  });
  WMTSForestList_County.forEach(wmts => {
    wmts.show = false;
  });
  WMTSGardenList_County.forEach(wmts => {
    wmts.show = false;
  });
  wmtsGarden.show = false;
  viewer0.dataSources._dataSources.forEach(datasource => {

    if (datasource._name == 'geojson/林下参.geojson') {
      entities = datasource.entities.values;
      entities.forEach(entity => {
        entity.show = false;
      })
    }
    if (datasource._name == 'geojson/园参.geojson') {
      entities = datasource.entities.values;
      entities.forEach(entity => {
        entity.show = false;
      })
    }
    // if (datasource._name == 'geojson/园参未来种植情况.geojson') {
    //   datasource.show = false;
    // }
    if (datasource._name == 'geojson/柳河县园参.geojson') {
      datasource.show = false
    }
  })

}