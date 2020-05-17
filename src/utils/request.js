import axios from 'axios'
// import { Message } from 'element-ui'
// import { removeToken, getRefreshToken, getToken, setToken, getUserLanguage } from './auth'
import { getToken } from './auth'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 30 * 1000,
  isRetryRequest: false
})
// 获取新token
// function getNewToken() {
//   const data = {
//     refreshToken: getRefreshToken()
//   }
//   return axios.post('/api/login/refreshToken', data)
// }
// function toLogin() {
//   window.location.href = '/'
// }
// 请求拦截
service.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = token
    }
    if (config.method === 'get') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    } else {
      config.headers['Content-Type'] = 'application/json'
    }
    // config.headers['language'] = getUserLanguage() || 'en'
    return config
  },
  error => {
    // TODO: 多语言
    Promise.reject(error)
  }
)
// 响应拦截
service.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return response.data
    } 
   
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break
        case 404:
          break
        case 500:
          break
        default:
          break
      }
    }
    return Promise.reject(error)
  }
)

export default service
