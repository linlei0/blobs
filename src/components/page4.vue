<template>
  <div class="content-page page4">
    <el-row :gutter="20">
      <el-col :span="8">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_chongdian.png">各时间段充电时长统计分布
        </h3>
        <div ref="chargelong" class="page4-h1" />
      </el-col>
      <el-col :span="8">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_chongdian.png">各时间段充电次数统计分布
        </h3>
        <div ref="chargefrequency" class="page4-h1" />
      </el-col>
      <el-col :span="8">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_chongdian.png">车型日均充电时长及充电次数
        </h3>
        <div ref="cartypecharge" class="page4-h1" />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_chongdian.png">开始充电SOC分布占比
        </h3>
        <div ref="startcharge" class="page4-h1" />
      </el-col>
      <el-col :span="12">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_chongdian.png">结束充电SOC分布占比
        </h3>
        <div ref="endcharge" class="page4-h1" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  chargelong,
  chargefrequency,
  cartypecharge,
  startcharge,
  endcharge
} from '@/charts/page4'
import { getChargeInfo } from '@/api/page4'
export default {
  name: 'Page4',
  props: {
    load: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    load(e1) {
      // e1为true时，表示第一次进入此页面
      if (e1) {
        getChargeInfo({type:'ChargeInfo'}).then(data => {
          if (data.code === 0) {
            this.chargelongFunc(data.data.list1)
            this.chargefrequencyFunc(data.data.list1)
            this.cartypechargeFunc(data.data.list2)
            this.startchargeFunc(data.data.list3)
            this.endchargeFunc(data.data.list4)
          }
        })
      }
    }
  },
  methods: {
    // 各时间段充电时长统计分布
    chargelongFunc(data) {
      const xAxisData0 = []
      const yAxisData0 = []
      const yAxisData01 = []
      const echartsData = data ? JSON.parse(data) : []
      echartsData.forEach(function(obj) {
        xAxisData0.push(obj.Name)
        yAxisData0.push({
          'value': obj.QuickTime
        })
        yAxisData01.push({
          'value': obj.NotQuickTime
        })
      })
      const Dom = this.$refs.chargelong
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = chargelong(xAxisData0, yAxisData0, yAxisData01)
      myChart.setOption(optionData)
    },
    // 各时间段充电次数统计分布
    chargefrequencyFunc(data) {
      const xAxisData0 = []
      const yAxisData0 = []
      const yAxisData01 = []
      const echartsData = data ? JSON.parse(data) : []
      echartsData.forEach(function(obj) {
        xAxisData0.push(obj.Name)
        yAxisData0.push({
          'value': obj.QuickCount
        })
        yAxisData01.push({
          'value': obj.NotQuickCount
        })
      })
      const Dom = this.$refs.chargefrequency
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = chargefrequency(xAxisData0, yAxisData0, yAxisData01)
      myChart.setOption(optionData)
    },
    // 车型日均充电时长及充电次数
    cartypechargeFunc(data) {
      const xAxisData0 = []
      const yAxisData0 = []
      const yAxisData01 = []
      const echartsData = data ? JSON.parse(data) : []
      echartsData.forEach(function(obj) {
        xAxisData0.push(obj.CARTYPENAME)
        yAxisData0.push({
          'name': obj.CARTYPENAME,
          'value': obj.MINUTE
        })
        yAxisData01.push({
          'name': obj.CARTYPENAME,
          'value': obj.NUM
        })
      })
      const Dom = this.$refs.cartypecharge
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = cartypecharge(xAxisData0, yAxisData0, yAxisData01)
      myChart.setOption(optionData)
    },
    // 开始充电SOC分布占比
    startchargeFunc(data) {
      const xAxisData0 = []
      const yAxisData0 = []
      const yAxisData01 = []
      const echartsData = data ? JSON.parse(data) : []
      echartsData.forEach(function(obj) {
        xAxisData0.push(obj.Name)
        yAxisData0.push({
          'name': obj.Name,
          'value': obj.StartSocRate
        })
        yAxisData01.push({
          'name': obj.Name,
          'value': obj.EndSocRate
        })
      })
      const Dom = this.$refs.startcharge
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = startcharge(xAxisData0, yAxisData0, yAxisData01)
      myChart.setOption(optionData)
    },
    // 结束充电SOC分布占比
    endchargeFunc(data) {
      const xAxisData0 = []
      const yAxisData0 = []
      const yAxisData01 = []
      const echartsData = data ? JSON.parse(data) : []
      echartsData.forEach(function(obj) {
        xAxisData0.push(obj.Name)
        yAxisData0.push({
          'name': obj.name,
          'value': obj.StartSocRate
        })
        yAxisData01.push({
          'name': obj.Name,
          'value': obj.EndSocRate
        })
      })
      const Dom = this.$refs.endcharge
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = endcharge(xAxisData0, yAxisData0, yAxisData01)
      myChart.setOption(optionData)
    }
  }
}
</script>

<style scoped>
</style>
