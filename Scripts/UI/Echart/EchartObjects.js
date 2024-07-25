var focusMode = false;
var focusEChart;
var index = -1;
var echartOffsetDictionary = new Array();

var presentOffset = 0;

var forestGardenRateEchart;
RegEchartDic('forestGardenRateEchart')
// var forestOwnerEchart;
// RegEchartDic('forestOwnerEchart')
var forestLevelEchart;
RegEchartDic('forestLevelEchart')
var forestSlopeEchart;
RegEchartDic('forestSlopeEchart')
var forestAspectEchart;
RegEchartDic('forestAspectEchart')
var JiAnGardenAgeEchart;
RegEchartDic('JiAnGardenAgeEchart')
var JiAnLevelEchart;
RegEchartDic('JiAnLevelEchart')
var JiAnSlopeEchart;
RegEchartDic('JiAnSlopeEchart')
var JiAnAspectEchart;
RegEchartDic('JiAnAspectEchart')
var SuitableRenShenLevelEchart;
RegEchartDic('SuitableRenShenLevelEchart')
var JiAnGardenOfficialOrNotEchart;
RegEchartDic('JiAnGardenOfficialOrNotEchart')
var unplantedAreaEchart;
RegEchartDic('unplantedAreaEchart')
var TongHuaSuitableAreaPieEchart;
var TongHuaPlantedAreaPieEchart;
var TongHuaUnplantedAreaPieEchart;
RegEchartDic('TongHuaSuitableAreaPieEchart')
RegEchartDic('TongHuaPlantedAreaPieEchart')
RegEchartDic('TongHuaUnplantedAreaPieEchart')

var UnplantedForestLevelEchart
RegEchartDic('UnplantedForestLevelEchart')

var LiuHeRenShenAgeEchart;
RegEchartDic('LiuHeRenShenAgeEchart');

var LiuHeRenShenAreaEchart;
RegEchartDic('LiuHeRenShenAreaEchart');
var TongHuaRenShenAreaEchart;
RegEchartDic('TongHuaRenShenAreaEchart');
var HuiNanRenShenAreaEchart;
RegEchartDic('HuiNanRenShenAreaEchart');
var ErDaoJiangRenShenAreaEchart;
RegEchartDic('ErDaoJiangRenShenAreaEchart');
var DongChangRenShenAreaEchart;
RegEchartDic('DongChangRenShenAreaEchart');

var JiAnGardenAreaEchart;
RegEchartDic('JiAnGardenAreaEchart');

RegEchartDic('GardenShenAgeEchart');

var TempBarEchart_1, TempBarEchart_2, TempBarEchart_3, TempBarEchart_4, TempBarEchart_5;
var TempPieEchart_1, TempPieEchart_2, TempPieEchart_3, TempPieEchart_4, TempPieEchart_5;

var FurtureSuitablePlantEchart
var FurtureSuitablePlantEchart_DongChang
var FurtureSuitablePlantEchart_ErDaoJiang
var FurtureSuitablePlantEchart_HuiNan
var FurtureSuitablePlantEchart_JiAn
var FurtureSuitablePlantEchart_LiuHe
var FurtureSuitablePlantEchart_TongHua

RegEchartDic('FurtureSuitablePlantEchart')
RegEchartDic('FurtureSuitablePlantEchart_DongChang')
RegEchartDic('FurtureSuitablePlantEchart_ErDaoJiang')
RegEchartDic('FurtureSuitablePlantEchart_HuiNan')
RegEchartDic('FurtureSuitablePlantEchart_JiAn')
RegEchartDic('FurtureSuitablePlantEchart_LiuHe')
RegEchartDic('FurtureSuitablePlantEchart_TongHua')

var TongHuaRenShenAgeEchart
var LiuHeRenShenAgeEchart
var DongChangRenShenAgeEchart
var ErDaoJiangRenShenAgeEchart
var HuiNanRenShenAgeEchart

RegEchartDic('TongHuaRenShenAgeEchart')
RegEchartDic('LiuHeRenShenAgeEchart')
RegEchartDic('DongChangRenShenAgeEchart')
RegEchartDic('ErDaoJiangRenShenAgeEchart')
RegEchartDic('HuiNanRenShenAgeEchart')

Chart();

function EchartInit() {

}
/**
 * 自适应字体大小
 * @param {*} res 
 * @returns 
 */
function fontSize(res) {
    const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = clientWidth / 1920;
    return res * fontSize;
}

/**将饼图注册到UndoPitch */
function RegisterEchartUndoPitch(echart) {
    for (let i = 0; i < echart.getOption().series[0].data.length; i++) {
        echart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: i,
        });
    }

    //console.log('echart饼图切分个数:' + echart.getOption().series[0].data.length)
}


//取消高亮
//新增的echart点击事件需要在这里注册取消高亮事件
function UndoPitch() {
    RegisterEchartUndoPitch(forestGardenRateEchart)
    RegisterEchartUndoPitch(forestLevelEchart)
    RegisterEchartUndoPitch(JiAnLevelEchart)
    RegisterEchartUndoPitch(JiAnSlopeEchart)
    RegisterEchartUndoPitch(JiAnAspectEchart)
    RegisterEchartUndoPitch(JiAnGardenAgeEchart)
    RegisterEchartUndoPitch(LiuHeRenShenAgeEchart)

    RegisterEchartUndoPitch(LiuHeRenShenAreaEchart)
    RegisterEchartUndoPitch(TongHuaRenShenAreaEchart)
    RegisterEchartUndoPitch(HuiNanRenShenAreaEchart)
    RegisterEchartUndoPitch(ErDaoJiangRenShenAreaEchart)
    RegisterEchartUndoPitch(DongChangRenShenAreaEchart)
    RegisterEchartUndoPitch(JiAnGardenAreaEchart)

    RegisterEchartUndoPitch(TongHuaSuitableAreaPieEchart)
    RegisterEchartUndoPitch(TongHuaPlantedAreaPieEchart)
    RegisterEchartUndoPitch(SuitableRenShenLevelEchart)
    RegisterEchartUndoPitch(UnplantedForestLevelEchart)
    RegisterEchartUndoPitch(TongHuaUnplantedAreaPieEchart)

    RegisterEchartUndoPitch(TongHuaRenShenAgeEchart)
    RegisterEchartUndoPitch(LiuHeRenShenAgeEchart)
    RegisterEchartUndoPitch(DongChangRenShenAgeEchart)
    RegisterEchartUndoPitch(ErDaoJiangRenShenAgeEchart)
    RegisterEchartUndoPitch(HuiNanRenShenAgeEchart)
}

//注册Echart字典
function RegEchartDic(name) {
    echartOffsetDictionary[name] = presentOffset;
    presentOffset += 100;
}
//返回Echart偏移值
function GetEchartOffset(name) {
    return echartOffsetDictionary[name];
}

/**点击高亮及重复点击判断 */
function CalPieIndex(echart) {
    focusEChart = echart;
    if (!focusMode || params.dataIndex + GetEchartOffset(echart) != index) {
        focusEChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: params.dataIndex,
        });
        focusMode = true;
    } else if (focusMode && params.dataIndex + GetEchartOffset(echart) == index) {
        focusMode = false;
    }
    index = params.dataIndex + GetEchartOffset(echart);
}


