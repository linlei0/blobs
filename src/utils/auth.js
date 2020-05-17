import Cookies from 'js-cookie'
const TokenKey = 'JWT-BJEV-Token'
// const UserLanguage = 'user-language'
// 请求token
function getToken() {
  if( process.env.VUE_APP_NODE_ENV==="development"){
    return process.env.VUE_APP_TOKEN
  }
  return Cookies.get(TokenKey)
}
function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 360 * 50 })
}
function removeToken() {
  return Cookies.remove(TokenKey)
}
// 用户语言设置
// function getUserLanguage() {
//   return Cookies.get(UserLanguage)
// }
// function setUserLanguage(token) {
//   return Cookies.set(UserLanguage, token, { expires: 360 * 50 })
// }
// function removeUserLanguage() {
//   return Cookies.remove(UserLanguage)
// }

export {
  getToken,
  setToken,
  removeToken,
  // getUserLanguage,
  // setUserLanguage,
  // removeUserLanguage
}
