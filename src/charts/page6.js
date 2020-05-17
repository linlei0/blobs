function userlist(xAxisData, yAxisData) {
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{c}%'
    },
    grid: {
      left: '10%',
      top: '15%',
      bottom: '8%'
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        show: true,
        interval: 0, // 显示所有X轴值
        fontsize: 4,
        textStyle: {
          color: '#4fdef5'
        }
      },
      axisLine: {
        color: '#0f3661'
      },
      axisTick: {
        alignWithLabel: true
      },
      data: xAxisData
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
        { offset: 0, color: '#00bdfc' },
        { offset: 1, color: '#00fbe9' }
      ],
      globalCoord: false // 缺省为 false
    }],
    series: [{
      type: 'bar',
      barWidth: '40%',
      data: yAxisData,
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
  userlist
}
