import request from '@/utils/request'

function getActive() {
  return request({
    url: 'GetActiveInfo',
    method: 'post'
  })
}

export {
  getActive
}
