function mileageday(xAxisData, yAxisData) {
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}辆'
    },
    grid: {
      left: 80,
      right: 5,
      top: 30,
      bottom: 20
    },
    xAxis: [
      {
        type: 'category',
        axisLabel: {
          show: true,
          // interval:0,//显示所有X轴值
          textStyle: {
            color: '#f4f4f5',
            fontsize: 4
          }
        },
        axisTick: {
          alignWithLabel: true
        },
        data: xAxisData
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '车辆数(千辆)',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#45a1ff'
          }
        },
        axisTick: {
          show: true
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#429af5'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#1a293f'
          }
        }
      }
    ],
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#2e91ff' },
        { offset: 1, color: '#16f1e4' }
      ],
      globalCoord: false // 缺省为 false
    }],
    series: [
      {
        type: 'bar',
        barWidth: '45%',
        itemStyle: {
          normal: {
            barBorderRadius: [4, 4, 0, 0]
          }
        },
        data: yAxisData
      }
    ]
  }
  return option
}
function cartypemileageday(xAxisData1, yAxisData1) {
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },
    grid: {
      left: 80,
      right: 5,
      top: 30,
      bottom: 20
    },
    xAxis: [
      {
        type: 'category',
        axisLabel: {
          show: true,
          // interval:0,//显示所有X轴值
          textStyle: {
            color: '#f4f4f5',
            fontsize: 4
          }
        },
        axisTick: {
          alignWithLabel: true
        },
        data: xAxisData1
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '日均行驶里程(千公里)',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#45a1ff'
          }
        },
        axisTick: {
          show: true
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#429af5'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#1a293f'
          }
        }
      }
    ],
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#0bb0de' },
        { offset: 1, color: '#23e0a6' }
      ],
      globalCoord: false // 缺省为 false
    }],
    series: [
      {
        type: 'bar',
        barWidth: '45%',
        data: yAxisData1,
        itemStyle: {
          normal: {
            barBorderRadius: [4, 4, 0, 0]
          }
        }
      }
    ]
  }
  return option
}
function rate(xAxisData2, yAxisData2) {
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{c}'
    },
    legend: {
      data: ['里程数'],
      textStyle: {
        color: '#44a8f6'
      },
      left: '42%',
      top: '5%'
    },
    grid: {
      left: '5%',
      right: '3%',
      bottom: '10%'
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        show: true,
        // interval:0,//显示所有X轴值
        textStyle: {
          color: '#f4f4f5',
          fontsize: 4
        }
      },
      axisTick: {
        alignWithLabel: true
      },
      data: xAxisData2

    },
    yAxis: {
      type: 'value',
      name: '里程数(千公里)',
      axisLine: {
        show: false,
        lineStyle: {
          color: '#45a1ff'
        }
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#429af5'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#1a293f'
        }
      }
    },
    series: [{
      name: '里程数',
      type: 'line',
      showAllSymbol: true,
      symbol: 'emptyCircle',
      symbolSize: 10,
      itemStyle: {
        normal: {
          color: '#47afff'
        }
      },
      data: yAxisData2
    }
    ]
  }
  return option
}

export {
  mileageday,
  cartypemileageday,
  rate
}
