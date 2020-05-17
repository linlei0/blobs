<template>
  <div class="content-page">
    <ul class="rect-wrapper01" style="margin-top: -1rem;">
      <li v-for="(item,index) in list" :key="index" class="rect">
        <div class="outline">
          <img class="onelogo" :src="item.img">
          <span class="onespan">{{ item.title }}</span>
          <div class="onediv">
            <span class="one-rect-content">
              <i class="rect-num js-total">{{ item.value }}</i>
              <i class="rect-unit">{{ item.unit }}</i>
              <img v-if="item.keys=='news' && isUpImg" class="oneimg" :src="isUpImg">
            </span>
          </div>
        </div>
      </li>
    </ul>
    <div class="chart-wrapper">
      <h4 class="con-title chart-title">
        <img class="onelogo" src="../assets/images/bt_icon_chel.png">
        车辆位置分布
      </h4>
      <div
        id="china-map"
        class="chart"
        style="-webkit-tap-highlight-color: transparent; user-select: none; background: transparent;"
      />
    </div>
    <div class="chart-wrapper">
      <h4 class="con-title chart-title">
        <img class="onelogo" src="../assets/images/bt_icon_chel.png">
        各车型接入车辆数汇总
      </h4>
      <div
        id="car-type"
        class="chart chart2"
        style="-webkit-tap-highlight-color: transparent; user-select: none; background: transparent;"
      />
    </div>
  </div>
</template>

<script>
import {  getMonitorInfo  } from '@/api/page1'
import '../../node_modules/echarts/map/js/china.js'
var province = [
  { name: '北京', value: 0, modulename: 'beijing' },
  { name: '天津', value: 0, modulename: 'tianjing' },
  { name: '上海', value: 0, modulename: 'shanghai' },
  { name: '重庆', value: 0, modulename: 'chongqing' },
  { name: '河北', value: 0, modulename: 'hebei' },
  { name: '河南', value: 0, modulename: 'henan' },
  { name: '云南', value: 0, modulename: 'yunnan' },
  { name: '辽宁', value: 0, modulename: 'liaoning' },
  { name: '黑龙江', value: 0, modulename: 'heilongjiang' },
  { name: '湖南', value: 0, modulename: 'hunan' },
  { name: '安徽', value: 0, modulename: 'anhui' },
  { name: '山东', value: 0, modulename: 'shandong' },
  { name: '新疆', value: 0, modulename: 'xinjiang' },
  { name: '江苏', value: 0, modulename: 'jiangsu' },
  { name: '浙江', value: 0, modulename: 'zhejiang' },
  { name: '江西', value: 0, modulename: 'jiangxi' },
  { name: '湖北', value: 0, modulename: 'hubei' },
  { name: '广西', value: 0, modulename: 'guangxi' },
  { name: '甘肃', value: 0, modulename: 'gansu' },
  { name: '山西', value: 0, modulename: 'shanxi' },
  { name: '内蒙古', value: 0, modulename: 'neimenggu' },
  { name: '陕西', value: 0, modulename: 'shanxi1' },
  { name: '吉林', value: 0, modulename: 'jilin' },
  { name: '福建', value: 0, modulename: 'fujian' },
  { name: '贵州', value: 0, modulename: 'guizhou' },
  { name: '广东', value: 0, modulename: 'guangdong' },
  { name: '青海', value: 0, modulename: 'qinghai' },
  { name: '西藏', value: 0, modulename: 'xizang' },
  { name: '四川', value: 0, modulename: 'sichuan' },
  { name: '宁夏', value: 0, modulename: 'ningxia' },
  { name: '海南', value: 0, modulename: 'hainan' },
  { name: '台湾', value: 0, modulename: 'taiwan' },
  { name: '香港', value: 0, modulename: 'xianggang' },
  { name: '澳门', value: 0, modulename: 'aomen' },
  { name: '南海诸岛', value: 0 }
]

const carTypeOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: '5%',
    y: 'center',
    data: [], // lData
    textStyle: {
      color: '#e6e7e7',
      fontSize: 12
    }
  },
  color: ['#A2CD5A', '#2fb47a', '#57fdff', '#2986ff', '#02c3fa', '#ffbc08'],
  calculable: true,
  series: [
    {
      data: [], // data
      type: 'pie',
      radius: [30, 80],
      center: ['60%', '50%'],
      roseType: 'radius',
      label: {
        normal: {
          position: 'center',
          show: false
        },
        emphasis: {
          show: true,
          formatter: '{b}: {c} ({d}%)',
          textStyle: {
            color: '#fff',
            fontSize: '15',
            fontWeight: 'bold'
          }
        }
      },
      lableLine: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      }
    }
  ]
}
var mapOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}辆'
  },
  visualMap: {
    min: 0,
    max: 100,
    range: [1, 1000],
    itemWidth: 12,
    itemHeight: 125,
    inRange: {
      color: ['#1b91ff', '#13b2e7', '#08e0c5', '#00fdaf']
    },
    outOfRange: {
      color: ['#132c53']
    },
    orient: 'horizontal',
    left: '10%',
    bottom: '5%',
    text: ['高', '低'],
    textStyle: {
      color: '#c0c0c0'
    }
  },
  geo: {
    map: 'china',
    roam: true, // 滚动地图缩放地图大小
    selectedMode: 'single'
  },
  series: [
    {
      name: '车辆数',
      type: 'map',
      mapType: 'china',
      geoIndex: 0,
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          borderColor: '#132c53',
          borderWidth: 1
        }
      },
      silent: true,
      data: province
    },
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      data: [{
        name: '钓鱼岛',
        value: [123.67, 25.70, 0]
      }],
      silent: true,
      symbolSize: 1,
      symbol: 'circle',
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true,
          textStyle: {
            color: '#c0c0c0'
          }
        }
      }
    }]
}

