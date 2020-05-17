<template>
  <div class="content-page page2">
    <ul class="rect-wrapper01" style="margin-top: -1rem;">
      <li v-for="(item,index) in list" :key="index" class="rect">
        <div class="outline">
          <img class="onelogo" :src="item.img">
          <span class="onespan">{{ item.title }}</span>
          <div class="onediv">
            <span class="one-rect-content">
              <i class="rect-num js-total">{{ item.value }}</i>
              <i class="rect-unit">{{ item.unit }} </i>
              <img v-if="index === 2 && !numFlag" class="oneimg" src="../assets/images/icon_ss_z.png">
              <img v-if="index === 2 && numFlag" class="oneimg" src="../assets/images/icon_xj_z.png">
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
                <img class="onelogo" src="../assets/images/icon_zcls.png">车辆活跃城市TOP5
              </th>
            </tr>
            <tr>
              <th style="text-align: center; color:#7ad2ff;">
                城市
              </th>
              <th style="text-align: center; color:#7ad2ff;">
                活跃数(辆)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in tableList" :key="index">
              <td class="td1">
                {{ item.cityname }}
              </td>
              <td>{{ item.total }}</td>
            </tr>
          </tbody>
        </table>
      </el-col>
      <el-col :span="12">
        <h3 class="page4-title">
          <img class="fourlogo01" src="../assets/images/icon_gl.png">各车型上线车辆数对比
        </h3>
        <div class="sonTitle-box">
          <div class="sonTitle" style="margin-left: 7rem">
            <img class="twologo" src="../assets/images/icon_ss_z.png">
            <span class="twospan" style="color:#3fffe8;">环比上升</span>
          </div>
          <div class="sonTitle" style="margin-left: -2.5rem">
            <img class="twologo" src="../assets/images/icon_xj_z.png">
            <span class="twospan" style="color:#ff7070;">环比下降</span>
          </div>
          <div class="sonTitle" style="margin-left: -2rem">
            <img class="twologo" src="../assets/images/icon_xd_z.png">
            <span class="twospan" style="color:#f4d04f;">环比持平</span>
          </div>
        </div>
        <div ref="xsRate" style="width:100%; height:230px" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getActive } from '@/api/page2'
import {
  xsRate
} from '@/charts/page2'
export default {
  name: 'Page2',
  props: {
    load: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      numFlag: false,
      list: [
        { img: require('../assets/images/icon_zcls.png'), title: '月度活跃车辆数', unit: '万辆', value: '0' },
        { img: require('../assets/images/icon_hyl.png'), title: '月度车辆活跃率', unit: '%', value: '0' },
        { img: require('../assets/images/icon_zcls.png'), title: '月度活跃车辆数环比情况', unit: '辆', value: '0' },
        { img: require('../assets/images/icon_zcls.png'), title: '日均在线数', unit: '辆', value: '0' },
        { img: require('../assets/images/icon_hyl.png'), title: '日均在线率', unit: '%', value: '0' }
      ],
      tableList: []
    }
  },
  watch: {
    load(e1) {
      // e1为true时，表示第一次进入此页面
      if (e1) {
        getActive({type:'ActiveInfo'}).then(data => {
          if (data.code === 0) {
            // 车辆数据
            this.list[0].value = data.data.monthactivecount
            this.list[1].value = data.data.monthactiverate
            if (data.data.activehb < 0) {
              this.numFlag = true
              this.list[2].value = Math.abs(data.data.activehb)
            } else {
              this.numFlag = false
              this.list[2].value = data.data.activehb
            }
            this.list[3].value = data.data.dayactivecount
            this.list[4].value = data.data.dayactiverate

            // 表格
            var citydata = (data.data.list.replace(/CITYNAME/g, 'cityname')).replace(/ACTIVECOUNT/g, 'total')
            this.tableList = citydata ? JSON.parse(citydata) : []

            // 柱状图
            this.xsRateFunc(data.data.xsRate)
          }
        })
      }
    }
  },
  methods: {
    // 各车型上线车辆数对比
    xsRateFunc(msg) {
      const lvcount = (msg.replace(/CarTypeName/g, 'name')).replace(/Rise/g, 'value')
      const data = lvcount ? JSON.parse(lvcount) : []
      const Dom = this.$refs.xsRate
      const myChart = this.$echarts.init(Dom)
      myChart.clear()
      const optionData = xsRate(data)
      myChart.setOption(optionData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
