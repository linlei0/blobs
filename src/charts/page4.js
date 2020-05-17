function chargelong(xAxisData0, yAxisData0, yAxisData01) {
  var option = {
    color: ['#00d2bb9', '#2986ff'],
    tooltip: {
      trigger: 'axis'
    },

    legend: {
      data: ['快充-充电时长', '慢充-充电时长'],
      textStyle: {
        color: ['#00d2bb9', '#2986ff']
      }
    },
    grid: {
      left: '17%'
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        show: true,
        // interval:0,//显示所有X轴值
        fontsize: 4,
        textStyle: {
          color: '#d2d2d5'
        }
      },
      axisLine: {
        color: '#0f3661'
      },
      axisTick: {
        alignWithLabel: true
      },
      data: xAxisData0
    },
    yAxis: {
      type: 'value',
      name: '充电总时长(千小时)',
      axisLine: { // 轴
        show: false,
        lineStyle: {
          color: '#2fc2ff'
        }
      },
      axisTick: { // 刻度线
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#2fc2ff'
        }
      },
      splitLine: { // 网格线
        lineStyle: {
          color: '#1a293f'
        }
      }
    },
    series: [{
      name: '快充-充电时长',
      type: 'line',
      symbol: 'none', // 取消折点圆圈
      itemStyle: {
        normal: {
          color: '#00d2b9'
        }
      },
      data: yAxisData0
    },
    {
      name: '慢充-充电时长',
      type: 'line',
      symbol: 'none', // 取消折点圆圈
      itemStyle: {
        normal: {
          color: '#2986ff'
        }
      },
      data: yAxisData01
    }
    ]
  }
  return option
}
function chargefrequency(xAxisData1, yAxisData1, yAxisData12) {
  var option = {
    color: ['#00d2bb9', '#2986ff'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['快充-充电次数', '慢充-充电次数'],
      textStyle: {
        color: ['#77d200', '#ffbc08']
      }
    },
    grid: {
      left: '19%',
      right: '15%'
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        show: true,
        // interval: 0, // 显示所有X轴值
        fontsize: 4,
        textStyle: {
          color: '#d2d2d5'
        }
      },
      axisLine: {
        color: '#0f3661'
      },
      axisTick: {
        alignWithLabel: true
      },
      data: xAxisData1
    },
    yAxis: {
      type: 'value',
      name: '充电总次数(次)',
      axisLine: { // 轴
        show: false,
        lineStyle: {
          color: '#2fc2ff'
        }
      },
      axisTick: { // 刻度线
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#2fc2ff'
        }
      },
      splitLine: { // 网格线
        lineStyle: {
          color: '#1a293f'
        }
      }
    },
    series: [{
      name: '快充-充电次数',
      type: 'line',
      symbol: 'none', // 取消折点圆圈
      itemStyle: {
        normal: {
          color: '#77d200'
        }
      },
      data: yAxisData1
    },
    {
      name: '慢充-充电次数',
      type: 'line',
      symbol: 'none', // 取消折点圆圈
      itemStyle: {
        normal: {
          color: '#ffbc08'
        }
      },
      data: yAxisData12
    }
    ]
  }
  return option
}
function cartypecharge(yAxisData2, xAxisData21, xAxisData22) {
  var option = {
    color: [{
      type: 'linear',
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0, color: '#0dffe2' // 0% 处的颜色
      }, {
        offset: 1, color: '#4093ff' // 100% 处的颜色
      }],
      globalCoord: false // 缺省为 false
    }, {
      type: 'linear',
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0, color: '#b5ff55' // 0% 处的颜色
      }, {
        offset: 1, color: '#6885fe' // 100% 处的颜色
      }],
      globalCoord: false // 缺省为 false
    }],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    legend: {
      orient: 'vertical',
      x: 'right',
      data: ['日均充电时长(千小时)', '日均充电次数(次)'],
      textStyle: {
        color: '#ffffff'
      }
    },
    grid: {
      left: 50,
      right: 60,
      top: 45,
      bottom: 30
    },
    xAxis: [
      {
        type: 'value',
        boundaryGap: true,
        axisLabel: {
          show: false,
          textStyle: {
            color: '#ffffff'
          }
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#1a293f'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        scale: true,
        data: yAxisData2,
        nameTextStyle: {
          color: '#ffffff'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: true
        },
        axisLabel: {
          textStyle: {
            color: '#c0c7d0'
          }
        }
      }
    ],
    series: [
      {
        name: '日均充电时长(千小时)',
        type: 'bar',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#4093ff'
              }
            },
            barBorderRadius: [0, 5, 5, 0]
            // color: new echarts.graphic.LinearGradient(// itemStyle的color为new echarts.graphic.LinearGradient()线性渐变即可. 这个API在官方文档里面都没找到, 经过测试前四个参数设置为0, 0, 1, 0可以从左到右渐变. 设置为0,0,0,1可以从上到下渐变. 第5个参数数组表示开始的颜色和结束的颜色.
            //   0, 0, 1, 0,
            //   [
            //     { offset: 0, color: '#0dffe2' },
            //     { offset: 1, color: '#4093ff' }
            //   ]
            // )
          }
        },
        data: xAxisData21
      },
      {
        name: '日均充电次数(次)',
        type: 'bar',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#ffc62c'
              }
            },
            barBorderRadius: [0, 5, 5, 0]
            // color: new echarts.graphic.LinearGradient(// itemStyle的color为new echarts.graphic.LinearGradient()线性渐变即可. 这个API在官方文档里面都没找到, 经过测试前四个参数设置为0, 0, 1, 0可以从左到右渐变. 设置为0,0,0,1可以从上到下渐变. 第5个参数数组表示开始的颜色和结束的颜色.
            //   0, 0, 1, 0,
            //   [
            //     { offset: 0, color: '#b5ff55' },
            //     { offset: 1, color: '#ffc62c' }
            //   ]
            // )

          }
        },
        data: xAxisData22
      }
    ]
  }

  return option
}
function startcharge(xAxisData3, yAxisData3, yAxisData31) {
  var option = {
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#21fba6' },
        { offset: 1, color: '#aaff8d' }
      ],
      globalCoord: false // 缺省为 false
    }, {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#31bdf8' },
        { offset: 1, color: '#6984fe' }
      ],
      globalCoord: false // 缺省为 false
    }],
    tooltip: {
      trigger: 'item',
      formatter: '{c}%'
    },
    legend: {
      data: ['上月', '本月'],
      right: '10%',
      textStyle: {
        color: '#ffffff'
      }
    },
    grid: {
      bottom: '20%'
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        show: true,
        interval: 0, // 显示所有X轴值
        fontsize: 4,
        textStyle: {
          color: '#d2d2d5'
        }
      },
      axisLine: {
        color: '#0f3661'
      },
      axisTick: {
        alignWithLabel: true
      },
      data: xAxisData3
    },
    yAxis: {
      type: 'value',
      name: '频次占比(%)',
      axisLine: { // 轴
        show: false,
        lineStyle: {
          color: '#2fc2ff'
        }
      },
      axisTick: { // 刻度线
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#2fc2ff'
        }
      },
      splitLine: { // 网格线
        lineStyle: {
          color: '#1a293f'
        }
      }
    },
    series: [{
      name: '上月',
      type: 'bar',
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]

        }
      },
      data: yAxisData3
    },
    {
      name: '本月',
      type: 'bar',
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]

        }
      },
      data: yAxisData31
    }
    ]
  }
  return option
}
function endcharge(xAxisData4, yAxisData4, yAxisData41) {
  var option = {
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#02c3fa' },
        { offset: 1, color: '#00a9ff' }
      ],
      globalCoord: false // 缺省为 false
    }, {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#21fbda' },
        { offset: 1, color: '#17b8ee' }
      ],
      globalCoord: false // 缺省为 false
    }],
    tooltip: {
      trigger: 'item',
      formatter: '{c}%'
    },
    legend: {
      data: ['上月', '本月'],
      right: '10%',
      textStyle: {
        color: '#ffffff'
      }
    },
    grid: {
      left: '15%',
      bottom: '20%'
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        show: true,
        interval: 0, // 显示所有X轴值
        fontsize: 4,
        textStyle: {
          color: '#d2d2d5'
        }
      },
      axisLine: {
        color: '#0f3661'
      },
      axisTick: {
        alignWithLabel: true
      },
      data: xAxisData4
    },
    yAxis: {
      type: 'value',
      name: '频次占比(%)',
      axisLine: { // 轴
        show: false,
        lineStyle: {
          color: '#2fc2ff'
        }
      },
      axisTick: { // 刻度线
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#2fc2ff'
        }
      },
      splitLine: { // 网格线
        lineStyle: {
          color: '#1a293f'
        }
      }
    },
    series: [{
      name: '上月',
      type: 'bar',
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]

        }
      },
      data: yAxisData4
    },
    {
      name: '本月',
      type: 'bar',
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]

        }
      },
      data: yAxisData41
    }
    ]
  }
  return option
}

export {
  chargelong,
  chargefrequency,
  cartypecharge,
  startcharge,
  endcharge
}
