import request from '@/utils/request'

function getMileageInfo() {
  return request({
    url: 'GetMileageInfo',
    method: 'post'
  })
}

export {
  getMileageInfo
}
