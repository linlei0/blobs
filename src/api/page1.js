import request from '@/utils/request'

/**
 * 获取月报title
 * @param {*} data
 */
function getTitleInfo(data) {
  return request({
    url: 'month/getMonth',
    method: 'post',
    data
  })
}
/**
 * 获取页面数据
 * @param {*} data
 */
function getMonitorInfo(data) {
  return request({
    url: 'get/monitorInfo',
    method: 'post',
    data
  })
}

/**
 * 打印
 * @param {*} data
 */
function savePic(data) {
  return request({
    url: 'month/savePic',
    method: 'post',
    data
  })
}

/**
 * pdf下载
 * @param {*} data
 */
function downMonthDoc(data) {
  return request({
    url: 'month/downMonth',
    method: 'post',
    data,
    responseType: 'arraybuffer'
  })
}

export {
  // getList,
  getTitleInfo,
  getMonitorInfo,
  savePic,
  downMonthDoc
}
