function LoadAssignedPlaceShp(datasourceName,place){
    viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == datasourceName) {
            datasource.entities._entities._array.forEach(entity => {
                try {
                    if (entity.properties.县区 == place) {
                        entity.show = true;
                    } else {
                        entity.show = false;
                    }
                }
                catch { }
            });
        }
    });
}

function LoadForestShp_JiAn() {
    ShowJiAnForestChart();
    LoadAssignedPlaceShp('geojson/林下参.geojson','集安市')
}

function LoadGardenShp_JiAn() {
    ShowJiAnGardenChart();
    LoadAssignedPlaceShp('geojson/园参.geojson','集安市')
}

function HideGardenShp_JiAn() {
    viewer0.dataSources._dataSources.forEach(datasource => {
        if (datasource._name == 'geojson/集安园参非官方.geojson') {
            datasource.show = false;
        }
        if (datasource._name == 'geojson/集安园参官方.geojson') {
            datasource.show = false;
        }
    });

}

function LoadShp_JiAn() {
    LoadAssignedPlaceShp('geojson/林下参.geojson','集安市')
    LoadAssignedPlaceShp('geojson/园参.geojson','集安市')
}


function LoadForestShp_LiuHe() {
    LoadAssignedPlaceShp('geojson/林下参.geojson','柳河县')
}
function LoadGardenShp_LiuHe() {
    LoadAssignedPlaceShp('geojson/园参.geojson','柳河县')

    let changeTifBtn = document.getElementById('changeTifBtn');
    //changeTifBtn.innerHTML = '不显示宜参地'
    HideAllLeftPanel()
    document.getElementById("UIPanel_left_LiuHe").style.visibility = 'visible';
    ChangePropertiesTableData(7)
}
function LoadShp_LiuHe() {
    LoadAssignedPlaceShp('geojson/林下参.geojson','柳河县')
    LoadAssignedPlaceShp('geojson/园参.geojson','柳河县')
}

function LoadForestShp_TongHua() {
    LoadAssignedPlaceShp('geojson/林下参.geojson','通化县')
}
function LoadGardenShp_TongHua() {
    LoadAssignedPlaceShp('geojson/园参.geojson','通化县')
}
function LoadShp_TongHua() {
    LoadAssignedPlaceShp('geojson/林下参.geojson','通化县')
    LoadAssignedPlaceShp('geojson/园参.geojson','通化县')
}

function LoadForestShp_ErDaoJiang() {
    LoadAssignedPlaceShp('geojson/林下参.geojson','二道江区')
}
function LoadGardenShp_ErDaoJiang() {
    LoadAssignedPlaceShp('geojson/园参.geojson','二道江区')
}
function LoadShp_ErDaoJiang() {
    LoadAssignedPlaceShp('geojson/林下参.geojson','二道江区')
    LoadAssignedPlaceShp('geojson/园参.geojson','二道江区')
}

function LoadForestShp_DongChang() {
    LoadAssignedPlaceShp('geojson/林下参.geojson','东昌区')
}
function LoadGardenShp_DongChang() {
    LoadAssignedPlaceShp('geojson/园参.geojson','东昌区')
}
function LoadShp_DongChang() {
    LoadAssignedPlaceShp('geojson/林下参.geojson','东昌区')
    LoadAssignedPlaceShp('geojson/园参.geojson','东昌区')
}

function LoadForestShp_HuiNan() {
    LoadAssignedPlaceShp('geojson/林下参.geojson','辉南县')
}
function LoadGardenShp_HuiNan() {
    LoadAssignedPlaceShp('geojson/园参.geojson','辉南县')
}
function LoadShp_HuiNan() {
    LoadAssignedPlaceShp('geojson/林下参.geojson','辉南县')
    LoadAssignedPlaceShp('geojson/园参.geojson','辉南县')
}
