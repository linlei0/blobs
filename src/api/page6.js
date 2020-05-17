import request from '@/utils/request'

function getCloudInfo(data) {
  return request({
    url: 'GetCloudInfo',
    method: 'post',
    data
  })
}

export {
  getCloudInfo
}
