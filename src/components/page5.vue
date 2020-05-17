<template>
  <div class="content-page page5">
    <el-row :gutter="20">
      <el-col :span="6">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_gl.png">故障统计概览
        </h3>
        <div class="page5-rect-long-left page5-h1">
          <div class="fydiv d1" style="padding-top:0.4rem;">
            <div class="ff f01" />
            <div class="ff f02">
              <span class="fspan">故障总数</span>  <br>
              <span class="one-rect-content">
                <i class="rect-num5 js-faulttal">{{ faulttal }}</i>
                <i class="rect-unit5">万次</i>
              </span>
            </div>
          </div>
          <div class="fydiv d2">
            <div class="ff f0102" />
            <div class="ff f02">
              <span class="fspan">故障车辆数</span>  <br>
              <span class="one-rect-content">
                <i class="rect-num5 js-faultcar">{{ faultcar }}</i>
                <i class="rect-unit5">辆</i>
              </span>
            </div>
          </div>
          <div class="fydiv d3">
            <div class="ff f0103" />
            <div class="ff f02">
              <span class="fspan" style="margin-left: 2.5rem;">车辆故障率</span>  <br>
              <span class="one-rect-content">
                <i class="rect-num5 js-faultlv">{{ faultlv }}</i>
                <i class="rect-unit5">%</i>
              </span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_gz.png">故障等级数据及占比
        </h3>
        <div ref="faultlev" class="page5-h1" />
      </el-col>
      <el-col :span="10">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_che.png">车型日均充电时长及充电次数
        </h3>
        <div ref="cartypefault" style="width:100%;height:12rem;" />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" style="margin-top:-2.5rem;">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_lj_a.png">一级故障的各零部件占比
        </h3>
        <div ref="yijifault" class="page5-h2" />
      </el-col>
      <el-col :span="12" style="margin-top:-2.5rem;">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_lj_a.png">二级故障的各零部件占比
        </h3>
        <div ref="erjifault" class="page5-h2" />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_lj_c.png">三级故障的各零部件占比
        </h3>
        <div ref="sanjifault" class="page5-h2" />
      </el-col>
      <el-col :span="12">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_lj_c.png">四级故障的各零部件占比
        </h3>
        <div ref="sijifault" class="page5-h2" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  faultlev,
  cartypefault,
  yijifault,
  erjifault,
  sanjifault,
  sijifault
} from '@/charts/page5'
import { getFaultInfo } from '@/api/page5'
export default {
  name: 'Page5',
  props: {
    load: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      faulttal: 0,
      faultlv: 0,
      faultcar: 0
    }
  },
  watch: {
    load(e1) {
      // e1为true时，表示第一次进入此页面
      if (e1) {
        getFaultInfo({type:'FaultInfo'}).then(data => {
          if (data.code === 0) {
            this.faulttal = data.data.faulttal ? data.data.faulttal : '0'
            this.faultlv = data.data.faultlv ? data.data.faultlv : '0'
            this.faultcar = data.data.faultcar ? data.data.faultcar : '0'
            this.faultlevFunc(data.data.faultlelist)
            this.cartypefaultFunc(data.data.cartypefault)
            this.yijifaultFunc(data.data.list1)
            this.erjifaultFunc(data.data.list2)
            this.sanjifaultFunc(data.data.list3)
            this.sijifaultFunc(data.data.list4)
          }
        })
      }
    }
  },
  methods: {
    // 故障等级数据及占比
    faultlevFunc(data) {
      // const dataString = '[{"FLEVEL":1,"FAULTLEVEL":"一级故障","FAULECOUNT":227111},{"FLEVEL":2,"FAULTLEVEL":"二级故障","FAULECOUNT":6894229},{"FLEVEL":3,"FAULTLEVEL":"三级故障","FAULECOUNT":6616343},{"FLEVEL":4,"FAULTLEVEL":"四级故障","FAULECOUNT":12222214}]'
      const lvcount = (data.replace(/FAULTLEVEL/g, 'name')).replace(/FAULECOUNT/g, 'value')
      const echartdata = lvcount ? JSON.parse(lvcount) : []
      const Dom = this.$refs.faultlev
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = faultlev(echartdata)
      myChart.setOption(optionData)
    },
    // 车型日均充电时长及充电次数
    cartypefaultFunc(data) {
      var cartypefaultdata = ((data.replace(/CARTYPENAME/g, 'name')).replace(/ACTIVERATE/g, 'online')).replace(/FAULTRATE/g, 'fault')
      const xAxisData0 = []
      const yAxisData0 = []
      const yAxisData01 = []
      const cartypefaultdataList = cartypefaultdata ? JSON.parse(cartypefaultdata) : []
      cartypefaultdataList.forEach(function(obj) {
        xAxisData0.push(obj.name)
        yAxisData0.push({
          'name': obj.name,
          'value': obj.online
        })
        yAxisData01.push({
          'name': obj.name,
          'value': obj.fault
        })
      })
      const Dom = this.$refs.cartypefault
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = cartypefault(xAxisData0, yAxisData0, yAxisData01)
      myChart.setOption(optionData)
    },
    // 一级故障的各零部件占比
    yijifaultFunc(data) {
      var list1data = ((data.replace(/PARTNAME/g, 'name')).replace(/FAULECOUNT/g, 'online')).replace(/FAULERATE/g, 'value')
      const xAxisData0 = []
      const yAxisData0 = []
      const list1dataList = list1data ? JSON.parse(list1data) : []
      list1dataList.forEach(function(obj) {
        xAxisData0.push(obj.name)
        yAxisData0.push({
          'name': obj.name,
          'value': obj.value
        })
      })
      const Dom = this.$refs.yijifault
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = yijifault(xAxisData0, yAxisData0)
      myChart.setOption(optionData)
    },
    // 二级故障的各零部件占比
    erjifaultFunc(data) {
      var list2data = ((data.replace(/PARTNAME/g, 'name')).replace(/FAULECOUNT/g, 'online')).replace(/FAULERATE/g, 'value')
      const xAxisData0 = []
      const yAxisData0 = []
      const list2dataList = list2data ? JSON.parse(list2data) : []
      list2dataList.forEach(function(obj) {
        xAxisData0.push(obj.name)
        yAxisData0.push({
          'name': obj.name,
          'value': obj.value
        })
      })
      const Dom = this.$refs.erjifault
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = erjifault(xAxisData0, yAxisData0)
      myChart.setOption(optionData)
    },
    // 三级故障的各零部件占比
    sanjifaultFunc(data) {
      var list3data = ((data.replace(/PARTNAME/g, 'name')).replace(/FAULECOUNT/g, 'online')).replace(/FAULERATE/g, 'value')
      const xAxisData0 = []
      const yAxisData0 = []
      const list3dataList = list3data ? JSON.parse(list3data) : []
      list3dataList.forEach(function(obj) {
        xAxisData0.push(obj.name)
        yAxisData0.push({
          'name': obj.name,
          'value': obj.value
        })
      })
      const Dom = this.$refs.sanjifault
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = sanjifault(xAxisData0, yAxisData0)
      myChart.setOption(optionData)
    },
    // 四级故障的各零部件占比
    sijifaultFunc(data) {
      var list4data = ((data.replace(/PARTNAME/g, 'name')).replace(/FAULECOUNT/g, 'online')).replace(/FAULERATE/g, 'value')
      const xAxisData0 = []
      const yAxisData0 = []
      const list4dataList = list4data ? JSON.parse(list4data) : []
      list4dataList.forEach(function(obj) {
        xAxisData0.push(obj.name)
        yAxisData0.push({
          'name': obj.name,
          'value': obj.value
        })
      })
      const Dom = this.$refs.sijifault
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = sijifault(xAxisData0, yAxisData0)
      myChart.setOption(optionData)
    }
  }
}
</script>

<style scoped>
</style>
