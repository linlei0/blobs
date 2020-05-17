import Mock from 'mockjs'
import { 
  getTitleInfo,
  getMonitorInfo,
  getActive,
  getMileageInfo,
  getChargeInfo,
  GetFaultInfo,
  GetCloudInfo
 } from './module/page'

Mock.setup({
  timeout: 50
})
window.Mock = Mock
// pagge1
Mock.mock(/month\/getMonth/,'post',getTitleInfo)
Mock.mock(/get\/monitorInfo/,'post',getMonitorInfo)
// page2
Mock.mock(/GetActiveInfo/,'post',getActive)
// page3
Mock.mock(/GetMileageInfo/,'post',getMileageInfo)
// page4 
Mock.mock(/GetChargeInfo/,'post',getChargeInfo)
// page5
Mock.mock(/GetFaultInfo/,'post',GetFaultInfo)
// page6
Mock.mock(/GetCloudInfo/,'post',GetCloudInfo)

export default Mock