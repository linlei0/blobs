function xsRate(data) {
  var yData = []; var xData = []; var hbValue = []
  data.forEach(function(obj) {
    yData.push(Math.abs(obj.value))
    xData.push(obj.name)
    hbValue.push(obj.value)
  })
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: '{b}:{c}'
      // axisPointer: {
      //   type: ''
      // }
    },
    grid: {
      left: '0%',
      right: '0%',
      top: '5%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        color: '#689dff'
      },
      data: xData
    },
    yAxis: {
      type: 'value',
      show: false
    },
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: '#2ccbff' },
        { offset: 1, color: '#427cff' }
      ],
      globalCoord: false // 缺省为 false
    }],
    series: [
      {
        itemStyle: {
          normal: {
            barBorderRadius: [4, 4, 0, 0]
          }
        },
        type: 'bar',
        barGap: '-100%',
        barCategoryGap: '60%',
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: function(params) {
              var TsHb = ''
              if (hbValue[params.dataIndex] > 0) // 环比增长
              {
                TsHb = '{aa|' + yData[params.dataIndex] + '}' + '{a|}'
              } else if (hbValue[params.dataIndex] < 0) // 环比下降
              {
                TsHb = '{bb|' + yData[params.dataIndex] + '}' + '{b|}'
              } else {
                TsHb = '{cc|' + yData[params.dataIndex] + '}' + '{c|}'
              }
              return TsHb
            },
            rich: {
              a: {
                backgroundColor: {
                  image: '../assets/images/icon_ss_z.png'
                },
                width: 8,
                height: 10
              },
              aa: {
                color: '#3fffe8'
              },
              b: {
                backgroundColor: {
                  image: '../assets/images/icon_xj_z.png'
                },
                width: 8,
                height: 10
              },
              bb: {
                color: '#ff7070'
              },
              c: {
                backgroundColor: {
                  image: '../assets/images/icon_xd_x.png'
                },
                width: 8,
                height: 10
              },
              cc: {
                color: '#f4d04f'
              }

            }
          }
        },
        data: yData
      }

    ]
  }
  return option
}
export {
  xsRate
}
