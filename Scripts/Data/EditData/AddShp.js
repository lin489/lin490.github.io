window.targetDatasource;
window.newEntity;
window.preEntity = '';

layui.use('form', function () {
    var form = layui.form;
    //监听提交
    form.on('submit(formDataEditInfo)', function (data) {
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
        lockZoomInEvent = true;
        properties_Forest.县区 = (data.field.县区);
        properties_Forest.乡村 = (data.field.乡村);
        properties_Forest.所属 = (data.field.所属);
        properties_Forest.面积 = (parseFloat(data.field.面积));
        properties_Forest.坡向 = (data.field.坡向);
        properties_Forest.坡度 = (data.field.坡度);
        properties_Forest.树木 = (data.field.树木);
        properties_Forest.坡位 = (data.field.坡位);
        properties_Forest.土壤类型 = (data.field.土壤类型);
        properties_Forest.土层厚度 = (data.field.土层厚度);
        properties_Forest.优势树种 = (data.field.优势树种);
        properties_Forest.郁闭度 = (data.field.郁闭度);
        try {
            pickEntity._properties.县区 = properties_Forest.县区;
            pickEntity._properties.乡村 = properties_Forest.乡村;
            pickEntity._properties.所属 = properties_Forest.所属;
            pickEntity._properties.面积 = properties_Forest.面积;
            pickEntity._properties.坡向 = properties_Forest.坡向;
            pickEntity._properties.坡度 = properties_Forest.坡度;
            pickEntity._properties.树木 = properties_Forest.树木;
            pickEntity._properties.坡位 = properties_Forest.坡位;
            pickEntity._properties.土壤类型 = properties_Forest.土壤类型;
            pickEntity._properties.土层厚度 = properties_Forest.土层厚度;
            pickEntity._properties.优势树种 = properties_Forest.优势树种;
            pickEntity._properties.郁闭度 = properties_Forest.郁闭度;
            pickEntity._properties.种植 = properties_Forest.种植;

        } catch { }
        HideEditPanel()
        return false;
    });
});
layui.use('form', function () {
    var form = layui.form;
    //监听提交
    form.on('submit(formDataEditInfo_garden)', function (data) {
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
        lockZoomInEvent = true;
        properties_Garden.县区 = (data.field.县区);
        properties_Garden.乡村 = (data.field.乡村);
        properties_Garden.所属 = (data.field.所属);
        properties_Garden.面积 = (parseFloat(data.field.面积));
        properties_Garden.租赁周期 = (data.field.租赁周期);
        properties_Garden.播种时间 = (data.field.播种时间);
        properties_Garden.参龄 = (data.field.参龄);
        properties_Garden.采收时间 = (data.field.采收时间);
        console.log(properties_Garden);
        try {
            pickEntity._properties.县区 = properties_Garden.县区;
            pickEntity._properties.乡村 = properties_Garden.乡村;
            pickEntity._properties.所属 = properties_Garden.所属;
            pickEntity._properties.面积 = properties_Garden.面积;
            pickEntity._properties.租赁周期 = properties_Garden.租赁周期;
            pickEntity._properties.播种时间 = properties_Garden.播种时间;
            pickEntity._properties.参龄 = properties_Garden.参龄;
            pickEntity._properties.采收时间 = properties_Garden.采收时间;
            entity._properties.种植 = properties_Garden.种植;
        } catch {}
        HideEditPanel_Garden()
        return false;
    });
});

function AddProperties_Forest(area) {
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
    properties_Forest.面积 = area;
    lockZoomInEvent = false;
    console.log(newEntity)
    newEntity._properties = properties_Forest;
    preEntity = newEntity
    document.getElementById("info01").innerText = '';
    document.getElementById("info02").innerText = '';
    document.getElementById("info03").innerText = '';
    document.getElementById("info04").innerText = area + ' (㎡)';
    document.getElementById("info05").innerText = '';
    document.getElementById("info06").innerText = '';
    document.getElementById("info07").innerText = '';
    document.getElementById("info08").innerText = '';
    document.getElementById("info09").innerText = '';
    document.getElementById("info10").innerText = '';
    document.getElementById("info11").innerText = '';
    document.getElementById("info12").innerText = '';
    pickEntity = newEntity
    ShowEditPanel_Forest();
}

