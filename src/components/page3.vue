<template>
  <div class="content-page page3">
    <el-row :gutter="20">
      <el-col :span="6">
        <div id="three01" class="divline">
          <img class="mileagelogo" src="../assets/images/icon_zcls.png">
          <span class="onespan03">当月里程达到3万公里车辆数</span>
          <div class="threeonediv">
            <span class="one-rect-content">
              <i class="rect-num03 js-reachingstandardcarcount">{{ reachingstandardcarcount }}</i>
              <i class="rect-unit03"> 辆</i>
            </span>
          </div>
          <img class="thrlogo" src="../assets/images/icon_zcls.png">
          <span class="onespan03">当月运营总里程</span>
          <div class="threeonediv">
            <span class="one-rect-content">
              <i class="rect-num03 js-totalmileage">{{ totalmileage }}</i>
              <i class="rect-unit03"> 万公里</i>
            </span>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_zcls.png">车辆日均行驶里程分布
        </h3>
        <div ref="mileageday" class="page3-h1" />
      </el-col>
      <el-col :span="9">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_zcls.png">各车型日均行驶里程统计
        </h3>
        <div ref="cartypemileageday" class="page3-h1" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_zcls.png">车辆日均行驶总里程统计
        </h3>
        <div ref="rate" class="page3-h2" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getMileageInfo } from '@/api/page3'
import {
  mileageday,
  cartypemileageday,
  rate
} from '@/charts/page3'
export default {
  name: 'Page3',
  props: {
    load: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      reachingstandardcarcount: 0,
      totalmileage: 0
    }
  },
  watch: {
    load(e1) {
      // e1为true时，表示第一次进入此页面
      if (e1) {
        getMileageInfo({type:'MileageInfo'}).then(data => {
          if (data.code === 0) {
            this.reachingstandardcarcount = data.data.reachingstandardcarcount
            this.totalmileage = data.data.totalmileage
            this.mileagedayFunc(data.data.mileagelist)
            this.cartypemileagedayFunc(data.data.cartypelist)
            this.rateFunc(data.data.dayMileageList)
          }
        })
      }
    }
  },
  methods: {
    // 车辆日均行驶里程分布
    mileagedayFunc(data) {
      const xAxisData = []
      const yAxisData = []
      const echarData = data ? JSON.parse(data) : []
      echarData.forEach(function(obj) {
        xAxisData.push(obj.name)
        yAxisData.push({
          'value': obj.value
        })
      })
      const Dom = this.$refs.mileageday
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = mileageday(xAxisData, yAxisData)
      myChart.setOption(optionData)
    },
    // 各车型日均行驶里程统计
    cartypemileagedayFunc(data) {
      const xAxisData = []
      const yAxisData = []
      var cartypedata = (data.replace(/CARTYPENAME/g, 'name')).replace(/MILEAGE/g, 'value')
      const cartypedataList = cartypedata ? JSON.parse(cartypedata) : []
      cartypedataList.forEach(function(obj) {
        xAxisData.push(obj.name)
        yAxisData.push({
          'value': obj.value
        })
      })
      const Dom = this.$refs.cartypemileageday
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = cartypemileageday(xAxisData, yAxisData)
      myChart.setOption(optionData)
    },
    // 各车型日均行驶里程统计
    rateFunc(data) {
      const xAxisData = []
      const yAxisData = []
      var daymileage = (data.replace(/DATETIME/g, 'name')).replace(/MILEAGE/g, 'value')
      const daymileageList = daymileage ? JSON.parse(daymileage) : []
      daymileageList.forEach(function(obj) {
        xAxisData.push(obj.name)
        yAxisData.push({
          'value': obj.value
        })
      })
      const Dom = this.$refs.rate
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = rate(xAxisData, yAxisData)
      myChart.setOption(optionData)
    }
  }
}
</script>

<style scoped>
.el-row{
  margin-bottom: 20px;
}
</style>
