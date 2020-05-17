<template>
  <div id="app">
    <header id="header">
      <img src="./assets/logo.png" alt="">
      <div class="titlePart">
        <p class="header-title">
          {{ title }}
        </p>
        <!-- <a class="header-print" @click="print" /> -->
      </div>
    </header>
    <div
      v-for="(item,index) in pageConfigList"
      :id="item.keys"
      :key="index"
      :class="[
        'page',
        item.slide ? 'slide' : '',
        item.reverse ? 'reverse': '',
        item.in ? 'in' : 'out',
      ]"
    >
      <page1 v-if="item.keys === 'page1'" />
      <page2 v-else-if="item.keys === 'page2'" :load="item.keys === 'page2' && item.load" />
      <page3 v-else-if="item.keys === 'page3'" :load="item.keys === 'page3' && item.load" />
      <page4 v-else-if="item.keys === 'page4'" :load="item.keys === 'page4' && item.load" />
      <page5 v-else-if="item.keys === 'page5'" :load="item.keys === 'page5' && item.load" />
      <page6 v-else-if="item.keys === 'page6'" :load="item.keys === 'page6' && item.load" />
    </div>
    <ul class="nav-ul">
      <li
        v-for="(item,index) in pageConfigList"
        :key="index"
        :class="[
          item.in ? 'active' : '',
          'nav-list'
        ]"
        @click="switchPage(index)"
      />
    </ul>
  </div>
</template>

