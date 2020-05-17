const success = (obj) => {
  const defaultMsg = { code: 0, success: true }
  return { ...defaultMsg,...obj }
}
const errorCode = [-1, -2, 100]
const error = (obj) => {
  const defaultMsg = { code: errorCode[Math.floor(Math.random()*3)], success: true }
  return { ...defaultMsg, ...obj }
}
export {
  success,
  error
}