/**所有Echart图表实例 */
function Chart() {
    let color1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ offset: 0, color: "#0269FF" }, { offset: 1, color: "#20FCFC" }], false);
    let color2 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ offset: 0, color: "#FDDD0D" }, { offset: 1, color: "#F3B71E" }], false);

    //通化市宜参地面积
    var tonghuaOption = {
        title: {
            text: '通化市宜参地面积合计:93.69万亩 \n 林下参：85.29万亩 \n 园参：8.39万亩'
            , textStyle: {
                fontSize: 10,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        grid: {
            left: '6%',
            right: '0%',
            bottom: '10%',
            top: '20%',
            containLabel: true
        },
        legend: {
            top: fontSize(20),
            left: fontSize(60),
            icon: "rect", // 修改形状     
            itemHeight: fontSize(10), // 修改icon图形大小
            itemWidth: fontSize(10),
            itemGap: 24, // 修改间距
            textStyle: {
                fontSize: 12,
                color: "#ffffff",
                padding: [0, 0, 0, 8], // 修改文字和图标距离
            },
        },
        xAxis: {
            data: ["集安市", "辉南县", "通化城区", "柳河县", "通化县",],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(12)
                },
                interval: 0,
            }
        },
        yAxis: [{
            name: '(万亩)',
            type: 'value',
            nameTextStyle: {
                color: "#ffffff",
                fontSize: fontSize(12),

                // padding:10
                padding: [0, 0, 0, -20]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(10)
                },
                interval: 0,
            }, splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }

        }],
        series: [
            {
                name: '林下参',
                type: 'bar',
                data: [36.39, 9.99, 8.04, 11.23, 25.73],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 70% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '25%',

            }, {
                name: '园参',
                type: 'bar',
                data: [2.66, 1.69, 0.92, 2.57, 2.91],

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FFEA00' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#F7C61A' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#EEA522' // 100% 处的颜色 
                            }
                        ]
                    }

                }, barWidth: '25%',

            }
        ]
        // ,grid:{
        //   top:"15%",
        //   left:"2%",
        //   right:"2%",
        //   bottom:"2%",
        //   containLabel:true
        // }
    };
    var tonghuaEchart = echarts.init(document.getElementById('tonghuaEchart'));
    tonghuaEchart.setOption(tonghuaOption);
    tonghuaEchart.on('click', function (params) {
        console.log(params)
    });



    //通化市已种植面积分析
    var forestGardenRateOption = {
        title: {
            text: '通化市已种植面积合计:39.05万亩 \n 林下参：30.66万亩 \n 园参：8.39万亩'
            , textStyle: {
                fontSize: 10,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        grid: {
            left: '6%',
            right: '0%',
            bottom: '10%',
            top: '20%',
            containLabel: true
        },
        legend: {
            top: fontSize(20),
            left: fontSize(60),
            icon: "rect", // 修改形状     
            itemHeight: fontSize(10), // 修改icon图形大小
            itemWidth: fontSize(10),
            itemGap: 24, // 修改间距
            textStyle: {
                fontSize: 12,
                color: "#ffffff",
                padding: [0, 0, 0, 8], // 修改文字和图标距离
            },
        },
        xAxis: {
            data: ["集安市", "辉南县", "通化城区", "柳河县", "通化县"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(12)
                },
                interval: 0,
            }
        },
        yAxis: [{
            name: '(万亩)',
            type: 'value',
            nameTextStyle: {
                color: "#ffffff",
                fontSize: fontSize(12),

                // padding:10
                padding: [0, 0, 0, -20]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(10)
                },
                interval: 0,
            }, splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }

        }],
        series: [
            {
                name: '林下参',
                type: 'bar',
                data: [15.91, 1.19, 1.34, 3.92, 8.23],

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 70% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '25%',

            }, {
                name: '园参',
                type: 'bar',
                data: [1.56, 1.34, 0.55, 1.52, 1.88],

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FFEA00' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#F7C61A' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#EEA522' // 100% 处的颜色 
                            }
                        ]
                    }

                }, barWidth: '25%',

            }
        ]
        // ,grid:{
        //   top:"15%",
        //   left:"2%",
        //   right:"2%",
        //   bottom:"2%",
        //   containLabel:true
        // }
    };
    forestGardenRateEchart = echarts.init(document.getElementById('forestGardenRateEchart'));
    forestGardenRateEchart.setOption(forestGardenRateOption);
    forestGardenRateEchart.on('click', function (params) {
    })

    //通化市未种植面积
    var unplantedAreaOption = {
        title: {
            text: '通化市未种植面积合计:58.90万亩 \n 林下参：54.63万亩 \n 园参：4.27万亩'
            , textStyle: {
                fontSize: 10,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , show: false
        },

        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        }, grid: {
            left: '6%',
            right: '0%',
            bottom: '10%',
            top: '20%',
            containLabel: true
        },
        legend: {
            top: fontSize(20),
            left: fontSize(60),
            icon: "rect", // 修改形状     
            itemHeight: fontSize(10), // 修改icon图形大小
            itemWidth: fontSize(10),
            itemGap: 24, // 修改间距
            textStyle: {
                fontSize: 12,
                color: "#ffffff",
                padding: [0, 0, 0, 8], // 修改文字和图标距离
            },
        },
        xAxis: {
            data: ["集安市", "辉南县", "通化城区", "柳河县", "通化县"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(12)
                },
                interval: 0,
            }
        },
        yAxis: [{
            name: '(万亩)',
            type: 'value',
            nameTextStyle: {
                color: "#ffffff",
                fontSize: fontSize(12),

                // padding:10
                padding: [0, 0, 0, -20]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(10)
                },
                interval: 0,
            }, splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }

        }],
        series: [
            {
                name: '林下参',
                type: 'bar',
                data: [20.48, 8.8, 6.70, 7.31, 17.5],

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '25%',

            }, {
                name: '园参',
                type: 'bar',
                data: [1.1, 0.35, 0.37, 1.05, 1.03],

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FFEA00' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#F7C61A' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#EEA522' // 100% 处的颜色 
                            }
                        ]
                    }
                }, barWidth: '25%',

            }
        ]
    }
    unplantedAreaEchart = echarts.init(document.getElementById('unplantedAreaEchart'));
    unplantedAreaEchart.setOption(unplantedAreaOption);


    //林下参宜参地分级分析
    SuitableRenShenLevelOption = {
        title: {
            text: '宜参地分级分析',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        color: ['#c23531', '#00eca4', '#9a5ef9'],
        tooltip: {
            trigger: 'item',
            formatter: '{b} {d}%',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            icon: 'circle',
            data: ['通天', '通地', '通人'],
            itemHeight: fontSize(10),
            itemWidth: fontSize(10),
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '35%',
                data: [
                    { value: 0.492361348, name: '通天' },
                    { value: 0.446101384, name: '通地' },
                    { value: 0.061537268, name: '通人' },
                ],
                label: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: '{b} {d}%',
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }

            },
            {
                name: 'Access From',
                type: 'pie',
                radius: ['55%', '70%'],
                label: {
                    position: 'inner',
                    fontSize: 10,
                    formatter: ''
                },
                color: ['#FF8277', '#FF443E', '#D42322', '#7EFF86', '#28DD5B', '#09B318', '#DA82FF', '#9D65FA', '#7757F7'],
                data: [
                    { value: 2620191.641, name: '通天丙等' },
                    { value: 1841787.886, name: '通天乙等' },
                    { value: 1836629.416, name: '通天甲等' },
                    { value: 1189506.3090141, name: '通地丙等' },
                    { value: 2079203.88821596, name: '通地乙等' },
                    { value: 2438110.974, name: '通地甲等' },
                    { value: 163459.8329, name: '通人丙等' },
                    { value: 32496.18911, name: '通人乙等' },
                    { value: 591269.0337, name: '通人甲等' },
                ]
            }
        ]
    };
    SuitableRenShenLevelEchart = echarts.init(document.getElementById('SuitableRenShenLevelEchart'));
    SuitableRenShenLevelEchart.setOption(SuitableRenShenLevelOption);
    SuitableRenShenLevelEchart.on('click', function (params) {
        console.log('params.dataIndex:' + params.dataIndex)
        console.log('GetEchartOffset:' + GetEchartOffset('SuitableRenShenLevelEchart'))
        console.log('index:' + index)
        if (params.name == '通天') {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/林下参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.分级 == '通天') {
                                entity.show = true;
                            } else {
                                if (params.dataIndex + GetEchartOffset('SuitableRenShenLevelEchart') == index) {
                                    entity.show = !entity.show;
                                } else {
                                    entity.show = false;
                                }
                            }

                        }
                        catch { }
                    });
                }
            });
        } else if (params.name == '通地') {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/林下参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.分级 == '通地') {
                                entity.show = true;
                            } else {
                                if (params.dataIndex + GetEchartOffset('SuitableRenShenLevelEchart') == index) {
                                    entity.show = !entity.show;
                                } else {
                                    entity.show = false;
                                }
                            }
                        }
                        catch { }
                    });
                }
            });
        } else if (params.name == '通人') {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/林下参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.分级 == '通人') {
                                entity.show = true;
                            } else {
                                if (params.dataIndex + GetEchartOffset('SuitableRenShenLevelEchart') == index) {
                                    entity.show = !entity.show;
                                } else {
                                    entity.show = false;
                                }
                            }
                        }
                        catch { }
                    });
                }
            });
        }



        UndoPitch()

        focusEChart = SuitableRenShenLevelEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('SuitableRenShenLevelEchart') != index) {
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('SuitableRenShenLevelEchart') == index) {

            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/林下参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = true
                    });
                }
            });

            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('SuitableRenShenLevelEchart');
    })

    //林下参已种植分级分析
    var forestLevelOption = {
        title: {
            text: '林下参种植分级分析',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        color: ['#c23531', '#00eca4', '#9a5ef9'],
        tooltip: {
            trigger: 'item',
            formatter: '{b} {d}%',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            icon: 'circle',
            data: ['通天', '通地', '通人'],
            itemHeight: fontSize(10),
            itemWidth: fontSize(10),
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '35%',
                data: [
                    { value: 0.429112731, name: '通天' },
                    { value: 0.429160758, name: '通地' },
                    { value: 0.141726511, name: '通人' },
                ], label: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: '{b} {d}%',
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            },
            {
                name: 'Access From',
                type: 'pie',
                radius: ['55%', '70%'],
                label: {
                    position: 'inner',
                    fontSize: 10,
                    formatter: ''
                },
                color: ['#FF8277', '#FF443E', '#D42322', '#7EFF86', '#28DD5B', '#09B318', '#DA82FF', '#9D65FA', '#7757F7'],
                data: [
                    { value: 0.192082603, name: '通天丙等' },
                    { value: 0.123948237, name: '通天乙等' },
                    { value: 0.113081891, name: '通天甲等' },
                    { value: 0.088671508, name: '通地丙等' },
                    { value: 0.173121337, name: '通地乙等' },
                    { value: 0.167367913, name: '通地甲等' },
                    { value: 0.100209591, name: '通人丙等' },
                    { value: 0.002526157, name: '通人乙等' },
                    { value: 0.038990763, name: '通人甲等' },
                ]
            }
        ]
    };
    forestLevelEchart = echarts.init(document.getElementById('forestLevelEchart'));
    forestLevelEchart.setOption(forestLevelOption);
    forestLevelEchart.on('click', function (params) {

        if (params.name == '通天') {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/林下参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.种植 == '已种植') {
                                if(entity.properties.分级 == '通天'){
                                    entity.show = true;
                                }else if (params.dataIndex + GetEchartOffset('forestLevelEchart') == index) {
                                    entity.show = !entity.show;
                                }else{
                                    entity.show = false
                                }
                            } 
                            

                        }
                        catch { }
                    });
                }
            });
        } else if (params.name == '通地') {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/林下参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.种植 == '已种植') {
                                if(entity.properties.分级 == '通地'){
                                    entity.show = true;
                                }else if (params.dataIndex + GetEchartOffset('forestLevelEchart') == index) {
                                    entity.show = !entity.show;
                                }else{
                                    entity.show = false
                                }
                            } 
                        }
                        catch { }
                    });
                }
            });
        } else if (params.name == '通人') {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/林下参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.种植 == '已种植') {
                                if(entity.properties.分级 == '通人'){
                                    entity.show = true;
                                }else if (params.dataIndex + GetEchartOffset('forestLevelEchart') == index) {
                                    entity.show = !entity.show;
                                }else{
                                    entity.show = false
                                }
                            } 
                        }
                        catch { }
                    });
                }
            });
        }
        UndoPitch()
        focusEChart = forestLevelEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('forestLevelEchart') != index) {
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('forestLevelEchart') == index) {
            // viewer0.dataSources._dataSources.forEach(datasource => {
            //     if (datasource._name == 'geojson/林下参.geojson') {
            //         datasource.entities._entities._array.forEach(entity => {
            //             try {
            //                 if (entity.properties.种植 == '已种植') {
            //                     entity.show = !entity.show;
            //                 }
            //             } catch { }
            //         });
            //     }
            // });

            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('forestLevelEchart');
    });

    //林下参未种植分级分析
    UnplantedForestLevelOption = {
        title: {
            text: '未种植分级分析',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        color: ['#c23531', '#00eca4', '#9a5ef9'],
        tooltip: {
            trigger: 'item',
            formatter: '{b} {d}%',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            icon: 'circle',
            data: ['通天', '通地', '通人'],
            itemHeight: fontSize(10),
            itemWidth: fontSize(10),
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '35%',
                data: [
                    { value: 0.494570666, name: '通天' },
                    { value: 0.446693131, name: '通地' },
                    { value: 0.058736203, name: '通人' },
                ],
                label: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: '{b} {d}%',
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }

            },
            {
                name: 'Access From',
                type: 'pie',
                radius: ['55%', '70%'],
                label: {
                    position: 'inner',
                    fontSize: 10,
                    formatter: ''

                },
                color: ['#FF8277', '#FF443E', '#D42322', '#7EFF86', '#28DD5B', '#09B318', '#DA82FF', '#9D65FA', '#7757F7'],
                data: [
                    { value: 0.205264927, name: '通天丙等' },
                    { value: 0.144671746, name: '通天乙等' },
                    { value: 0.144633993, name: '通天甲等' },
                    { value: 0.093134158, name: '通地丙等' },
                    { value: 0.162161141, name: '通地乙等' },
                    { value: 0.191397833, name: '通地甲等' },
                    { value: 0.009723572, name: '通人丙等' },
                    { value: 0.002540714, name: '通人乙等' },
                    { value: 0.046471916, name: '通人甲等' },
                ]
            }
        ]
    };
    UnplantedForestLevelEchart = echarts.init(document.getElementById('UnplantedForestLevelEchart'));
    UnplantedForestLevelEchart.setOption(UnplantedForestLevelOption);
    UnplantedForestLevelEchart.on('click', function (params) {
        if (params.name == '通天') {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/林下参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.种植 == '未种植') {
                                if(entity.properties.分级 == '通天'){
                                    entity.show = true;
                                }else if (params.dataIndex + GetEchartOffset('UnplantedForestLevelEchart') == index) {
                                    entity.show = !entity.show;
                                }else{
                                    entity.show = false
                                }
                            } 
                            

                        }
                        catch { }
                    });
                }
            });
        } else if (params.name == '通地') {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/林下参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.种植 == '未种植') {
                                if(entity.properties.分级 == '通地'){
                                    entity.show = true;
                                }else if (params.dataIndex + GetEchartOffset('UnplantedForestLevelEchart') == index) {
                                    entity.show = !entity.show;
                                }else{
                                    entity.show = false
                                }
                            } 
                        }
                        catch { }
                    });
                }
            });
        } else if (params.name == '通人') {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/林下参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.种植 == '未种植') {
                                if(entity.properties.分级 == '通人'){
                                    entity.show = true;
                                }else if (params.dataIndex + GetEchartOffset('UnplantedForestLevelEchart') == index) {
                                    entity.show = !entity.show;
                                }else{
                                    entity.show = false
                                }
                            } 
                        }
                        catch { }
                    });
                }
            });
        }
        UndoPitch()

        focusEChart = UnplantedForestLevelEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('UnplantedForestLevelEchart') != index) {
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('UnplantedForestLevelEchart') == index) {

            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('UnplantedForestLevelEchart');

    })



    //园参种植所有权占比分析
    gardenOwnerOption = {
        title: {
            text: '园参种植所有权占比分析',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }, show: false
        },
        color: ['#bd8933', '#7d99ff'],
        tooltip: {
            trigger: 'item',
            formatter: '{b}',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: [

            ]
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 2.2267, name: '国有 21%' },
                    { value: 7.94417325, name: '集体 78%' },

                ], label: {
                    position: 'inner',
                    fontSize: 14
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    // var gardenOwnerEchart = echarts.init(document.getElementById('gardenOwnerEchart'));
    // gardenOwnerEchart.setOption(gardenOwnerOption)



    //林下参宜参地面积分析
    var forestOption = {
        title: {
            text: '林下参宜参地面积分析'
            , textStyle: {
                fontSize: 20,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , subtext: '(万亩)'
            , show: false
        },
        grid: {
            left: '6%',
            right: '8%',
            bottom: '10%',
            top: '20%',
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: ['面积']
        },
        xAxis: {
            data: ["集安市", "辉南县", "通化城区", "柳河县", "通化县"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(12)
                },
                interval: 0,
            }
        },
        yAxis: [{
            name: '(万亩)',
            type: 'value',
            nameTextStyle: {
                color: "#ffffff",
                fontSize: fontSize(12),

                // padding:10
                padding: [0, 0, 0, -20]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(10)
                },
                interval: 0,
            }, splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }

        }],
        series: [
            {
                name: '林下参',
                type: 'bar',
                data: [20.5, 8.8031, 6.7832, 7.3172, 17.5],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 70% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '25%',
            }
        ]
    };
    echarts.init(document.getElementById('forestEchart')).setOption(forestOption);


    //林下参坡度分析
    // var forestSlopeOption = {
    //   title: {
    //     text: '林下参坡度分析',
    //     left: 'center',
    //     textStyle: {
    //       color: '#b7ddef',//字体颜色
    //     }
    //     ,show:false
    //   },color: ['#7331f7', '#faeb00', '#e79750', '#0ef79e', '#0ef79e', '#0186ff'],
    //   tooltip: {
    //     trigger: 'item',
    //     formatter: '{c} 个'
    //   },
    //   legend: {
    //     data: [

    //     ]
    //   },
    //   series: [
    //     {
    //       name: '占比',
    //       type: 'pie',
    //       radius: ['40%', '70%'],
    //       avoidLabelOverlap: false,
    //       data: [
    //         { value: 632, name: '陡' },
    //         { value: 3, name: '险' },
    //         { value: 602, name: '缓' },
    //         { value: 106, name: '平' },
    //         { value: 991, name: '斜' },
    //         { value: 36, name: '急' },
    //       ], label: {
    //         position: 'inner',
    //         fontSize: 14
    //       },
    //       emphasis: {
    //         itemStyle: {
    //           shadowBlur: 10,
    //           shadowOffsetX: 0,
    //           shadowColor: 'rgba(0, 0, 0, 0.8)'
    //         }
    //       }
    //     }
    //   ]
    // };
    // forestSlopeEchart = echarts.init(document.getElementById('forestSlopeEchart'));
    // forestSlopeEchart.setOption(forestSlopeOption);

    //林下参种植树木类型占比分析
    // var forestSpeciesOption = {
    //   title: {
    //     text: '林下参种植树木类型占比分析',
    //     left: 'center',
    //     textStyle: {
    //       color: '#b7ddef',//字体颜色
    //     }
    //   },
    //   tooltip: {
    //     trigger: 'item'
    //   },
    //   legend: {
    //     data: []
    //   },
    //   series: [
    //     {
    //       name: '占比',
    //       type: 'pie',
    //       radius: '60%',
    //       data: [
    //         { value: 305, name: '阔叶林' },
    //         { value: 2, name: '水曲柳' },
    //         { value: 27, name: '柞树' },
    //         { value: 125, name: ' 针阔混' },
    //         { value: 17, name: ' 针叶混' },
    //         { value: 31, name: '纯林' },
    //         { value: 1, name: '椴树林' },
    //         { value: 98, name: '红松林' },
    //         { value: 22, name: '胡桃楸' },
    //         { value: 285, name: '混交林' },
    //         { value: 6, name: '经济林' },
    //         { value: 556, name: '阔叶混' },
    //         { value: 230, name: '落叶松' },
    //         { value: 18, name: '其它灌' },
    //         { value: 72, name: '其它阔' },
    //         { value: 5, name: '其它阔叶林' },
    //         { value: 9, name: '杨树林' },
    //         { value: 7, name: '云杉林' },
    //         { value: 92, name: '柞树林' },
    //         { value: 11, name: '樟子松 ' },
    //       ],
    //       emphasis: {
    //         itemStyle: {
    //           shadowBlur: 10,
    //           shadowOffsetX: 0,
    //           shadowColor: 'rgba(0, 0, 0, 0.8)'
    //         }
    //       }
    //     }
    //   ]
    // };
    // echarts.init(document.getElementById('forestSpeciesEchart')).setOption(forestSpeciesOption);

    //园参种植面积分析

    var gardenAreaOption = {
        title: {
            text: '园参种植面积分析'
            , textStyle: {
                fontSize: 20,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , subtext: '(万亩)'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        grid: {
            top: '20%',
            bottom: '20%',
            left: '6%',
            right: '6%',
            containLabel: true
        },
        legend: {
            data: ['面积']
        },
        xAxis: {
            data: ["集安市", "辉南县", "通化城区", "柳河县", "通化县",],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff'
                },
                interval: 0,
            }
        },
        yAxis: [{
            name: '(万亩)',
            type: 'value',
            nameTextStyle: {
                color: "#ffffff",

                fontSize: fontSize(16),

                // padding:10
                padding: [0, 0, 0, -20]
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(10)
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }

        }],
        series: [
            {
                name: '园参',
                type: 'bar',
                data: [3.222, 0.4989, 0.4812, 1.4173, 2.771822,],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FFEA00' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#F7C61A' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#EEA522' // 100% 处的颜色 
                            }
                        ]
                    }
                }, barWidth: '25%',

            }
        ]
    };
    //echarts.init(document.getElementById('gardenAreaEchart')).setOption(gardenAreaOption);

    //园参县区种植面积
    var gardenYieldOption = {
        title: {
            text: '园参产量分析',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }, show: false
        },
        color: ['#FEE34B', '#F19736', '#FF379D', '#898DFA', '#762BFF', '#388AFF', '#41EBFF', '#1FFFA9']
        ,
        tooltip: {
            trigger: 'item',
            formatter: '{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: [

            ]
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: ['45%', '70%'],

                data: [
                    { value: 0, name: '集安市' },
                    { value: 2853217, name: '辉南县' },
                    { value: 18865224, name: '柳河县' },
                    { value: 9729575, name: '通化县' },
                    { value: 0, name: '东昌区' },
                    { value: 70800, name: '二道江区' },
                    { value: 0, name: '高新区' },
                    { value: 68600, name: '港务区' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    echarts.init(document.getElementById('gardenYieldEchart'), 'infographic').setOption(gardenYieldOption);

    // //园参所有权占比分析
    // var gardenOwnerOption = {
    //   title: {
    //     text: '园参所有权占比分析',
    //     left: 'center',
    //     textStyle: {
    //       color: '#b7ddef',//字体颜色
    //     }
    //   },
    //   tooltip: {
    //     trigger: 'item'
    //   },
    //   legend: {
    //     data: [

    //     ]
    //   },
    //   series: [
    //     {
    //       name: '占比',
    //       type: 'pie',
    //       radius: '70%',
    //       data: [
    //         { value: 7.94417325, name: '集体' },
    //         { value: 2.2267, name: '国有' },
    //       ]
    //       , label: {
    //         position: 'inner',
    //         fontSize: 14
    //       },
    //       emphasis: {
    //         itemStyle: {
    //           shadowBlur: 10,
    //           shadowOffsetX: 0,
    //           shadowColor: 'rgba(0, 0, 0, 0.8)'
    //         }
    //       }
    //     }
    //   ]
    // };
    // echarts.init(document.getElementById('gardenOwnerEchart_1')).setOption(gardenOwnerOption);

    //园参土地类型分析
    var gardenDistrictKindOption = {
        title: {
            text: '园参土地类型分析',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }, show: false
        },
        color: ['#bd8933', '#9a5ef9', '#00eca4',],
        tooltip: {
            trigger: 'item',
            formatter: '{b} {c} %',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: [

            ]
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 44.98, name: '耕地' },
                    { value: 56.611, name: '园地' },
                    { value: 1.03, name: '草地' },

                ],
                label: {
                    position: 'inner',
                    fontSize: 14
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    // echarts.init(document.getElementById('gardenDistrictKindEchart')).setOption(gardenDistrictKindOption);

    //集安园参种植面积分析
    // var JiAnGardenOption = {
    //     title: {
    //         text: '集安园参种植面积分析'
    //         , textStyle: {
    //             fontSize: 20,//字体大小
    //             color: '#b7ddef',//字体颜色
    //         }, left: 'center'
    //         , subtext: '单位：平方米'
    //         , show: false
    //     },
    //     tooltip: {},
    //     legend: {
    //         data: ['面积']
    //     },
    //     xAxis: {
    //         data: ["朱仙村", "长川村", "榆林村", "永泉村", "迎水村", "杨木林村", "向阳村", "下套村", "下解放村", "下活龙村", "通天村", "通沟村", "太平村", "台上村", "双兴村", "石青村", "石砄村", "石湖村", "上活龙村", "山城村", "泉眼村", "青石村", "江口村", "建疆村", "甲乙村", "榆林镇政府", "移民局", "水利局", "第二参场", "黄柏村", "花甸村", "红星村", "蒿子沟村", "海关村",
    //             "果树村", "复兴村", "地沟村", "大甸子村", "财源村", "北屯村"],
    //         axisLabel: {
    //             formatter: function (value) {
    //                 var ret = "";//拼接加\n返回的类目项  
    //                 var maxLength = 1;//每项显示文字个数  
    //                 var valLength = value.length;//X轴类目项的文字个数  
    //                 var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
    //                 if (rowN > 1)//如果类目项的文字大于5,  
    //                 {
    //                     for (var i = 0; i < rowN; i++) {
    //                         var temp = "";//每次截取的字符串  
    //                         var start = i * maxLength;//开始截取的位置  
    //                         var end = start + maxLength;//结束截取的位置  
    //                         //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
    //                         temp = value.substring(start, end) + "\n";
    //                         ret += temp; //凭借最终的字符串  
    //                     }
    //                     return ret;
    //                 }
    //                 else {
    //                     return value;
    //                 }
    //             },
    //             show: true,
    //             textStyle: {
    //                 color: '#ffffff'
    //             },
    //             interval: 0,
    //         }
    //     },
    //     yAxis: [{
    //         type: 'value',
    //         axisLabel: {
    //             show: true,
    //             textStyle: {
    //                 color: '#ffffff'
    //             },
    //             interval: 0,
    //         }
    //     }],
    //     series: [
    //         {
    //             name: '园参',
    //             type: 'bar',
    //             data: [232482.4007, 662611.9729, 122066.6363, 34626.16711, 705143.8843, 80734.11389, 240503.8601, 155894.5717, 430499.4303, 36351.9679, 38996.60522, 243315.7934, 86872.28972, 249331.2192, 12201.28917, 59380.90706, 70609.9134, 192648.2722, 149238.7801, 66691.38048, 87464.05802, 227033.1483, 518093.1659, 342249.7107, 86215.00382, 38575.18836, 61087.9772, 60052.41117, 623636.3081, 211668.7335, 237306.5107, 222980.0593, 610712.0887, 58615.79323, 1255795.474, 26810.83471, 1193832.864, 198581.1228, 74919.88531, 79558.39944],
    //             itemStyle: {
    //                 color: {
    //                     type: 'linear',
    //                     x: 0,  //右
    //                     y: 0,  //下
    //                     x2: 0,  //左
    //                     y2: 1,  //上
    //                     colorStops: [
    //                         {
    //                             offset: 0,
    //                             color: '#fcee62' // 0% 处的颜色
    //                         },
    //                         {
    //                             offset: 0.7,
    //                             color: '#e2cd4e' // 70% 处的颜色
    //                         },
    //                         {
    //                             offset: 1,
    //                             color: '#ac881e' // 100% 处的颜色
    //                         }
    //                     ]
    //                 }
    //             },
    //         }
    //     ]
    // };
    // echarts.init(document.getElementById('JiAnGardenEchart')).setOption(JiAnGardenOption);

    //集安园参年龄分析
    var JiAnGardenAgeOption = {
        title: {
            text: '集安园参年龄分析',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: [

            ]
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '80%',
                data: [
                    { value: 2927915.891, name: '两年参' },
                    { value: 1193521.031, name: '三年参' },
                    { value: 277325.4578, name: '四年参' },
                    { value: 5686627.813, name: '五年参' },
                ], label: {
                    position: 'inner',
                    fontSize: 14
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    JiAnGardenAgeEchart = echarts.init(document.getElementById('JiAnGardenAgeEchart'))
    JiAnGardenAgeEchart.setOption(JiAnGardenAgeOption);
    JiAnGardenAgeEchart.on('click', function (params) {
        switch (params.name) {
            case '两年参':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.县区 == '集安市' && entity.properties.参龄 == 2022) {
                                    entity.show = true;
                                } else if (entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnGardenAgeEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '三年参':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.县区 == '集安市' && entity.properties.参龄 == 2021) {
                                    entity.show = true;
                                } else if (entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnGardenAgeEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '四年参':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.县区 == '集安市' && entity.properties.参龄 == 2020) {
                                    entity.show = true;
                                } else if (entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnGardenAgeEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '五年参':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.县区 == '集安市' && entity.properties.参龄 == 2019) {
                                    entity.show = true;
                                } else if (entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnGardenAgeEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
        }
        UndoPitch()
        focusEChart = JiAnGardenAgeEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('JiAnGardenAgeEchart') != index) {
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('JiAnGardenAgeEchart') == index) {
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('JiAnGardenAgeEchart');
    });



    var JiAnGardenAreaOption = {
        title: {
            text: '辉南县园参种植情况',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 14478.22439, name: '未种植' },
                    { value: 100.0370707, name: '休耕1年' },
                    { value: 74.90576095, name: '休耕2年' },
                    { value: 237.8474329, name: '休耕3年' },
                    { value: 237.0706295, name: '已种植' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    }
    JiAnGardenAreaEchart = echarts.init(document.getElementById('JiAnGardenAreaEchart'), 'infographic');
    JiAnGardenAreaEchart.setOption(JiAnGardenAreaOption);


    //集安园参土地类型分析
    var JiAnGardenDistrictKindOption = {
        title: {
            text: '集安园参土地类型分析',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: [

            ]
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '80%',
                data: [
                    { value: 7595532.442, name: '果园' },
                    { value: 2489857.75, name: '其他园地' },
                ], label: {
                    position: 'inner',
                    fontSize: 14
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    // echarts.init(document.getElementById('JiAnGardenDistrictKindEchart')).setOption(JiAnGardenDistrictKindOption);

    // //集安园参官方非官方数据对比
    // var JiAnGardenOfficialOrNotOption = {
    //   title: {
    //     text: '集安园参官方非官方数据对比',
    //     left: 'center',
    //     textStyle: {
    //       color: '#b7ddef',//字体颜色
    //     }
    //     ,show:false
    //   },
    //   color:['#bd8933','#9a5ef9']
    //   ,
    //   tooltip: {
    //     trigger: 'item',
    //     formatter: '{c} 亩'
    //   },
    //   legend: {
    //     data: [

    //     ]
    //   },
    //   series: [
    //     {
    //       name: '占比',
    //       type: 'pie',
    //       radius: '80%',
    //       data: [
    //         { value: 155, name: '官方数据' },
    //         { value: 2438, name: '非官方数据' },
    //       ], label: {
    //         position: 'inner',
    //         fontSize: 14
    //       },
    //       emphasis: {
    //         itemStyle: {
    //           shadowBlur: 10,
    //           shadowOffsetX: 0,
    //           shadowColor: 'rgba(0, 0, 0, 0.8)'
    //         }
    //       }
    //     }
    //   ]
    // }
    // JiAnGardenOfficialOrNotEchart = echarts.init(document.getElementById('JiAnGardenOfficialOrNotEchart'));
    // JiAnGardenOfficialOrNotEchart.setOption(JiAnGardenOfficialOrNotOption);
    // JiAnGardenOfficialOrNotEchart.on('click', function (params) {
    //   if(params.name == '官方数据'){
    //     viewer0.dataSources._dataSources.forEach(datasource => {
    //       if (datasource._name == 'geojson/集安园参非官方.geojson') {
    //           datasource.show = false;
    //       }
    //       if (datasource._name == 'geojson/集安园参官方.geojson') {
    //           datasource.show = true;
    //       }
    //   });

    //   }else{
    //     viewer0.dataSources._dataSources.forEach(datasource => {
    //       if (datasource._name == 'geojson/集安园参非官方.geojson') {
    //           datasource.show = true;
    //       }
    //       if (datasource._name == 'geojson/集安园参官方.geojson') {
    //           datasource.show = false;
    //       }
    //   });

    //   }
    //   UndoPitch()
    //   focusEChart = forestLevelEchart;
    //   if (!focusMode || params.dataIndex + GetEchartOffset('JiAnGardenOfficialOrNotEchart') != index) {
    //     focusEChart.dispatchAction({
    //       type: 'highlight',
    //       seriesIndex: 0,
    //       dataIndex: params.dataIndex,
    //     });
    //     focusMode = true;
    //   }else if(focusMode && params.dataIndex + GetEchartOffset('JiAnGardenOfficialOrNotEchart') == index){
    //     focusMode = false;
    //   }
    //   index = params.dataIndex + GetEchartOffset('JiAnGardenOfficialOrNotEchart');
    // });


    //集安园参通天通地通人分析
    var JiAnGardenTongOption = {
        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: [

            ]
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '80%',
                data: [
                    { value: 43, name: '通天 43%' },
                    { value: 28, name: '通地 28%' },
                    { value: 29, name: '通人 29%' },
                ], label: {
                    position: 'inner',
                    fontSize: 14
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    //echarts.init(document.getElementById('JiAnGardenTongEchart')).setOption(JiAnGardenTongOption);


    //集安市林下参种植面积分析
    var JiAnOption = {
        title: {
            text: '集安市林下参种植面积分析'
            , textStyle: {
                fontSize: 20,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , subtext: '(万亩)'
            , show: false
        },
        tooltip: {

        },
        grid: {
            top: '6%',
            bottom: '-10%',
            left: '6%',
            right: '6%',
            containLabel: true
        },
        color: ['#0075fb'],
        legend: {
            data: ['面积']
        },
        xAxis: {
            data: ["凉水朝鲜族乡 ", "麻线乡", "城东街道", "通胜街道", "台上镇", "清河镇", "太王镇", "榆林镇", "青石镇", "财源镇", "大路镇", "头道镇", "花甸镇", "双岔林场", "热闹林场", "大青沟林场", "头道林场", "榆林林场", "太王林场"],
            axisLabel: {
                formatter: function (value) {
                    var ret = "";//拼接加\n返回的类目项  
                    var maxLength = 1;//每项显示文字个数  
                    var valLength = value.length;//X轴类目项的文字个数  
                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
                    if (rowN > 1)//如果类目项的文字大于5,  
                    {
                        for (var i = 0; i < rowN; i++) {
                            var temp = "";//每次截取的字符串  
                            var start = i * maxLength;//开始截取的位置  
                            var end = start + maxLength;//结束截取的位置  
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                            temp = value.substring(start, end) + "\n";
                            ret += temp; //凭借最终的字符串  
                        }
                        return ret;
                    }
                    else {
                        return value;
                    }
                },
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(8)
                },
                interval: 0,
            }
        },
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff'
                },
                interval: 0,
            }, splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }
        }],
        series: [
            {
                name: '林下参',
                type: 'bar',
                data: [0.4629, 0.8262, 0.0135, 0.15, 0.6399, 2.1188, 0.5032, 0.7567, 1.0276, 0.4661, 3.1144, 0.1793, 0.2712, 0.361, 0.0504, 4.592, 0.028, , 0.1589, 0.0912],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '50%',

            }
        ]
    };
    echarts.init(document.getElementById('JiAnEchart')).setOption(JiAnOption);

    
    //集安市林下参分级分析
    var JiAnLevelOption = {
        title: {
            text: '集安市林下参分级分析',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }, show: false
        },
        color: ['#bd8933', '#00eca4', '#9a5ef9'],
        tooltip: {
            trigger: 'item',
            formatter: '{c} 个',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
            formatter: function (params) {
                console.log(params)
                switch (params) {
                    case '通天':
                        return '通天'

                    case '通地':
                        return '通地'

                    case '通人':
                        return '通人'

                }
            }
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 584, name: '通天' },
                    { value: 461, name: '通地' },
                    { value: 305, name: '通人' },
                ], label: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: '{b} {d}%'
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    JiAnLevelEchart = echarts.init(document.getElementById('JiAnLevelEchart'));
    JiAnLevelEchart.setOption(JiAnLevelOption);
    JiAnLevelEchart.on('click', function (params) {

        // 此处一般写：click事件触发后的回调，来完成额外的功能
        console.log(params)
        switch (params.name) {
            case '通天':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.县区 == '集安市' && entity.properties.分级 == '通天') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnLevelEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '通地':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.县区 == '集安市' && entity.properties.分级 == '通地') {
                                    entity.show = true;
                                } else if (entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnLevelEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '通人':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.县区 == '集安市' && entity.properties.分级 == '通人') {
                                    entity.show = true;
                                } else if (entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnLevelEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
        }
        UndoPitch()
        focusEChart = JiAnLevelEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('JiAnLevelEchart') != index) {
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('JiAnLevelEchart') == index) {
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('JiAnLevelEchart');
    });

    //集安市林下参坡度分析
    var JiAnSlopeOption = {
        title: {
            text: '集安市林下参坡度分析',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }, show: false
        }
        , color: ['#ff834c', '#7331f7', '#a5a5a5', '#e79750', '#0ef79e', '#f196ff', '#0186ff'],
        tooltip: {
            trigger: 'item',
            formatter: '{c} 个',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: [

            ]
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '80%',
                data: [
                    { value: 382, name: '陡' },
                    { value: 3, name: '险' },
                    { value: 219, name: '缓' },
                    { value: 36, name: '急' },
                    { value: 35, name: '平' },
                    { value: 564, name: '斜' },
                ], label: {
                    position: 'inner',
                    fontSize: 14
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };

    JiAnSlopeEchart = echarts.init(document.getElementById('JiAnSlopeEchart'));
    JiAnSlopeEchart.setOption(JiAnSlopeOption);
    JiAnSlopeEchart.on('click', function (params) {

        // 此处一般写：click事件触发后的回调，来完成额外的功能
        switch (params.name) {
            case '陡':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡度 == '陡') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnSlopeEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '险':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡度 == '险') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnSlopeEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '缓':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡度 == '缓') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnSlopeEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '急':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡度 == '急') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnSlopeEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '平':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡度 == '平') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnSlopeEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '斜':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡度 == '斜') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnSlopeEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
        }
        UndoPitch()
        focusEChart = JiAnSlopeEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('JiAnSlopeEchart') != index) {
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('JiAnSlopeEchart') == index) {
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('JiAnSlopeEchart');
    });

    //集安市林下参坡向分析
    var JiAnAspectOption = {
        title: {
            text: '集安市林下参坡向分析',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }, show: false
        },
        color: ['#bd8933', '#bd8933', '#00eca4', '#00eca4', '#9a5ef9', '#9a5ef9', '#9a5ef9', '#7ef3cc', '#bd8933'],
        tooltip: {
            trigger: 'item',
            formatter: '{c} 个',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: [

            ]
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '80%',
                data: [
                    { value: 141, name: '东北' },
                    { value: 149, name: '东' },
                    { value: 107, name: '东南' },
                    { value: 271, name: '南' },
                    { value: 83, name: '西南' },
                    { value: 79, name: '西' },
                    { value: 93, name: '西北' },
                    { value: 11, name: '无坡' },
                    { value: 294, name: '北' },
                ], label: {
                    position: 'inner',
                    fontSize: 14
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };

    JiAnAspectEchart = echarts.init(document.getElementById('JiAnAspectEchart'))
    JiAnAspectEchart.setOption(JiAnAspectOption);
    JiAnAspectEchart.on('click', function (params) {

        switch (params.name) {
            case '东北':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡向 == '东北') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnAspectEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '东':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡向 == '东') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnAspectEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '东南':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡向 == '东南') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnAspectEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '南':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡向 == '南') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnAspectEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '西南':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡向 == '西南') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnAspectEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '西':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡向 == '西') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnAspectEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '西北':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡向 == '西北') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnAspectEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '北':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡向 == '北') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnAspectEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
            case '无坡':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if ( entity.properties.县区 == '集安市' && entity.properties.坡向 == '无坡') {
                                    entity.show = true;
                                } else if ( entity.properties.县区 == '集安市') {
                                    if (params.dataIndex + GetEchartOffset('JiAnAspectEchart') == index) {
                                        entity.show = !entity.show;
                                    } else {
                                        entity.show = false;
                                    }
                                } else {
                                    entity.show = false;
                                }
                            }
                            catch { }
                        });
                    }
                });
                break;
        }
        UndoPitch()
        focusEChart = JiAnAspectEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('JiAnAspectEchart') != index) {
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('JiAnAspectEchart') == index) {
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('JiAnAspectEchart');
    });

    //集安市林下参种植树木类型占比分析
    // var JiAnSpeciesOption = {
    //   title: {
    //     text: '集安市林下参种植树木类型占比分析',
    //     left: 'center',
    //     textStyle: {
    //       color: '#b7ddef',//字体颜色
    //     }
    //   },
    //   tooltip: {
    //     trigger: 'item'
    //   },
    //   legend: {
    //     data: []
    //   },
    //   series: [
    //     {
    //       name: '占比',
    //       type: 'pie',
    //       radius: '60%',
    //       data: [
    //         { value: 1, name: '椴树林' },
    //         { value: 53, name: '红松林' },
    //         { value: 15, name: '胡桃楸' },
    //         { value: 2, name: '胡桃楸林' },
    //         { value: 5, name: '经济林' },
    //         { value: 490, name: '阔叶混' },
    //         { value: 102, name: '落叶松' },
    //         { value: 29, name: '落叶松林' },
    //         { value: 16, name: '其它灌' },
    //         { value: 72, name: '其它阔' },
    //         { value: 5, name: '其它阔叶林' },
    //         { value: 7, name: '杨树林' },
    //         { value: 2, name: '云杉林' },
    //         { value: 56, name: '柞树林' },
    //         { value: 2, name: '樟子松 ' },
    //         { value: 77, name: ' 针阔混' },
    //         { value: 4, name: ' 针叶混' },
    //       ],
    //       emphasis: {
    //         itemStyle: {
    //           shadowBlur: 10,
    //           shadowOffsetX: 0,
    //           shadowColor: 'rgba(0, 0, 0, 0.8)'
    //         }
    //       }
    //     }
    //   ]
    // };
    // echarts.init(document.getElementById('JiAnSpeciesEchart')).setOption(JiAnSpeciesOption);


    //识别园参地块数分析
    var analysisGardenAmountOption = {
        title: {
            text: '识别园参地块数分析'
            , textStyle: {
                fontSize: 20,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'

        },
        tooltip: {},
        legend: {
            data: ['数目']
        },
        xAxis: {
            data: ["东昌区 ", "辉南县", "集安市", "二江道区", "柳河县", "通化县",],
            axisLabel: {
                // formatter: function (value) {
                //   var ret = "";//拼接加\n返回的类目项  
                //   var maxLength = 1;//每项显示文字个数  
                //   var valLength = value.length;//X轴类目项的文字个数  
                //   var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
                //   if (rowN > 1)//如果类目项的文字大于5,  
                //   {
                //     for (var i = 0; i < rowN; i++) {
                //       var temp = "";//每次截取的字符串  
                //       var start = i * maxLength;//开始截取的位置  
                //       var end = start + maxLength;//结束截取的位置  
                //       //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                //       temp = value.substring(start, end) + "\n";
                //       ret += temp; //凭借最终的字符串  
                //     }
                //     return ret;
                //   }
                //   else {
                //     return value;
                //   }
                // },
                show: true,
                textStyle: {
                    color: '#ffffff'
                },
                interval: 0,
            }
        },
        yAxis: {},
        series: [
            {
                name: '识别园参地块数',
                type: 'bar',
                data: [104, 70, 2438, 55, 487, 2359],
                itemStyle: {
                    normal: {
                        color: '#feb883'
                    }
                }

            }
        ]
    };
    echarts.init(document.getElementById('analysisGardenAmountEchart')).setOption(analysisGardenAmountOption);


    //识别园参种植面积占比分析
    var analysisGardenAreaOption = {
        title: {
            text: '识别园参种植面积占比分析',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff',//字体颜色
            }
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 728.567005645752, name: '东昌区' },
                    { value: 2790.06410009766, name: '辉南县' },
                    { value: 18304.5723174362, name: '集安市' },
                    { value: 816.169234725952, name: '二江道区' },
                    { value: 8612.67249659728, name: ' 柳河县' },
                    { value: 22348.2220658341, name: '通化县' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 14,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    echarts.init(document.getElementById('analysisGardenAreaEchart')).setOption(analysisGardenAreaOption);




    TongHuaSuitableAreaPieOption = {
        title: {
            text: '通化市宜参地面积',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }, show: false
        },
        color: [color1, color2],
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: [

            ]
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: ['40%', '65%'],
                data: [
                    { value: 91.38, name: '林下参' },
                    { value: 10.75, name: '园参', label: { color: "#2a2626" } },

                ], label: {
                    position: 'inner',
                    fontSize: 14,
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    TongHuaSuitableAreaPieEchart = echarts.init(document.getElementById('TongHuaSuitableAreaPieEchart'));
    TongHuaSuitableAreaPieEchart.setOption(TongHuaSuitableAreaPieOption);
    TongHuaSuitableAreaPieEchart.on('click', function (params) {
        if (showSuitableArea) {
            switch (params.name) {
                case '林下参':

                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/林下参.geojson') {
                            datasource.show = true
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                entity.show = true;

                            })
                        }
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = false
                        }
                    })


                    break;
                case '园参':

                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                entity.show = true;
                            })
                        }
                        if (datasource._name == 'geojson/林下参.geojson') {
                            datasource.show = false
                        }
                    })

                    break;
            }
            UndoPitch()
            focusEChart = TongHuaSuitableAreaPieEchart;
            if (!focusMode || params.dataIndex + GetEchartOffset('TongHuaSuitableAreaPieEchart') != index) {
                focusEChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: params.dataIndex,
                });
                focusMode = true;
            } else if (focusMode && params.dataIndex + GetEchartOffset('TongHuaSuitableAreaPieEchart') == index) {
                focusMode = false;

                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.show = true;
                        entities = datasource.entities.values;
                        entities.forEach(entity => {
                            entity.show = true;
                        })
                    }
                    if (datasource._name == 'geojson/园参.geojson') {
                        datasource.show = true;
                        entities = datasource.entities.values;
                        entities.forEach(entity => {
                            entity.show = true;
                        })
                    }
                })

            }
            index = params.dataIndex + GetEchartOffset('TongHuaSuitableAreaPieEchart');

        }


    });

    TongHuaPlantedAreaPieOption = {
        title: {
            text: '通化市已种植面积',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }, show: false
        },
        color: [color1, color2],
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: [

            ]
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: ['40%', '65%'],
                data: [
                    { value: 30.59, name: '林下参' },
                    { value: 6.85, name: '园参', label: { color: "#2a2626" } },

                ], label: {
                    position: 'inner',
                    fontSize: 14,
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    TongHuaPlantedAreaPieEchart = echarts.init(document.getElementById('TongHuaPlantedAreaPieEchart'));
    TongHuaPlantedAreaPieEchart.setOption(TongHuaPlantedAreaPieOption);
    TongHuaPlantedAreaPieEchart.on('click', function (params) {
        if (showPlantedArea) {
            switch (params.name) {
                case '林下参':

                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/林下参.geojson') {
                            datasource.show = true
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.种植 == '已种植') {
                                        entity.show = true;
                                    }
                                } catch { }
                            })
                        }
                        if ( datasource._name == 'geojson/园参.geojson') {
                            datasource.show = params.dataIndex + GetEchartOffset('TongHuaPlantedAreaPieEchart') == index ? !datasource.show : false
                        }
                    })

                    break;
                case '园参':

                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.种植 == '已种植') {
                                        entity.show = true;
                                    }

                                } catch { }
                            })
                        }
                        if (datasource._name == 'geojson/林下参.geojson') {
                            datasource.show = params.dataIndex + GetEchartOffset('TongHuaPlantedAreaPieEchart') == index ? !datasource.show : false
                        }
                    })

                    break;
            }
            UndoPitch()
            focusEChart = TongHuaPlantedAreaPieEchart;
            if (!focusMode || params.dataIndex + GetEchartOffset('TongHuaPlantedAreaPieEchart') != index) {
                focusEChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: params.dataIndex,
                });
                focusMode = true;
            } else if (focusMode && params.dataIndex + GetEchartOffset('TongHuaPlantedAreaPieEchart') == index) {
                focusMode = false;

                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.show = true
                        entities = datasource.entities.values;
                        entities.forEach(entity => {
                            try {
                                if (entity.properties.种植 == '已种植') {
                                    entity.show = true;
                                }
                            } catch { }

                        })
                    }
                    if (datasource._name == 'geojson/园参.geojson') {
                        datasource.show = true
                        entities = datasource.entities.values;
                        entities.forEach(entity => {
                            try {
                                if (entity.properties.种植 == '已种植') {
                                    entity.show = true;
                                }
                            } catch { }
                        })
                    }
                })

            }
            index = params.dataIndex + GetEchartOffset('TongHuaPlantedAreaPieEchart');

        }
    })


    TongHuaUnplantedAreaPieOption = {
        title: {
            text: '通化市未种植面积',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }, show: false
        },
        color: [color1, color2],
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: [

            ]
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: ['40%', '65%'],
                data: [
                    { value: 60.79, name: '林下参' },
                    { value: 3.9, name: '园参', label: { color: "#2a2626" } },

                ], label: {
                    position: 'inner',
                    fontSize: 14,
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    TongHuaUnplantedAreaPieEchart = echarts.init(document.getElementById('TongHuaUnplantedAreaPieEchart'));
    TongHuaUnplantedAreaPieEchart.setOption(TongHuaUnplantedAreaPieOption);
    TongHuaUnplantedAreaPieEchart.on('click', function (params) {
        if (showUnplantedArea) {
            switch (params.name) {
                case '林下参':

                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/林下参.geojson') {
                            datasource.show = true
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.种植 == '未种植') {
                                        entity.show = true;
                                    }
                                } catch { }
                            })
                        }
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = params.dataIndex + GetEchartOffset('TongHuaPlantedAreaPieEchart') == index ? !datasource.show : false
                        }
                    })

                    break;
                case '园参':

                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.种植 == '未种植') {
                                        entity.show = true;
                                    }
                                } catch { }
                            })
                        }
                        if (datasource._name == 'geojson/林下参.geojson') {
                            datasource.show = params.dataIndex + GetEchartOffset('TongHuaPlantedAreaPieEchart') == index ? !datasource.show : false
                        }
                    })

                    break;

            }
            UndoPitch()
            focusEChart = TongHuaUnplantedAreaPieEchart;
            if (!focusMode || params.dataIndex + GetEchartOffset('TongHuaUnplantedAreaPieEchart') != index) {
                focusEChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: params.dataIndex,
                });
                focusMode = true;
            } else if (focusMode && params.dataIndex + GetEchartOffset('TongHuaUnplantedAreaPieEchart') == index) {
                focusMode = false;
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/林下参.geojson') {
                        datasource.show = true
                        entities = datasource.entities.values;
                        entities.forEach(entity => {
                            try {
                                if (entity.properties.种植 == '未种植') {
                                    entity.show = true;
                                }
                            } catch { }

                        })
                    }
                    if (datasource._name == 'geojson/园参.geojson') {
                        datasource.show = true
                        entities = datasource.entities.values;
                        entities.forEach(entity => {
                            try {
                                if (entity.properties.种植 == '未种植') {
                                    entity.show = true;
                                }
                            } catch { }
                        })
                    }
                })
            }
            index = params.dataIndex + GetEchartOffset('TongHuaUnplantedAreaPieEchart');
        }
    })

    //通化市林下参已种植面积分析
    var TongHuaForestPlantedOption = {
        title: {
            text: '通化市已种植面积合计:39.05万亩 \n 林下参：30.66万亩 \n 园参：8.39万亩'
            , textStyle: {
                fontSize: 10,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        grid: {
            left: '6%',
            right: '8%',
            bottom: '10%',
            top: '20%',
            containLabel: true
        },
        xAxis: {
            data: ["集安市", "辉南县", "通化城区", "柳河县", "通化县"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(12)
                },
                interval: 0,
            }
        },
        yAxis: [{
            name: '(万亩)',
            type: 'value',
            nameTextStyle: {
                color: "#ffffff",
                fontSize: fontSize(12),

                // padding:10
                padding: [0, 0, 0, -20]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(10)
                },
                interval: 0,
            }, splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }

        }],
        series: [
            {
                name: '林下参',
                type: 'bar',
                data: [15.8113, 1.1969, 1.0656, 3.9181, 8.2267],

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '25%',

            }
        ]
        // ,grid:{
        //   top:"15%",
        //   left:"2%",
        //   right:"2%",
        //   bottom:"2%",
        //   containLabel:true
        // }
    };
    TongHuaForestPlantedEchart = echarts.init(document.getElementById('TongHuaForestPlantedEchart'));
    TongHuaForestPlantedEchart.setOption(TongHuaForestPlantedOption);


    //通化市林下参未种植面积
    var TongHuaForsetUnplantedAreaOption = {
        title: {
            text: '通化市未种植面积合计:58.90万亩 \n 林下参：54.63万亩 \n 园参：4.27万亩'
            , textStyle: {
                fontSize: 10,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , show: false
        },

        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        grid: {
            left: '6%',
            right: '8%',
            bottom: '10%',
            top: '20%',
            containLabel: true
        },
        xAxis: {
            data: ["集安市", "辉南县", "通化城区", "柳河县", "通化县"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(12)
                },
                interval: 0,
            }
        },
        yAxis: [{
            name: '(万亩)',
            type: 'value',
            nameTextStyle: {
                color: "#ffffff",
                fontSize: fontSize(12),

                // padding:10
                padding: [0, 0, 0, -20]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(10)
                },
                interval: 0,
            }, splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }

        }],
        series: [
            {
                name: '林下参',
                type: 'bar',
                data: [4.6755, 7.6062, 5.7176, 3.3991, 9.2733],

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '25%',

            }
        ]
    }
    TongHuaForestUnplantedAreaEchart = echarts.init(document.getElementById('TongHuaForestUnplantedAreaEchart'));
    TongHuaForestUnplantedAreaEchart.setOption(TongHuaForsetUnplantedAreaOption);


    //柳河县园参参龄
    var LiuHeRenShenAgeOption = {
        title: {
            text: '柳河县园参参龄',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}  {c} 亩 {d}%',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 181.8716192, name: '一年参' },
                    { value: 2266.515069, name: '两年参' },
                    { value: 3512.006765, name: '三年参' },
                    { value: 1015.911784, name: '四年参' },
                    { value: 313.136463, name: '五年参' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    LiuHeRenShenAgeEchart = echarts.init(document.getElementById('LiuHeRenShenAgeEchart'), 'infographic');
    LiuHeRenShenAgeEchart.setOption(LiuHeRenShenAgeOption);
    LiuHeRenShenAgeEchart.on('click', function (params) {
        let gardenShenAge = 0;
        switch (params.name) {
            case '一年参':
                gardenShenAge = 1
                break;
            case '两年参':
                gardenShenAge = 2
                break;
            case '三年参':
                gardenShenAge = 3
                break;
            case '四年参':
                gardenShenAge = 4
                break;
            case '五年参':
                gardenShenAge = 5
                break;
        }


        focusEChart = LiuHeRenShenAgeEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('LiuHeRenShenAgeEchart') != index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.参龄 == gardenShenAge) {
                                entity.show = true;
                            } else {
                                entity.show = false;
                            }

                        }
                        catch { }
                    });
                }
            })
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('LiuHeRenShenAgeEchart') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = tru
                    });
                }
            })
            UndoPitch()
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('LiuHeRenShenAgeEchart');
    });

    //柳河县园参种植情况
    var LiuHeRenShenAreaOption = {
        title: {
            text: '柳河县园参参龄',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 5869.507986, name: '未种植' },
                    { value: 506.175236, name: '休耕1年' },
                    { value: 254.3670665, name: '休耕2年' },
                    { value: 34.7733042, name: '休耕3年' },
                    { value: 156.366549, name: '休耕4年' },
                    { value: 7289.441701, name: '已种植' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    }
    LiuHeRenShenAreaEchart = echarts.init(document.getElementById('LiuHeRenShenAreaEchart'), 'infographic');
    LiuHeRenShenAreaEchart.setOption(LiuHeRenShenAreaOption);
    LiuHeRenShenAreaEchart.on('click', function (params) {
        switch (params.name) {
            case '未种植':
                console.log(11111111111111)
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "未种植") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕1年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕1年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕2年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕2年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕3年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕3年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕4年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕4年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '已种植':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "已种植") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
        }
        UndoPitch()
        focusEChart = LiuHeRenShenAreaEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('LiuHeRenShenAreaEchart') != index) {
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('LiuHeRenShenAreaEchart') == index) {
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('LiuHeRenShenAreaEchart');
    });

    //通化县园参参龄
    var TongHuaRenShenAgeOption = {
        title: {
            text: '通化县园参参龄',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}  {c} 亩 {d}%',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 1313.444176, name: '一年参' },
                    { value: 7396.328414, name: '两年参' },
                    { value: 6127.932984, name: '三年参' },
                    { value: 3585.639277, name: '四年参' },
                    { value: 425.4664356, name: '五年参' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    TongHuaRenShenAgeEchart = echarts.init(document.getElementById('TongHuaRenShenAgeEchart'), 'infographic');
    TongHuaRenShenAgeEchart.setOption(TongHuaRenShenAgeOption);
    TongHuaRenShenAgeEchart.on('click', function (params) {
        let gardenShenAge = 0;
        switch (params.name) {
            case '一年参':
                gardenShenAge = 1
                break;
            case '两年参':
                gardenShenAge = 2
                break;
            case '三年参':
                gardenShenAge = 3
                break;
            case '四年参':
                gardenShenAge = 4
                break;
            case '五年参':
                gardenShenAge = 5
                break;
        }


        focusEChart = TongHuaRenShenAgeEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('TongHuaRenShenAgeEchart') != index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.参龄 == gardenShenAge) {
                                entity.show = true;
                            } else {
                                entity.show = false;
                            }

                        }
                        catch { }
                    });
                }
            })
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('TongHuaRenShenAgeEchart') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = tru
                    });
                }
            })
            UndoPitch()
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('TongHuaRenShenAgeEchart');
    });


    var TongHuaRenShenAreaOption = {
        title: {
            text: '柳河县园参参龄',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 2007.144743, name: '未种植' },
                    { value: 215.9083089, name: '休耕1年' },
                    { value: 403.5968044, name: '休耕2年' },
                    { value: 167.8589414, name: '休耕3年' },
                    { value: 23.92331743, name: '休耕4年' },
                    { value: 18853.99345, name: '已种植' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    }
    TongHuaRenShenAreaEchart = echarts.init(document.getElementById('TongHuaRenShenAreaEchart'), 'infographic');
    TongHuaRenShenAreaEchart.setOption(TongHuaRenShenAreaOption);
    TongHuaRenShenAreaEchart.on('click', function (params) {
        switch (params.name) {
            case '未种植':
                console.log(11111111111111)
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "未种植") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕1年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕1年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕2年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕2年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕3年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕3年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕4年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕4年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '已种植':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "已种植") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
        }
        UndoPitch()
        focusEChart = TongHuaRenShenAreaEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('TongHuaRenShenAreaEchart') != index) {
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('TongHuaRenShenAreaEchart') == index) {
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('TongHuaRenShenAreaEchart');
    });

    var ErDaoJiangRenShenAgeOption = {
        title: {
            text: '二道江区园参参龄',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}  {c} 亩 {d}%',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 21.11892976, name: '一年参' },
                    { value: 160.7138682, name: '两年参' },
                    { value: 179.6878915, name: '三年参' },

                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    ErDaoJiangRenShenAgeEchart = echarts.init(document.getElementById('ErDaoJiangRenShenAgeEchart'), 'infographic');
    ErDaoJiangRenShenAgeEchart.setOption(ErDaoJiangRenShenAgeOption);
    ErDaoJiangRenShenAgeEchart.on('click', function (params) {
        let gardenShenAge = 0;
        switch (params.name) {
            case '一年参':
                gardenShenAge = 1
                break;
            case '两年参':
                gardenShenAge = 2
                break;
            case '三年参':
                gardenShenAge = 3
                break;
            case '四年参':
                gardenShenAge = 4
                break;
            case '五年参':
                gardenShenAge = 5
                break;
        }


        focusEChart = ErDaoJiangRenShenAgeEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('ErDaoJiangRenShenAgeEchart') != index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.参龄 == gardenShenAge) {
                                entity.show = true;
                            } else {
                                entity.show = false;
                            }

                        }
                        catch { }
                    });
                }
            })
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('ErDaoJiangRenShenAgeEchart') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = tru
                    });
                }
            })
            UndoPitch()
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('ErDaoJiangRenShenAgeEchart');
    });


    var ErDaoJiangRenShenAreaOption = {
        title: {
            text: '二道江区园参参龄',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 276.1664964, name: '未种植' },
                    { value: 23.64999953, name: '休耕1年' },
                    { value: 58.36776311, name: '休耕2年' },
                    { value: 361.5206895, name: '已种植' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    }
    ErDaoJiangRenShenAreaEchart = echarts.init(document.getElementById('ErDaoJiangRenShenAreaEchart'), 'infographic');
    ErDaoJiangRenShenAreaEchart.setOption(ErDaoJiangRenShenAreaOption);
    ErDaoJiangRenShenAreaEchart.on('click', function (params) {
        switch (params.name) {
            case '未种植':
                console.log(11111111111111)
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "未种植") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕1年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕1年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕2年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕2年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕3年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕3年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕4年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕4年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '已种植':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "已种植") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
        }
        UndoPitch()
        focusEChart = ErDaoJiangRenShenAreaEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('ErDaoJiangRenShenAreaEchart') != index) {
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('ErDaoJiangRenShenAreaEchart') == index) {
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('ErDaoJiangRenShenAreaEchart');
    });

    var DongChangRenShenAgeOption = {
        title: {
            text: '东昌区园参参龄',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}  {c} 亩 {d}%',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 34.81731858, name: '一年参' },
                    { value: 100.1468589, name: '两年参' },
                    { value: 37.15828914, name: '四年参' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    DongChangRenShenAgeEchart = echarts.init(document.getElementById('DongChangRenShenAgeEchart'), 'infographic');
    DongChangRenShenAgeEchart.setOption(DongChangRenShenAgeOption);
    DongChangRenShenAgeEchart.on('click', function (params) {
        let gardenShenAge = 0;
        switch (params.name) {
            case '一年参':
                gardenShenAge = 1
                break;
            case '两年参':
                gardenShenAge = 2
                break;
            case '三年参':
                gardenShenAge = 3
                break;
            case '四年参':
                gardenShenAge = 4
                break;
            case '五年参':
                gardenShenAge = 5
                break;
        }


        focusEChart = DongChangRenShenAgeEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('DongChangRenShenAgeEchart') != index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.参龄 == gardenShenAge) {
                                entity.show = true;
                            } else {
                                entity.show = false;
                            }

                        }
                        catch { }
                    });
                }
            })
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('DongChangRenShenAgeEchart') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = tru
                    });
                }
            })
            UndoPitch()
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('DongChangRenShenAgeEchart');
    });


    var DongChangRenShenAreaOption = {
        title: {
            text: '东昌区园参种植情况',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 1976.963098, name: '未种植' },
                    { value: 31.40583803, name: '休耕1年' },
                    { value: 172.1224666, name: '已种植' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    }
    DongChangRenShenAreaEchart = echarts.init(document.getElementById('DongChangRenShenAreaEchart'), 'infographic');
    DongChangRenShenAreaEchart.setOption(DongChangRenShenAreaOption);
    DongChangRenShenAreaEchart.on('click', function (params) {
        switch (params.name) {
            case '未种植':
                console.log(11111111111111)
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "未种植") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕1年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕1年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕2年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕2年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕3年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕3年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕4年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕4年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '已种植':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "已种植") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
        }
        UndoPitch()
        focusEChart = DongChangRenShenAreaEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('DongChangRenShenAreaEchart') != index) {
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('DongChangRenShenAreaEchart') == index) {
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('DongChangRenShenAreaEchart');
    });

    var HuiNanRenShenAgeOption = {
        title: {
            text: '辉南县园参参龄',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}  {c} 亩 {d}%',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 332.1964049, name: '一年参' },
                    { value: 273.371206, name: '两年参' },
                    { value: 898.4172394, name: '三年参' },
                    { value: 1931.065772, name: '四年参' },
                    { value: 35.63860353, name: '五年参' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    };
    HuiNanRenShenAgeEchart = echarts.init(document.getElementById('HuiNanRenShenAgeEchart'), 'infographic');
    HuiNanRenShenAgeEchart.setOption(HuiNanRenShenAgeOption);
    HuiNanRenShenAgeEchart.on('click', function (params) {
        let gardenShenAge = 0;
        switch (params.name) {
            case '一年参':
                gardenShenAge = 1
                break;
            case '两年参':
                gardenShenAge = 2
                break;
            case '三年参':
                gardenShenAge = 3
                break;
            case '四年参':
                gardenShenAge = 4
                break;
            case '五年参':
                gardenShenAge = 5
                break;
        }


        focusEChart = HuiNanRenShenAgeEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('HuiNanRenShenAgeEchart') != index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.参龄 == gardenShenAge) {
                                entity.show = true;
                            } else {
                                entity.show = false;
                            }

                        }
                        catch { }
                    });
                }
            })
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('HuiNanRenShenAgeEchart') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = tru
                    });
                }
            })
            UndoPitch()
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('HuiNanRenShenAgeEchart');
    });


    var HuiNanRenShenAreaOption = {
        title: {
            text: '辉南县园参种植情况',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            },
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 1332.973246, name: '未种植' },
                    { value: 124.4625757, name: '休耕1年' },
                    { value: 60.54689409, name: '休耕2年' },
                    { value: 1.332726811, name: '休耕3年' },
                    { value: 3470.689226, name: '已种植' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        ]
    }
    HuiNanRenShenAreaEchart = echarts.init(document.getElementById('HuiNanRenShenAreaEchart'), 'infographic');
    HuiNanRenShenAreaEchart.setOption(HuiNanRenShenAreaOption);
    HuiNanRenShenAreaEchart.on('click', function (params) {
        switch (params.name) {
            case '未种植':
                console.log(11111111111111)
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "未种植") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕1年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕1年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕2年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕2年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕3年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕3年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '休耕4年':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "休耕4年") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
            case '已种植':
                viewer0.dataSources._dataSources.forEach(datasource => {
                    if (datasource._name == 'geojson/柳河县园参.geojson') {
                        datasource.entities._entities._array.forEach(entity => {
                            try {
                                if (entity.properties.种植 == "已种植") {
                                    entity.show = true;
                                } else {
                                    entity.show = !entity.show;
                                }
                            }
                            catch { }
                        });
                    }
                })
                break;
        }
        UndoPitch()
        focusEChart = LiuHeRenShenAreaEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('LiuHeRenShenAreaEchart') != index) {
            focusEChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('LiuHeRenShenAreaEchart') == index) {
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('LiuHeRenShenAreaEchart');
    });



    var TempBarEchartOption_1 = {
        title: {
            text: ''
            , textStyle: {
                fontSize: 10,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: fontSize(30),
            containLabel: true
        },
        legend: {
            top: 0,
            left: fontSize(40),
            icon: "circle", // 修改形状     
            itemHeight: 6, // 修改icon图形大小
            itemGap: 24, // 修改间距
            textStyle: {
                fontSize: fontSize(10),
                color: "#ffffff",
                padding: [0, 0, 0, -8], // 修改文字和图标距离
            },
        },
        xAxis: {
            data: ["宜参地", "已种植", "未种植",],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(10)
                },
                interval: 0,
            }
        },
        yAxis: [{
            type: 'value',

            nameTextStyle: {
                color: "#ffffff",

                // fontSize:16,

                // padding:10
                padding: [0, 0, 0, -20]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(12)
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }

        }],
        series: [
            {
                name: '林下参',
                type: 'bar',
                data: [36.39, 15.91, 20.48],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '20%',

            }, {
                name: '园参',
                type: 'bar',
                data: [2.66, 1.56, 1.1],

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FFEA00' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#F7C61A' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#EEA522' // 100% 处的颜色 
                            }
                        ]
                    }

                }, barWidth: '20%',

            }
        ]
    };
    TempBarEchart_1 = echarts.init(document.getElementById('TempBarEchart_1'));
    TempBarEchart_1.setOption(TempBarEchartOption_1);
    TempBarEchart_1.on('click', function (params) {

    });

    var TempPieEchartOption_1 = {
        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },

        legend: {
            orient: 'vertical',
            right: 0,
            itemHeight: fontSize(10),
            itemWidth: fontSize(10),
            icon: 'circle',
            textStyle: {
                color: '#ffffff',
                fontSize: fontSize(12)
            },

            formatter: function (params) {
                return params;
            }
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '35%',
                center: ['40%', '50%'],
                color: [color1, '#3fe356'],
                data: [
                    { value: 36.39, name: '林下参' },
                    { value: 2.66, name: '园参' },
                ],
                label: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: '{b} {d}%',
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }

            },
            {
                name: 'Access From',
                type: 'pie',
                radius: ['55%', '75%'],
                center: ['40%', '50%'],
                label: {
                    position: 'inner',
                    fontSize: 10,
                    show: false
                },
                color: ['#FF7200', '#B954FF', '#00DEA6'],
                data: [
                    { value: 39.05, name: '宜参地' },
                    { value: 17.47, name: '已种植' },
                    { value: 22.58, name: '未种植' },
                ]
            }
        ]
    };
    TempPieEchart_1 = echarts.init(document.getElementById('TempPieEchart_1'));
    TempPieEchart_1.setOption(TempPieEchartOption_1);


    var TempBarEchartOption_2 = {
        title: {
            text: ''
            , textStyle: {
                fontSize: 10,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: fontSize(30),
            containLabel: true
        },
        legend: {
            top: 0,
            left: fontSize(40),
            icon: "circle", // 修改形状     
            itemHeight: 6, // 修改icon图形大小
            itemGap: 24, // 修改间距
            textStyle: {
                fontSize: fontSize(10),
                color: "#ffffff",
                padding: [0, 0, 0, -8], // 修改文字和图标距离
            },
        },
        xAxis: {
            data: ["宜参地", "已种植", "未种植",],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(10)
                },
                interval: 0,
            }
        },
        yAxis: [{

            type: 'value',
            nameTextStyle: {
                color: "#ffffff",

                // fontSize:16,

                // padding:10
                padding: [0, 0, 0, -20]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(12)
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }
        }],
        series: [
            {
                name: '林下参',
                type: 'bar',
                data: [9.99, 1.19, 8.8],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '20%',

            }, {
                name: '园参',
                type: 'bar',
                data: [1.69, 1.34, 0.35],

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FFEA00' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#F7C61A' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#EEA522' // 100% 处的颜色 
                            }
                        ]
                    }
                }, barWidth: '20%',

            }
        ]
    };
    TempBarEchart_2 = echarts.init(document.getElementById('TempBarEchart_2'));
    TempBarEchart_2.setOption(TempBarEchartOption_2);
    TempBarEchart_2.on('click', function (params) {

    });

    var TempPieEchartOption_2 = {
        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            right: 0,
            itemHeight: fontSize(10),
            itemWidth: fontSize(10),
            icon: 'circle',
            textStyle: {
                color: '#ffffff',
                fontSize: fontSize(12)
            },

            formatter: function (params) {
                return params;
            }
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '35%',
                center: ['40%', '50%'],
                color: [color1, '#3fe356'],
                data: [
                    { value: 9.99, name: '林下参' },
                    { value: 1.69, name: '园参' },
                ],
                label: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: '{b} {d}%',
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }

            },
            {
                name: 'Access From',
                type: 'pie',
                radius: ['55%', '75%'],
                center: ['40%', '50%'],
                label: {
                    position: 'inner',
                    fontSize: 10,
                    show: false
                },
                color: ['#FF7200', '#B954FF', '#00DEA6'],
                data: [
                    { value: 11.68, name: '宜参地' },
                    { value: 2.53, name: '已种植' },
                    { value: 9.15, name: '未种植' },
                ]
            }
        ]
    };
    TempPieEchart_2 = echarts.init(document.getElementById('TempPieEchart_2'));
    TempPieEchart_2.setOption(TempPieEchartOption_2);

    var TempBarEchartOption_3 = {
        title: {
            text: ''
            , textStyle: {
                fontSize: 10,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: fontSize(30),
            containLabel: true
        },
        legend: {
            top: 0,
            left: fontSize(40),
            icon: "circle", // 修改形状     
            itemHeight: 6, // 修改icon图形大小
            itemGap: 24, // 修改间距
            textStyle: {
                fontSize: fontSize(10),
                color: "#ffffff",
                padding: [0, 0, 0, -8], // 修改文字和图标距离
            },
        },
        xAxis: {
            data: ["宜参地", "已种植", "未种植",],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(10)
                },
                interval: 0,
            }
        },
        yAxis: [{

            type: 'value',
            nameTextStyle: {
                color: "#ffffff",

                // fontSize:16,

                // padding:10
                padding: [0, 0, 0, -20]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(12)
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }

        }],
        series: [
            {
                name: '林下参',
                type: 'bar',
                data: [8.04, 1.34, 6.70],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '20%',

            }, {
                name: '园参',
                type: 'bar',
                data: [0.92, 0.55, 0.37],

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FFEA00' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#F7C61A' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#EEA522' // 100% 处的颜色 
                            }
                        ]
                    }

                }, barWidth: '20%',

            }
        ]
    };
    TempBarEchart_3 = echarts.init(document.getElementById('TempBarEchart_3'));
    TempBarEchart_3.setOption(TempBarEchartOption_3);
    TempBarEchart_3.on('click', function (params) {

    });

    var TempPieEchartOption_3 = {
        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            right: 0,
            itemHeight: fontSize(10),
            itemWidth: fontSize(10),
            icon: 'circle',
            textStyle: {
                color: '#ffffff',
                fontSize: fontSize(12)
            },

            formatter: function (params) {
                return params;
            }
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '35%',
                center: ['40%', '50%'],
                color: [color1, '#3fe356'],
                data: [
                    { value: 8.04, name: '林下参' },
                    { value: 0.92, name: '园参' },
                ],
                label: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: '{b} {d}%',
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }

            },
            {
                name: 'Access From',
                type: 'pie',
                radius: ['55%', '75%'],
                center: ['40%', '50%'],
                label: {
                    position: 'inner',
                    fontSize: 10,
                    show: false
                },
                color: ['#FF7200', '#B954FF', '#00DEA6'],
                data: [
                    { value: 8.96, name: '宜参地' },
                    { value: 1.89, name: '已种植' },
                    { value: 7.07, name: '未种植' },
                ]
            }
        ]
    };
    TempPieEchart_3 = echarts.init(document.getElementById('TempPieEchart_3'));
    TempPieEchart_3.setOption(TempPieEchartOption_3);

    var TempBarEchartOption_4 = {
        title: {
            text: ''
            , textStyle: {
                fontSize: 10,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , show: false
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: fontSize(30),
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            top: 0,
            left: fontSize(40),
            icon: "circle", // 修改形状     
            itemHeight: 6, // 修改icon图形大小
            itemGap: 24, // 修改间距
            textStyle: {
                fontSize: fontSize(10),
                color: "#ffffff",
                padding: [0, 0, 0, -8], // 修改文字和图标距离
            },
        },
        xAxis: {
            data: ["宜参地", "已种植", "未种植",],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(10)
                },
                interval: 0,
            }
        },
        yAxis: [{

            type: 'value',
            nameTextStyle: {
                color: "#ffffff",

                // fontSize:16,

                // padding:10
                padding: [0, 0, 0, -20]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(12)
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }

        }],
        series: [
            {
                name: '林下参',
                type: 'bar',
                data: [11.23, 3.92, 7.31],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '20%',

            }, {
                name: '园参',
                type: 'bar',
                data: [2.57, 1.52, 1.05],

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FFEA00' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#F7C61A' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#EEA522' // 100% 处的颜色 
                            }
                        ]
                    }

                }, barWidth: '20%',

            }
        ]
    };
    TempBarEchart_4 = echarts.init(document.getElementById('TempBarEchart_4'));
    TempBarEchart_4.setOption(TempBarEchartOption_4);
    TempBarEchart_4.on('click', function (params) {

    });

    var TempPieEchartOption_4 = {
        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            right: 0,
            itemHeight: fontSize(10),
            itemWidth: fontSize(10),
            icon: 'circle',
            textStyle: {
                color: '#ffffff',
                fontSize: fontSize(12)
            },

            formatter: function (params) {
                return params;
            }
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '35%',
                center: ['40%', '50%'],
                color: [color1, '#3fe356'],
                data: [
                    { value: 11.23, name: '林下参' },
                    { value: 2.57, name: '园参' },
                ],
                label: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: '{b} {d}%',
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }

            },
            {
                name: 'Access From',
                type: 'pie',
                radius: ['55%', '75%'],
                center: ['40%', '50%'],
                label: {
                    position: 'inner',
                    fontSize: 10,
                    show: false
                },
                color: ['#FF7200', '#B954FF', '#00DEA6'],
                data: [
                    { value: 13.80, name: '宜参地' },
                    { value: 5.44, name: '已种植' },
                    { value: 8.36, name: '未种植' },
                ]
            }
        ]
    };
    TempPieEchart_4 = echarts.init(document.getElementById('TempPieEchart_4'));
    TempPieEchart_4.setOption(TempPieEchartOption_4);

    var TempBarEchartOption_5 = {
        title: {
            text: ''
            , textStyle: {
                fontSize: 10,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , show: false
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: fontSize(30),
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            top: 0,
            left: fontSize(40),
            icon: "circle", // 修改形状     
            itemHeight: 6, // 修改icon图形大小
            itemGap: 24, // 修改间距
            textStyle: {
                fontSize: fontSize(10),
                color: "#ffffff",
                padding: [0, 0, 0, -8], // 修改文字和图标距离
            },
        },
        xAxis: {
            data: ["宜参地", "已种植", "未种植",],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(10)
                },
                interval: 0,
            }
        },
        yAxis: [{

            type: 'value',
            nameTextStyle: {
                color: "#ffffff",

                // fontSize:16,

                // padding:10
                padding: [0, 0, 0, -20]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: fontSize(12)
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }

        }],
        series: [
            {
                name: '林下参',
                type: 'bar',
                data: [25.73, 8.23, 17.5],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '20%',

            }, {
                name: '园参',
                type: 'bar',
                data: [2.91, 1.88, 1.03],

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FFEA00' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#F7C61A' // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#EEA522' // 100% 处的颜色 
                            }
                        ]
                    }

                }, barWidth: '20%',

            }
        ]
    };
    TempBarEchart_5 = echarts.init(document.getElementById('TempBarEchart_5'));
    TempBarEchart_5.setOption(TempBarEchartOption_5);
    TempBarEchart_5.on('click', function (params) {

    });

    var TempPieEchartOption_5 = {
        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#b7ddef',//字体颜色
            }
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 万亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            orient: 'vertical',
            right: 0,
            itemHeight: fontSize(10),
            itemWidth: fontSize(10),
            icon: 'circle',
            textStyle: {
                color: '#ffffff',
                fontSize: fontSize(12)
            },

            formatter: function (params) {
                return params;
            }
        },
        series: [
            {
                name: '占比',
                type: 'pie',
                radius: '35%',
                center: ['40%', '50%'],
                color: [color1, '#3fe356'],
                data: [
                    { value: 25.73, name: '林下参' },
                    { value: 2.91, name: '园参' },
                ],
                label: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: '{b} {d}%',
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                }

            },
            {
                name: 'Access From',
                type: 'pie',
                radius: ['55%', '75%'],
                center: ['40%', '50%'],
                label: {
                    position: 'inner',
                    fontSize: 10,
                    show: false
                },
                color: ['#FF7200', '#B954FF', '#00DEA6'],
                data: [
                    { value: 28.64, name: '宜参地' },
                    { value: 10.11, name: '已种植' },
                    { value: 18.53, name: '未种植' },
                ]
            }
        ]
    };
    TempPieEchart_5 = echarts.init(document.getElementById('TempPieEchart_5'));
    TempPieEchart_5.setOption(TempPieEchartOption_5);


    //未来五年可种宜参地
    var FurtureSuitablePlantOption = {
        title: {
            text: '未来五年可种宜参地'
            , textStyle: {
                fontSize: 20,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , subtext: '亩'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        grid: {
            top: '20%',
            bottom: '20%',
            left: '6%',
            right: '6%',
            containLabel: true
        },
        // legend: {
        //     data: ['面积'],
        //     orient: 'vertical',
        //     left: 'left',
        //     textStyle: {
        //         color: '#ffffff',
        //         fontSize: '10'
        //     },
        // },
        xAxis: {
            data: ["2025年", "2026年", "2027年", "2028年", "2029年"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '10'
                },
                interval: 0,
            }
        },
        yAxis: [{
            name: '(亩)',
            type: 'value',
            nameTextStyle: {
                color: "#ffffff",

                fontSize: fontSize(16),

                // padding:10
                padding: [0, 0, 0, -20]
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '7'
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }
        }],
        series: [
            {
                name: '面积',
                type: 'bar',
                data: [
                    { value: 4041.072809, itemStyle: { color: '#5E0004' } },
                    { value: 2440.671984, itemStyle: { color: '#FF6347' } },
                    { value: 2585.766237, itemStyle: { color: '#F7E14D' } },
                    { value: 1742.002701, itemStyle: { color: '#81CECF' } },
                    { value: 2914.40563, itemStyle: { color: '#8A42C6' } },
                ]
                , barWidth: '25%',
            }
        ]
        // ,grid:{
        //   top:"15%",
        //   left:"2%",
        //   right:"2%",
        //   bottom:"2%",
        //   containLabel:true
        // }
    };
    FurtureSuitablePlantEchart = echarts.init(document.getElementById('FurtureSuitablePlantEchart'));
    FurtureSuitablePlantEchart.setOption(FurtureSuitablePlantOption);
    FurtureSuitablePlantEchart.on('click', function (params) {
        focusEChart = FurtureSuitablePlantEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart') != index) {
            switch (params.name) {
                case '2025年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2025') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                                catch {
                                    if (entity.name == '2025') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                            })
                        }
                    });
                    break;
                case '2026年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2026') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {
                                    if (entity.name == '2026') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }

                            })
                        }
                    });
                    break;
                case '2027年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2027') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                                catch {
                                    if (entity.name == '2027') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }

                            })
                        }
                    });
                    break;
                case '2028年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2028') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {
                                    if (entity.name == '2028') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }

                            })
                        }
                    });
                    break;
                case '2029年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2029') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {
                                    if (entity.name == '2029') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }

                            })
                        }
                    });
                    break;
            }
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = true
                    });
                }
            })
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart');

    });

    //未来五年可种宜参地——集安市
    var FurtureSuitablePlantOption_JiAn = {
        title: {
            text: '未来五年可种宜参地'
            , textStyle: {
                fontSize: 20,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , subtext: '亩'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: ['面积'],
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff',
                fontSize: '10'
            },
        },
        xAxis: {
            data: ["2025年", "2026年", "2027年", "2028年", "2029年"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '10'
                },
                interval: 0,
            }
        },
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '7'
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }
        }],
        series: [
            {
                name: '面积',
                type: 'bar',
                data: [
                    { value: 2946.302244, itemStyle: { color: '#5E0004' } },
                    { value: 1701.885401, itemStyle: { color: '#FF6347' } },
                    { value: 1676.527624, itemStyle: { color: '#F7E14D' } },
                    { value: 368.0566117, itemStyle: { color: '#81CECF' } },
                    { value: 1661.803565, itemStyle: { color: '#8A42C6' } },
                ], barWidth: '25%',
            }
        ]
        // ,grid:{
        //   top:"15%",
        //   left:"2%",
        //   right:"2%",
        //   bottom:"2%",
        //   containLabel:true
        // }
    };
    FurtureSuitablePlantEchart_JiAn = echarts.init(document.getElementById('FurtureSuitablePlantEchart_JiAn'));
    FurtureSuitablePlantEchart_JiAn.setOption(FurtureSuitablePlantOption_JiAn);
    FurtureSuitablePlantEchart_JiAn.on('click', function (params) {

        focusEChart = FurtureSuitablePlantEchart_JiAn;
        if (!focusMode || params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_JiAn') != index) {
            switch (params.name) {
                case '2025年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2025') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                                catch {

                                }
                            })
                        }
                    });
                    break;
                case '2026年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2026') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
                case '2027年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2027') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                                catch {


                                }

                            })
                        }
                    });
                    break;
                case '2028年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2028') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
                case '2029年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2029') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
            }
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_JiAn') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = true
                    });
                }
            })
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_JiAn');

    });

    //未来五年可种宜参地——通化县
    var FurtureSuitablePlantOption_TongHua = {
        title: {
            text: '未来五年可种宜参地'
            , textStyle: {
                fontSize: 20,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , subtext: '亩'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: ['面积'],
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff',
                fontSize: '10'
            },
        },
        xAxis: {
            data: ["2025年", "2026年", "2027年", "2028年", "2029年"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '10'
                },
                interval: 0,
            }
        },
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '7'
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }
        }],
        series: [
            {
                name: '面积',
                type: 'bar',
                data: [
                    { value: 262.3520814, itemStyle: { color: '#5E0004' } },
                    { value: 48.89206227, itemStyle: { color: '#FF6347' } },
                    { value: 130.854493, itemStyle: { color: '#F7E14D' } },
                    { value: 111.0961058, itemStyle: { color: '#81CECF' } },
                    { value: 101.6279394, itemStyle: { color: '#8A42C6' } },
                ], barWidth: '25%',
            }
        ]
        // ,grid:{
        //   top:"15%",
        //   left:"2%",
        //   right:"2%",
        //   bottom:"2%",
        //   containLabel:true
        // }
    };
    FurtureSuitablePlantEchart_TongHua = echarts.init(document.getElementById('FurtureSuitablePlantEchart_TongHua'));
    FurtureSuitablePlantEchart_TongHua.setOption(FurtureSuitablePlantOption_TongHua);
    FurtureSuitablePlantEchart_TongHua.on('click', function (params) {
        focusEChart = FurtureSuitablePlantEchart_TongHua;
        if (!focusMode || params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_TongHua') != index) {
            switch (params.name) {
                case '2025年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2025') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                                catch {

                                }
                            })
                        }
                    });
                    break;
                case '2026年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2026') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
                case '2027年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2027') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                                catch {


                                }

                            })
                        }
                    });
                    break;
                case '2028年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2028') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
                case '2029年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2029') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
            }
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_TongHua') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = true
                    });
                }
            })
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_TongHua');


    });

    //未来五年可种宜参地——辉南县
    var FurtureSuitablePlantOption_HuiNan = {
        title: {
            text: '未来五年可种宜参地'
            , textStyle: {
                fontSize: 20,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , subtext: '亩'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: ['面积'],
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff',
                fontSize: '10'
            },
        },
        xAxis: {
            data: ["2025年", "2026年", "2027年", "2028年", "2029年"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '10'
                },
                interval: 0,
            }
        },
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '7'
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }
        }],
        series: [
            {
                name: '面积',
                type: 'bar',
                data: [
                    { value: 153.1659595, itemStyle: { color: '#5E0004' } },
                    { value: 186.8187669, itemStyle: { color: '#FF6347' } },
                    { value: 229.1836155, itemStyle: { color: '#F7E14D' } },
                    { value: 122.2045313, itemStyle: { color: '#81CECF' } },
                    { value: 35.15433221, itemStyle: { color: '#8A42C6' } },
                ], barWidth: '25%',
            }
        ]
        // ,grid:{
        //   top:"15%",
        //   left:"2%",
        //   right:"2%",
        //   bottom:"2%",
        //   containLabel:true
        // }
    };
    FurtureSuitablePlantEchart_HuiNan = echarts.init(document.getElementById('FurtureSuitablePlantEchart_HuiNan'));
    FurtureSuitablePlantEchart_HuiNan.setOption(FurtureSuitablePlantOption_HuiNan);
    FurtureSuitablePlantEchart_HuiNan.on('click', function (params) {

        focusEChart = FurtureSuitablePlantEchart_HuiNan;
        if (!focusMode || params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_HuiNan') != index) {
            switch (params.name) {
                case '2025年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2025') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                                catch {

                                }
                            })
                        }
                    });
                    break;
                case '2026年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2026') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
                case '2027年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2027') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                                catch {


                                }

                            })
                        }
                    });
                    break;
                case '2028年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2028') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
                case '2029年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2029') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
            }
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_HuiNan') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = true
                    });
                }
            })
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_HuiNan');
    });


    //未来五年可种宜参地——柳河县
    var FurtureSuitablePlantOption_LiuHe = {
        title: {
            text: '未来五年可种宜参地'
            , textStyle: {
                fontSize: 20,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , subtext: '亩'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: ['面积'],
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff',
                fontSize: '10'
            },
        },
        xAxis: {
            data: ["2025年", "2026年", "2027年", "2028年", "2029年"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '10'
                },
                interval: 0,
            }
        },
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '7'
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }
        }],
        series: [
            {
                name: '面积',
                type: 'bar',
                data: [
                    { value: 365.7272368, itemStyle: { color: '#5E0004' } },
                    { value: 380.5159149, itemStyle: { color: '#FF6347' } },
                    { value: 426.2548024, itemStyle: { color: '#F7E14D' } },
                    { value: 656.4169865, itemStyle: { color: '#81CECF' } },
                    { value: 868.7163804, itemStyle: { color: '#8A42C6' } },
                ], barWidth: '25%',
            }
        ]
        // ,grid:{
        //   top:"15%",
        //   left:"2%",
        //   right:"2%",
        //   bottom:"2%",
        //   containLabel:true
        // }
    };
    FurtureSuitablePlantEchart_LiuHe = echarts.init(document.getElementById('FurtureSuitablePlantEchart_LiuHe'));
    FurtureSuitablePlantEchart_LiuHe.setOption(FurtureSuitablePlantOption_LiuHe);
    FurtureSuitablePlantEchart_LiuHe.on('click', function (params) {

        focusEChart = FurtureSuitablePlantEchart_LiuHe;
        if (!focusMode || params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_LiuHe') != index) {
            switch (params.name) {
                case '2025年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2025') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                                catch {

                                }
                            })
                        }
                    });
                    break;
                case '2026年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2026') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
                case '2027年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2027') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                                catch {


                                }

                            })
                        }
                    });
                    break;
                case '2028年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2028') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
                case '2029年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2029') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
            }
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_LiuHe') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = true
                    });
                }
            })
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_LiuHe');
    });


    //未来五年可种宜参地——东昌区
    var FurtureSuitablePlantOption_DongChang = {
        title: {
            text: '未来五年可种宜参地'
            , textStyle: {
                fontSize: 20,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , subtext: '亩'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: ['面积'],
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff',
                fontSize: '10'
            },
        },
        xAxis: {
            data: ["2025年", "2026年", "2028年"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '10'
                },
                interval: 0,
            }
        },
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '7'
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }
        }],
        series: [
            {
                name: '面积',
                type: 'bar',
                data: [313.5252876, 68.32767875, 105.6928872],
                data: [
                    { value: 313.5252876, itemStyle: { color: '#5E0004' } },
                    { value: 68.32767875, itemStyle: { color: '#FF6347' } },
                    { value: 105.6928872, itemStyle: { color: '#81CECF' } },
                ], barWidth: '25%',
            }
        ]
        // ,grid:{
        //   top:"15%",
        //   left:"2%",
        //   right:"2%",
        //   bottom:"2%",
        //   containLabel:true
        // }
    };
    FurtureSuitablePlantEchart_DongChang = echarts.init(document.getElementById('FurtureSuitablePlantEchart_DongChang'));
    FurtureSuitablePlantEchart_DongChang.setOption(FurtureSuitablePlantOption_DongChang);
    FurtureSuitablePlantEchart_DongChang.on('click', function (params) {

        focusEChart = FurtureSuitablePlantEchart_LiuHe;
        if (!focusMode || params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_DongChang') != index) {
            switch (params.name) {
                case '2025年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2025') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                                catch {

                                }
                            })
                        }
                    });
                    break;
                case '2026年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2026') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
                case '2027年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2027') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                }
                                catch {


                                }

                            })
                        }
                    });
                    break;
                case '2028年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2028') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
                case '2029年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            datasource.show = true;
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2029') {
                                        entity.show = true;
                                    } else {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
            }
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_DongChang') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = true
                    });
                }
            })
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_DongChang');
    });




    //未来五年可种宜参地——二道江区
    var FurtureSuitablePlantOption_ErDaoJiang = {
        title: {
            text: '未来五年可种宜参地'
            , textStyle: {
                fontSize: 20,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , subtext: '亩'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        legend: {
            data: ['面积'],
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff',
                fontSize: '10'
            },
        },
        xAxis: {
            data: ["2026年", "2027年", "2028年", "2029年"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '10'
                },
                interval: 0,
            }
        },
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '7'
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }
        }],
        series: [
            {
                name: '面积',
                type: 'bar',
                data: [26.35640531, 122.9457016, 378.5355785, 142.4469545],
                data: [
                    { value: 26.35640531, itemStyle: { color: '#FF6347' } },
                    { value: 122.9457016, itemStyle: { color: '#F7E14D' } },
                    { value: 378.5355785, itemStyle: { color: '#81CECF' } },
                    { value: 142.4469545, itemStyle: { color: '#8A42C6' } },
                ], barWidth: '25%',
            }
        ]
        // ,grid:{
        //   top:"15%",
        //   left:"2%",
        //   right:"2%",
        //   bottom:"2%",
        //   containLabel:true
        // }
    };
    FurtureSuitablePlantEchart_ErDaoJiang = echarts.init(document.getElementById('FurtureSuitablePlantEchart_ErDaoJiang'));
    FurtureSuitablePlantEchart_ErDaoJiang.setOption(FurtureSuitablePlantOption_ErDaoJiang);
    FurtureSuitablePlantEchart_ErDaoJiang.on('click', function (params) {

        focusEChart = FurtureSuitablePlantEchart_LiuHe;
        if (!focusMode || params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_ErDaoJiang') != index) {
            switch (params.name) {
                case '2025年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2025') {
                                        entity.show = true;
                                    } else if (entity.properties.未来 != ' ') {
                                        entity.show = false;
                                    }
                                }
                                catch {

                                }
                            })
                        }
                    });
                    break;
                case '2026年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {

                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2026') {
                                        entity.show = true;
                                    } else if (entity.properties.未来 != ' ') {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
                case '2027年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {

                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2027') {
                                        entity.show = true;
                                    } else if (entity.properties.未来 != ' ') {
                                        entity.show = false;
                                    }
                                }
                                catch {


                                }

                            })
                        }
                    });
                    break;
                case '2028年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2028') {
                                        entity.show = true;
                                    } else if (entity.properties.未来 != ' ') {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
                case '2029年':
                    viewer0.dataSources._dataSources.forEach(datasource => {
                        if (datasource._name == 'geojson/园参.geojson') {
                            entities = datasource.entities.values;
                            entities.forEach(entity => {
                                try {
                                    if (entity.properties.未来 == '2029') {
                                        entity.show = true;
                                    } else if (entity.properties.未来 != ' ') {
                                        entity.show = false;
                                    }
                                } catch {

                                }

                            })
                        }
                    });
                    break;
            }
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_ErDaoJiang') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        if (entity.properties.未来 != ' ') {
                            entity.show = true;
                        }
                    });
                }
            })
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('FurtureSuitablePlantEchart_ErDaoJiang');
    });




    var GardenShenAgeOption = {
        title: {
            text: '园参参龄分析'
            , textStyle: {
                fontSize: 20,//字体大小
                color: '#b7ddef',//字体颜色
            }, left: 'center'
            , subtext: '亩'
            , show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c} 亩',
            textStyle: {                                                // 提示框浮层的文本样式
                color: '#fff',                                          // 文字的颜色
                fontSize: fontSize(12),                                 // 文字的字体大小
            },
        },
        grid: {
            top: '20%',
            bottom: '6%',
            left: '2%',
            right: '6%',
            containLabel: true
        },
        xAxis: {
            data: ["一年参", "两年参", "三年参", "四年参", "五年参"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '10'
                },
                interval: 0,
            }
        },
        yAxis: [{
            name: '(亩)',
            type: 'value',
            nameTextStyle: {
                color: "#ffffff",
                fontSize: fontSize(12),

                // padding:10
                padding: [0, 0, 0, -20]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: '7'
                },
                interval: 0,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#373D53']
                }

            }
        }],
        series: [
            {
                name: '面积',
                type: 'bar',
                data: [{ value: 1883.45, itemStyle: { color: '#5E0004' } },
                { value: 10388.33, itemStyle: { color: '#FF6347' } },
                { value: 10757.88, itemStyle: { color: '#F7E14D' } },
                { value: 6575.76, itemStyle: { color: '#81CECF' } },
                { value: 774.24, itemStyle: { color: '#8A42C6' } }
                ],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,  //右
                        y: 0,  //下
                        x2: 0,  //左
                        y2: 1,  //上
                        colorStops: [
                            {
                                offset: 0,
                                color: '#21FEFC' // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#10AFFE' // 70% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0060FF' // 100% 处的颜色
                            }
                        ]
                    }
                }, barWidth: '25%',
            }
        ]
        // ,grid:{
        //   top:"15%",
        //   left:"2%",
        //   right:"2%",
        //   bottom:"2%",
        //   containLabel:true
        // }
    };
    var GardenShenAgeEchart = echarts.init(document.getElementById('GardenShenAgeEchart'));
    GardenShenAgeEchart.setOption(GardenShenAgeOption);
    GardenShenAgeEchart.on('click', function (params) {
        let gardenShenAge = 0;
        switch (params.name) {
            case '一年参':
                gardenShenAge = 1
                break;
            case '两年参':
                gardenShenAge = 2
                break;
            case '三年参':
                gardenShenAge = 3
                break;
            case '四年参':
                gardenShenAge = 4
                break;
            case '五年参':
                gardenShenAge = 5
                break;
        }


        focusEChart = GardenShenAgeEchart;
        if (!focusMode || params.dataIndex + GetEchartOffset('GardenShenAgeEchart') != index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        try {
                            if (entity.properties.参龄 == gardenShenAge) {
                                entity.show = true;
                            } else {
                                entity.show = false;
                            }

                        }
                        catch { }
                    });
                }
            })
            focusMode = true;
        } else if (focusMode && params.dataIndex + GetEchartOffset('GardenShenAgeEchart') == index) {
            viewer0.dataSources._dataSources.forEach(datasource => {
                if (datasource._name == 'geojson/园参.geojson') {
                    datasource.entities._entities._array.forEach(entity => {
                        entity.show = true
                    });
                }
            })
            focusMode = false;
        }
        index = params.dataIndex + GetEchartOffset('GardenShenAgeEchart');
    })

}

