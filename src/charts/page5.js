function faultlev(data) {
  var lData = []
  data.forEach(function(obj) {
    lData.push(obj.name)
  })
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      left: '5%',
      top: '15%',
      itemWidth: 20,
      itemHeight: 12,
      data: lData,
      textStyle: {
        color: '#e6e7e7',
        fontSize: 12
      }
    },
    grid: {
      left: '38%'
    },
    color: ['#10dff2', '#0288fa', '#ffb508', '#f25a1f'],
    series: [
      {
        data: data,
        center: ['55%', '40%'],
        type: 'pie',
        radius: ['30%', '45%'],
        avoidLabelOverlap: true,
        labelLine: { // 设置延长线的长度
          normal: {
            show: false,
            length: 3, // 设置延长线的长度
            length2: 3 // 设置第二段延长线的长度
          }
        },
        label: {
          normal: {
            show: false,
            position: 'outside',
            formatter: '{c} '
          },
          emphasis: {
            show: false,
            textStyle: {
              fontSize: '20',
              fontWeight: 'bold'
            }
          }
        }
      }
    ]
  }
  return option
}
function cartypefault(xAxisData, yAxisData01, yAxisData02) {
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    grid: {
      top: '3%',
      bottom: '20%'
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: xAxisData,
        axisLabel: {
          textStyle: {
            color: '#ffffff'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: '上线率(%)',
        nameTextStyle: {
          color: '#20c8b8'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: true
        },
        axisLabel: {
          textStyle: {
            color: '#20c8b8'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#0e3056'// "rgba(255,255,255,.15)"
          }
        }
      }, {
        type: 'value',
        name: '故障率(%)',
        nameTextStyle: {
          color: '#4f8ad8'
        },
        axisLabel: {
          textStyle: {
            color: '#4f8ad8'
          },
          show: true
          // interval: 'auto'
          // formatter: '{value}'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '上线率',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          normal: {
            color: '#00d2b9'
          }
        },
        areaStyle: {
          normal: {
            opacity: 0.5,
            color: '#00d2b9' // 选择区域颜色
          }
        },
        data: yAxisData01
      },
      {
        name: '故障率',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        xAxisIndex: 0,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#2986ff'
          }
        },
        areaStyle: {
          normal: {
            opacity: 0.5,
            color: '#2986ff' // 选择区域颜色
          }
        },
        data: yAxisData02
      }
    ]
  }
  return option
}
function yijifault(xAxisData1, yAxisData1) {
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{c}%'
    },
    grid: {
      left: '10%',
      right: '0%',
      top: '5%',
      bottom: '5%',
      containLabel: true
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
      data: xAxisData1
    },
    yAxis: {
      type: 'value',
      scale: true,
      name: '百分比(%)',
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
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#12abdd' },
        { offset: 1, color: '#10def2' }
      ],
      globalCoord: false // 缺省为 false
    }],
    series: [{
      type: 'bar',
      barWidth: '35%',
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      },
      data: yAxisData1
    }

    ]
  }
  return option
}
function erjifault(xAxisData2, yAxisData2) {
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{c}%'
    },
    grid: {
      left: '10%',
      right: '0%',
      top: '5%',
      bottom: '5%',
      containLabel: true
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
      data: xAxisData2
    },
    yAxis: {
      type: 'value',
      scale: true,
      name: '百分比(%)',
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
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#3166ea' },
        { offset: 1, color: '#2c90e8' }
      ],
      globalCoord: false // 缺省为 false
    }],
    series: [{
      type: 'bar',
      barWidth: '35%',
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      },
      data: yAxisData2
    }

    ]
  }
  return option
}
function sanjifault(xAxisData3, yAxisData3) {
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{c}%'
    },
    grid: {
      left: '10%',
      right: '0%',
      top: '5%',
      bottom: '5%',
      containLabel: true
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
      scale: true,
      name: '百分比(%)',
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
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#e7b60b' },
        { offset: 1, color: '#db6e1f' }
      ],
      globalCoord: false // 缺省为 false
    }],
    series: [{
      type: 'bar',
      barWidth: '35%',
      data: yAxisData3,
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
function sijifault(xAxisData4, yAxisData4) {
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{c}%'
    },
    grid: {
      left: '10%',
      right: '0%',
      top: '5%',
      bottom: '5%',
      containLabel: true
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
      scale: true,
      name: '百分比(%)',
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
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#e67904' },
        { offset: 1, color: '#db5320' }
      ],
      globalCoord: false // 缺省为 false
    }],
    series: [{
      type: 'bar',
      barWidth: '35%',
      data: yAxisData4,
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

export {
  faultlev,
  cartypefault,
  yijifault,
  erjifault,
  sanjifault,
  sijifault
}