export default {
  name: 'Page1',
  data() {
    return {
      list: [
        { img: require('../assets/images/icon_zcls.png'), title: '总车辆数', unit: '万辆', keys: 'total', value: '0' },
        { img: require('../assets/images/icon_cl.png'), title: '本月新入网车辆', unit: '辆', keys: 'news', value: '0' },
        { img: require('../assets/images/icon_zlc.png'), title: '合计总里程', unit: '万公里', keys: 'totalmile', value: '0' },
        { img: require('../assets/images/icon_js.png'), title: '合计节省', unit: '万元', keys: 'savingmoney', value: '0' },
        { img: require('../assets/images/icon_pl.png'), title: '合计减排量', unit: '吨', keys: 'emissionredution', value: '0' },
        { img: require('../assets/images/icon_zs.png'), title: '相当于种植大树', unit: '万棵', keys: 'bigtrees', value: '0' }
      ],
      chinaMapcharts: null,
      mapOption,
      province,
      carTypeCharts: null,
      carTypeOption,
      isUpImg: null
    }
  },
  watch: {
  },
  created() {

  },
  mounted() {
    // getTitleInfo({type:'MonitorInfo'})
    //   .then(data => {
    //     if (data.code === 0) {
    //       this.$parent.title = data.data.title
    //       return
    //     }
    //   })
    //   .then(() => {
    //     getMonitorInfo({}).then(data => {
    //       if (data.code === 0) {
    //         const result = data.data
    //         const { list, list2 } = result
    //         this.setBaseData(result)
    //         this.setChinaMap(list)
    //         this.setCarTypeChart(list2)
    //       }
    //     })
    //     this.initChart()
    //   })
    this.initChart()
    getMonitorInfo({type:'MonitorInfo'}).then(data => {
      if (data.code === 0) {
        const result = data.data
        const list = result.list ? JSON.parse(result.list) : []
        const list2 = result.list2 ? JSON.parse(result.list2) : []
        this.setBaseData(result)
        this.setChinaMap(list)
        this.setCarTypeChart(list2)
      }
    })
  },
  methods: {
    initChart() {
      this.initChinaMap(this.mapOption)
      this.initCarTypeChart(this.carTypeOption)
    },
    // 初始化车辆分布
    initChinaMap(option) {
      !this.chinaMapcharts && (this.chinaMapcharts = this.$echarts.init(document.getElementById('china-map')))
      this.chinaMapcharts.setOption(option, true)
    },
    // 设置车辆分布
    setChinaMap(list) {
      let max = 0
      list.forEach(item => {
        const f = this.province.filter(v => item.CITY === v.name)[0]
        if (f) {
          f.value = item.COUNT
        }
        max = item.COUNT > max ? item.COUNT : max
      })
      this.chinaMapcharts.setOption({
        visualMap: {
          max: max,
          range: [1, max]
        },
        series: [{
          data: province
        }]
      })
    },
    // 初始化各车型接入车辆数汇总
    initCarTypeChart(option) {
      !this.carTypeCharts && (this.carTypeCharts = this.$echarts.init(document.getElementById('car-type')))
      this.carTypeCharts.setOption(option, true)
    },
    // 设置各车型接入车辆数汇总
    setCarTypeChart(list) {
      const resultStr = JSON.stringify(list)
      const dataString = (resultStr.replace(/CARTYPENAME/g, 'name')).replace(/CARCOUNT/g, 'value')
      const data1 = JSON.parse(dataString)
      const lData = []
      data1.forEach(item => {
        lData.push(item.name)
      })
      this.carTypeCharts.setOption({
        legend: {
          data: lData
        },
        series: [
          { data: data1 }
        ]
      })
    },
    // 设置基础数据
    setBaseData(result) {
      const arr = Object.keys(result)
      if (result.carrise > 0) {
        this.isUpImg = require('../assets/icon_ss_d.png')
      } else {
        this.isUpImg = require('../assets/icon_xj_d.png')
      }
      for (let i = 0; i < this.list.length; i++) {
        const index = arr.findIndex(item => item == this.list[i].keys)

        if (index > -1) {
          this.$set(this.list[i], 'value', result[arr[index]])
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