<script>
import page1 from './components/page1'
import page2 from './components/page2'
import page3 from './components/page3'
import page4 from './components/page4'
import page5 from './components/page5'
import page6 from './components/page6'
import { getTitleInfo, savePic, downMonthDoc } from '@/api/page1'
import domtoimage from './utils/dom-to-image'
export default {
  components: {
    page1,
    page2,
    page3,
    page4,
    page5,
    page6
  },
  data() {
    return {
      dates: 0,
      beforePage: 0,
      title: '',
      pageConfigList: [
        { reverse: false, slide: false, in: true, keys: 'page1', load: true, pagemodule: 'carjr' },
        { reverse: false, slide: false, in: false, keys: 'page2', load: false, pagemodule: 'active' },
        { reverse: false, slide: false, in: false, keys: 'page3', load: false, pagemodule: 'mileage' },
        { reverse: false, slide: false, in: false, keys: 'page4', load: false, pagemodule: 'charge' },
        { reverse: false, slide: false, in: false, keys: 'page5', load: false, pagemodule: 'fault' },
        { reverse: false, slide: false, in: false, keys: 'page6', load: false, pagemodule: 'cloud' }
      ],
      fullscreenLoading: false,
      pagemoduleActive: 'carjr' // 当前页
    }
  },
  mounted() {
    getTitleInfo({ type: 'Title' })
      .then(data => {
        // console.log(data)
        if (data.code === 0) {
          this.title = data.data.title
          return
        }
      })
    this.setUpMouseAndKeyboardMonitor()
  },
  methods: {
    setUpMouseAndKeyboardMonitor() {
      if (document.addEventListener) {
        document.addEventListener(
          'DOMMouseScroll',
          this.throttle(this.scrollFunc),
          false
        )
      }
      window.onmousewheel = this.throttle(this.scrollFunc)
      document.onkeydown = event => {
        event = event || window.event
        var c = event.keyCode
        if (c == 40 || c == 32 || c == 39) {
          this.scrollUp()
        } else if (c == 38 || c == 37) {
          this.scrollDown()
        }
      }
    },
    throttle(fn, time = 200) {
      let timer = null
      return function() {
        if (!timer) {
          timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
          }, time)
        }
      }
    },
    scrollFunc(event) {
      event = event || window.event
      event.delta = event.wheelDelta
        ? event.wheelDelta / 120
        : -(event.detail || 0) / 3

      if (event.delta < 0) {
        this.scrollUp()
      } else {
        this.scrollDown()
      }
    },
    scrollUp() {
      if (this.beforePage >= this.pageConfigList.length - 1) {
        return
      } else {
        const index = this.beforePage + 1
        this.switchPage(index)
      }
    },
    scrollDown() {
      if (this.beforePage < 1) {
        return
      } else {
        const index = this.beforePage - 1
        this.switchPage(index)
      }
    },
    switchPage(index) {
      // alert(index)
      // 点击相同不处理
      if (index === this.beforePage) {
        return
      }
      // 从上到下
      else if (index > this.beforePage) {
        for (let i = 0; i < this.pageConfigList.length; i++) {
          let { reverse, slide, keys, load, pagemodule } = this.pageConfigList[i]
          if (index === i) {
            !load && (load = true)
            this.$set(this.pageConfigList, i, {
              reverse: false,
              slide: true,
              in: true,
              keys,
              load,
              pagemodule
            })
          } else {
            if (i == this.beforePage) {
              this.$set(this.pageConfigList, i, {
                reverse: false,
                slide: true,
                in: false,
                keys,
                load,
                pagemodule
              })
            } else {
              this.$set(this.pageConfigList, i, {
                reverse,
                slide,
                in: false,
                keys,
                load,
                pagemodule
              })
            }
          }
        }
        // console.log(JSON.stringify(this.pageConfigList))
      } else {
        // 反之
        for (let i = 0; i < this.pageConfigList.length; i++) {
          let { keys, load, pagemodule } = this.pageConfigList[i]
          !load && (load = true)
          if (index === i) {
            this.$set(this.pageConfigList, i, {
              reverse: true,
              slide: true,
              in: true,
              keys,
              load,
              pagemodule
            })
          } else {
            if (i == this.beforePage) {
              this.$set(this.pageConfigList, i, {
                reverse: true,
                slide: true,
                in: false,
                keys,
                load,
                pagemodule
              })
            }
          }
        }
      }
      this.beforePage = index
    },
    print() {
      // this.fullscreenLoading = Loading.service({
      //   text: '打印中，请勿执行其他操作...',
      //   background: 'rgba(0,0,0,.2)'
      // })
      // this.switchPage(0)
      // this.getImage(0)
    },
    guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0; var v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    },
    getImage(index) {
      index++
      if (index > this.pageConfigList.length) {
        this.fullscreenLoading.close()
        return false
      }
      var timeBs = this.guid()
      var moduleName = this.pageConfigList[index - 1].pagemodule
      const header = document.getElementById('header')
      const doc = document.getElementById(`page${index}`) // 此处重新设置
      const promise1 = domtoimage.toPng(doc)
      const promise2 = domtoimage.toPng(header)
      promise1.then((imgData1) => {
        promise2.then((imgData2) => {
          const img1 = new Image()
          img1.onload = () => {
            const img2 = new Image()
            img2.onload = () => {
              const bg = new Image()
              bg.src = require('./assets/bg.png')
              const canvas = document.createElement('canvas')
              const context = canvas.getContext('2d')
              canvas.width = img1.width
              canvas.height = img1.height
              bg.onload = () => {
                const swidth = bg.width
                let sheight = bg.width * img1.height / img1.width
                if (sheight > bg.height) {
                  sheight = bg.height
                }
                context.drawImage(bg, 0, 0, swidth, sheight, 0, 0, img1.width, img1.height)
                context.drawImage(img2, 0, 0)
                context.drawImage(img1, 0, 0)
                document.body.appendChild(canvas)
                const dataUrl = canvas.toDataURL()
                document.body.removeChild(canvas)
                const img = new Image()
                img.src = dataUrl
                // 调试代码，传给后端只需每次传入src即可
                // let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                // window.location.href=image;
                // 页面只需要切换5次，打印需要6次阻断最有一次自动跳转
                index < this.pageConfigList.length && this.switchPage(index)
                setTimeout(() => {
                  return this.getImage(index)
                }, 2000)
                // 发送
                var dataSend = {
                  timeBs: timeBs,
                  url: dataUrl,
                  name: moduleName
                }
                savePic(dataSend).then(data => {
                  if (data.code === 0) {
                    if (index === this.pageConfigList.length) {
                      const data1 = {
                        timeBs: timeBs,
                        downType: 'pdf',
                        docData: {}
                      }
                      downMonthDoc(data1).then(data => {
                      // if (data != '') {
                      //   window.location.href = data
                      // }
                      })
                    }
                  }
                })
              }
            }
            img2.src = imgData2
          }
          img1.src = imgData1
        })
      })
    }
  }
}

