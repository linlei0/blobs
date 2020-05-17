import request from '@/utils/request'

function getFaultInfo() {
  return request({
    url: 'GetFaultInfo',
    method: 'post'
  })
}

export {
  getFaultInfo
}