function AddProperties_Garden(area) {
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
    properties_Garden.面积 = area;
    lockZoomInEvent = false;
    console.log(newEntity)
    newEntity._properties = properties_Garden;
    preEntity = newEntity
    document.getElementById("info01").innerText = '';
    document.getElementById("info02").innerText = '';
    document.getElementById("info03").innerText = '';
    document.getElementById("info04").innerText = area + ' (㎡)';
    document.getElementById("info05").innerText = '';
    document.getElementById("info06").innerText = '';
    document.getElementById("info07").innerText = '';
    document.getElementById("info08").innerText = '';
    pickEntity = newEntity
    ShowEditPanel_Garden();
}

function ShowEditPanel_Forest() {
    HideAllLeftPanel()

    document.getElementById("editData").style.display = 'Block';
    // console.log(document.getElementById("edit01").placeholder)

    let district = document.getElementById("info01").innerText;
    if (district == ' ') {
        district = '未知';
    }

    let countryside = document.getElementById("info02").innerText;
    if (countryside == ' ') {
        countryside = '未知';
    }
    let owner = document.getElementById("info03").innerText;
    if (owner == ' ') {
        owner = '未知';
    }
    let area = document.getElementById("info04").innerText;
    area = area.slice(0, area.indexOf(' (㎡)'));

    let slope = document.getElementById("info05").innerText;
    if (slope == ' ') {
        slope = '未知';
    }
    let aspect = document.getElementById("info06").innerText;
    if (aspect == ' ') {
        aspect = '未知';
    }

    let tree = document.getElementById("info07").innerText;
    if (tree == ' ') {
        tree = '未知';
    }

    let slopePosition = document.getElementById("info08").innerText;
    if (slopePosition == ' ') {
        slopePosition = '未知';
    }

    let agrotype = document.getElementById("info09").innerText;
    if (agrotype == ' ') {
        agrotype = '未知';
    }

    let soilThickness = document.getElementById("info10").innerText;
    if (soilThickness == ' ') {
        soilThickness = '未知';
    }

    let dominantTreeSpecies = document.getElementById("info11").innerText;
    if (dominantTreeSpecies == ' ') {
        dominantTreeSpecies = '未知';
    }

    let canopyDensity = document.getElementById("info12").innerText;
    if (canopyDensity == ' ') {
        canopyDensity = '未知';
    }

    document.getElementById("edit01").value = district;
    document.getElementById("edit02").value = countryside;
    document.getElementById("edit03").value = owner;
    document.getElementById("edit04").value = area;
    document.getElementById("edit05").value = slope;
    document.getElementById("edit06").value = aspect;
    document.getElementById("edit07").value = tree;
    document.getElementById("edit08").value = slopePosition;
    document.getElementById("edit09").value = agrotype;
    document.getElementById("edit10").value = soilThickness;
    document.getElementById("edit11").value = dominantTreeSpecies;
    document.getElementById("edit12").value = canopyDensity;

    document.getElementById("edit01").setAttribute("placeholder", district);
    document.getElementById("edit02").setAttribute("placeholder", countryside);
    document.getElementById("edit03").setAttribute("placeholder", owner);
    document.getElementById("edit04").setAttribute("placeholder", area);
    document.getElementById("edit05").setAttribute("placeholder", slope);
    document.getElementById("edit06").setAttribute("placeholder", aspect);
    document.getElementById("edit07").setAttribute("placeholder", tree);
    document.getElementById("edit08").setAttribute("placeholder", slopePosition);
    document.getElementById("edit09").setAttribute("placeholder", agrotype);
    document.getElementById("edit10").setAttribute("placeholder", soilThickness);
    document.getElementById("edit11").setAttribute("placeholder", dominantTreeSpecies);
    document.getElementById("edit12").setAttribute("placeholder", canopyDensity);

}