</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  position: relative;
  background: #04090d url('./assets/bg.png') no-repeat;
  background-size: cover;
  header{
    img{
      // height: 28%;
      padding-top: 0.5rem;
      width: 28%;
      background-size: cover;
    }
    .titlePart{
      position: absolute;
      top: 2.8rem;
      width: 100%;
      left: 18rem;
      .header-title{
        display: inline-block;
        color: #45a1ff;
        margin-left: -39rem;
        font-size: 0.7rem;
      }
      .header-print{
        position: absolute;
        background: url('./assets/btnPrint.png') no-repeat center;
        z-index: 10;
        width: 3rem;
        height: 1.2rem;
        display: inline-block;
        background-size: contain;
        vertical-align: middle;
        cursor: pointer;
      }
    }

  }
  .page {
    height: 100%;
    width: 100%;
    // padding: 50px;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    background: transparent;
  }
  .nav-ul {
    list-style: none;
    position: absolute;
    top: 50%;
    right: 30px;
    width: 8px;
    // pointer-events: none;
    transform: translateY(-50%);
    li {
      width: 8px;
      height: 8px;
      background: #fff;
      display: block;
      margin: 15px;
      border-radius: 50%;
      background-color: #cacaca;
      cursor: pointer;
      &.active {
        background: #1981ff;
      }
    }
  }
}

// 动画代码
.out{
  // display: none
  // top: 100% !important;
  transform: translateY(100%);
}

.in,
.out {
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.in {
  -webkit-animation-timing-function: ease-out;
  -webkit-animation-duration: 300ms;
  animation-timing-function: ease-out;
  animation-duration: 300ms;
}
.out {
  -webkit-animation-timing-function: ease-in;
  -webkit-animation-duration: 300ms;
  animation-timing-function: ease-in;
  animation-duration: 300ms;
}
/* slide */
.slide.in {
  -webkit-animation-name: slideinfrombottom;
  animation-name: slideinfrombottom;
}
.slide.out {
  -webkit-animation-name: slideouttotop;
  animation-name: slideouttotop;
}
.slide.in.reverse {
  -webkit-animation-name: slideinfromtop;
  animation-name: slideinfromtop;
}
.slide.out.reverse {
  -webkit-animation-name: slideouttobottom;
  animation-name: slideouttobottom;
}
@-webkit-keyframes slideinfrombottom {
  from {
    -webkit-transform: translateY(100%);
  }
  to {
    -webkit-transform: translateY(0);
  }
}
@keyframes slideinfrombottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@-webkit-keyframes slideouttotop {
  from {
    -webkit-transform: translateY(0);
  }
  to {
    -webkit-transform: translateY(-100%);
  }
}
@keyframes slideouttotop {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
@-webkit-keyframes slideinfromtop {
  from {
    -webkit-transform: translateY(-100%);
  }
  to {
    -webkit-transform: translateY(0);
  }
}
@keyframes slideinfromtop {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@-webkit-keyframes slideouttobottom {
  from {
    -webkit-transform: translateY(0);
  }
  to {
    -webkit-transform: translateY(100%);
  }
}
@keyframes slideouttobottom {
  from {
    -webkit-transform: translateY(0);
  }
  to {
    -webkit-transform: translateY(100%);
  }
}
</style>
