<template>
  <div class="content-page page6">
    <ul class="rect-wrapper01" style="margin-top: -1rem;">
      <li v-for="(item,index) in list" :key="index" class="rect">
        <div class="outline">
          <img class="onelogo" :src="item.img">
          <span class="onespan">{{ item.title }}</span>
          <div class="onediv">
            <span class="one-rect-content">
              <i class="rect-num js-total">{{ item.value }}</i>
              <i class="rect-unit">{{ item.unit }}</i>
            </span>
          </div>
        </div>
      </li>
    </ul>
    <el-row :gutter="20">
      <el-col :span="12">
        <table id="carProTable" class="carTable">
          <thead>
            <tr>
              <th colspan="2" style="text-align: center; color:#fff;">
                <img class="onelogo" src="../assets/images/icon_zcls.png">远程控制功能占比TOP5
              </th>
            </tr>
            <tr>
              <th style="text-align: center; color:#7ad2ff;">
                功能名称
              </th>
              <th style="text-align: center; color:#7ad2ff;">
                占比(%)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in tableList" :key="index">
              <td class="td1">
                {{ item.name }}
              </td>
              <td>{{ item.value }}</td>
            </tr>
          </tbody>
        </table>
      </el-col>
      <el-col :span="12">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/userlist.png">用户年龄段分布情况
        </h3>
        <div ref="userlist" class="page6-h1" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  userlist
} from '@/charts/page6'
import { getCloudInfo } from '@/api/page6'
export default {
  name: 'Page6',
  props: {
    load: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [
        { img: require('../assets/images/icon_yys.png'), title: '云钥匙用户注册户', unit: '位', value: '0' },
        { img: require('../assets/images/icon_ydhy.png'), title: '月度活跃用户', unit: '位', value: '0' },
        { img: require('../assets/images/icon_hyl.png'), title: '月度活跃率', unit: '%', value: '0' },
        { img: require('../assets/images/icon_rjsy.png'), title: '日均使用频次', unit: '次', value: '0' },
        { img: require('../assets/images/icon_az.png'), title: '安卓用户数', unit: '位', value: '0' },
        { img: require('../assets/images/icon_pg.png'), title: '苹果用户数', unit: '位', value: '0' },
        { img: require('../assets/images/icon_nanx.png'), title: '男性用户数', unit: '位', value: '0' },
        { img: require('../assets/images/icon_nvx.png'), title: '女性用户数', unit: '位', value: '0' }
      ],
      tableList: []
    }
  },
  watch: {
    load(e1) {
      // e1为true时，表示第一次进入此页面
      if (e1) {
        getCloudInfo({type:'CloudInfo'}).then(data => {
          if (data.code === 0) {
            this.list[0].value = data.data.cloudcount ? data.data.cloudcount : '0'
            this.list[1].value = data.data.activecount ? data.data.activecount : '0'
            this.list[2].value = data.data.activerise ? data.data.activerise : '0'
            this.list[3].value = data.data.userate ? data.data.userate : '0'
            this.list[4].value = data.data.android ? data.data.android : '0'
            this.list[5].value = data.data.ios ? data.data.ios : '0'
            this.list[6].value = data.data.malecount ? data.data.malecount : '0'
            this.list[7].value = data.data.femalecount ? data.data.femalecount : '0'
            // 表格
            var citydata = (data.data.list.replace(/NAME/g, 'name')).replace(/RATE/g, 'value')
            this.tableList = citydata ? JSON.parse(citydata) : []
            // 柱状图
            this.userlistFunc(data.data.userlist)
          }
        })
      }
    }
  },
  methods: {
    // 各车型上线车辆数对比
    userlistFunc(data) {
      const xAxisData0 = []
      const yAxisData0 = []
      var userdata = (data.replace(/NAME/g, 'name')).replace(/RATE/g, 'value')
      const userdataList = userdata ? JSON.parse(userdata) : []
      userdataList.forEach(function(obj) {
        xAxisData0.push(obj.name)
        yAxisData0.push({
          'name': obj.name,
          'value': obj.value
        })
      })
      const Dom = this.$refs.userlist
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = userlist(xAxisData0, yAxisData0)
      myChart.setOption(optionData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