function ShowEditPanel_Garden() {
    HideAllLeftPanel()

    document.getElementById("editData_garden").style.display = 'Block';
    // console.log(document.getElementById("edit01").placeholder)

    let district = document.getElementById("info01_garden").innerText;
    if (district == ' ') {
        district = '未知';
    }

    let countryside = document.getElementById("info02_garden").innerText;
    if (countryside == ' ') {
        countryside = '未知';
    }
    let owner = document.getElementById("info03_garden").innerText;
    if (owner == ' ') {
        owner = '未知';
    }
    let area = document.getElementById("info04_garden").innerText;
    area = area.slice(0, area.indexOf(' (㎡)'));

    let lendTime = document.getElementById("info05_garden").innerText;
    if (lendTime == ' ') {
        lendTime = '未知';
    }
    let sowTime = document.getElementById("info06_garden").innerText;
    if (sowTime == ' ') {
        sowTime = '未知';
    }

    let rsAge = document.getElementById("info07_garden").innerText;
    if (rsAge == ' ') {
        rsAge = '未知';
    }
    let harvestTime = document.getElementById("info08_garden").innerText;
    if (harvestTime == ' ') {
        harvestTime = '未知';
    }
    document.getElementById("edit01_garden").value = district;
    document.getElementById("edit02_garden").value = countryside;
    document.getElementById("edit03_garden").value = owner;
    document.getElementById("edit04_garden").value = area;
    document.getElementById("edit05_garden").value = lendTime;
    document.getElementById("edit06_garden").value = sowTime;
    document.getElementById("edit07_garden").value = rsAge;
    document.getElementById("edit07_garden").value = harvestTime;

    document.getElementById("edit01_garden").setAttribute("placeholder", district);
    document.getElementById("edit02_garden").setAttribute("placeholder", countryside);
    document.getElementById("edit03_garden").setAttribute("placeholder", owner);
    document.getElementById("edit04_garden").setAttribute("placeholder", area);
    document.getElementById("edit05_garden").setAttribute("placeholder", lendTime);
    document.getElementById("edit06_garden").setAttribute("placeholder", sowTime);
    document.getElementById("edit07_garden").setAttribute("placeholder", rsAge);
    document.getElementById("edit07_garden").setAttribute("placeholder", harvestTime);

}
function HideEditPanel() {
    HideAllLeftPanel()
    document.getElementById("dataINFO").style.display = 'block';
    document.getElementById("info01").innerText = pickEntity._properties.县区;
    document.getElementById("info02").innerText = pickEntity._properties.乡村;
    document.getElementById("info03").innerText = pickEntity._properties.所属;
    document.getElementById("info04").innerText = parseFloat(pickEntity._properties.面积).toFixed(6) + ' (㎡)';
    document.getElementById("info05").innerText = pickEntity._properties.坡向;
    document.getElementById("info06").innerText = pickEntity._properties.坡度;
    document.getElementById("info07").innerText = pickEntity._properties.树木;
    document.getElementById("info08").innerText = pickEntity._properties.坡位;
    document.getElementById("info09").innerText = pickEntity._properties.土壤类型;
    document.getElementById("info10").innerText = pickEntity._properties.土层厚度;
    document.getElementById("info11").innerText = pickEntity._properties.优势树种;
    document.getElementById("info12").innerText = pickEntity._properties.郁闭度;
}

function HideEditPanel_Garden() {
    HideAllLeftPanel()
    document.getElementById("dataINFO_garden").style.display = 'block';
    document.getElementById("info01_garden").innerText = pickEntity._properties.县区;
    document.getElementById("info02_garden").innerText = pickEntity._properties.乡村;
    document.getElementById("info03_garden").innerText = pickEntity._properties.所属;
    document.getElementById("info04_garden").innerText = parseFloat(pickEntity._properties.面积).toFixed(6) + ' (㎡)';
    document.getElementById("info05_garden").innerText = pickEntity._properties.租赁周期;
    document.getElementById("info06_garden").innerText = pickEntity._properties.播种时间;
    document.getElementById("info07_garden").innerText = pickEntity._properties.参龄;
    document.getElementById("info08_garden").innerText = pickEntity._properties.采收时间;
}

