import request from '@/utils/request'

function getChargeInfo() {
  return request({
    url: 'GetChargeInfo',
    method: 'post'
  })
}

export {
  getChargeInfo
}
