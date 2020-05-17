import { success } from '../utils/response'
// import Mock from 'mockjs'
/*************************第1页******************************/
const getTitleInfo = () => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() > 9 ? new Date().getMonth() : '0' + new Date().getMonth()
  const result = {
    data: {
      title: `${year}.${month}月份车辆运营报告`
    }
  } 
  return success(result)
}

const getMonitorInfo = () => {
  const result = {
    data: {
      "total": 50.0,
      "news": 3627.0,
      "totalmile": 54788.0,
      "savingmoney": 24107.0,
      "emissionredution": 93359.0,
      "bigtrees": 34.0,
      "carrise": -2250.0,
      "list": '[{"CITY":"北京","COUNT":64356},{"CITY":"山东","COUNT":82335},{"CITY":"江西","COUNT":6357},{"CITY":"河南","COUNT":24928},{"CITY":"河北","COUNT":30160},{"CITY":"广东","COUNT":50213},{"CITY":"陕西","COUNT":8384},{"CITY":"辽宁","COUNT":1340},{"CITY":"山西","COUNT":8281},{"CITY":"天津","COUNT":12819},{"CITY":"海南","COUNT":3056},{"CITY":"内蒙古自治区","COUNT":1035},{"CITY":"浙江","COUNT":26712},{"CITY":"吉林","COUNT":722},{"CITY":"黑龙江","COUNT":704},{"CITY":"江苏","COUNT":21191},{"CITY":"湖北","COUNT":6620},{"CITY":"安徽","COUNT":6023},{"CITY":"福建","COUNT":12505},{"CITY":"上海","COUNT":7449},{"CITY":"湖南","COUNT":49958},{"CITY":"四川","COUNT":10317},{"CITY":"甘肃","COUNT":3248},{"CITY":"云南","COUNT":10240},{"CITY":"广西壮族自治区","COUNT":1412},{"CITY":"贵州","COUNT":4346},{"CITY":"宁夏回族自治区","COUNT":324},{"CITY":"重庆","COUNT":2723},{"CITY":"青海","COUNT":167},{"CITY":"新疆维吾尔自治区","COUNT":83}]',
      "list2": '[{"CARTYPENAME":"EU系列","CARCOUNT":2110},{"CARTYPENAME":"EC系列","CARCOUNT":1262},{"CARTYPENAME":"EX系列","CARCOUNT":92},{"CARTYPENAME":"N6系列","CARCOUNT":68},{"CARTYPENAME":"EV系列","CARCOUNT":55},{"CARTYPENAME":"其他","CARCOUNT":33}]'
    }
		
	}
  return success(result)
}

/*************************第2页******************************/

const getActive = () => {
  const result = {
    "code": 0,
    "message": "请求成功",
    "data": {
      "dayactivecount": 47697,
      "activehb": -8278,
      "dayactiverate": 12,
      "monthactivecount": 29,
      "monthactiverate": 80,
      "rise": 8278,
      "list": '[{"CITYNAME":"北京","ACTIVECOUNT":52720.0},{"CITYNAME":"青岛","ACTIVECOUNT":22373.0},{"CITYNAME":"广州","ACTIVECOUNT":14080.0},{"CITYNAME":"天津","ACTIVECOUNT":8221.0},{"CITYNAME":"昆明","ACTIVECOUNT":7267.0}]',
      "xsRate": '[{"CarTypeName":"EC3","ActiveCount":23652,"Rise":-1621},{"CarTypeName":"EU260","ActiveCount":19049,"Rise":-779},{"CarTypeName":"EU5","ActiveCount":36368,"Rise":-499},{"CarTypeName":"EC220","ActiveCount":17333,"Rise":-1283},{"CarTypeName":"EX360","ActiveCount":26713,"Rise":-279},{"CarTypeName":"EC200","ActiveCount":24675,"Rise":-286},{"CarTypeName":"EC180","ActiveCount":78710,"Rise":-773},{"CarTypeName":"EV160","ActiveCount":18078,"Rise":-355},{"CarTypeName":"EU300","ActiveCount":5780,"Rise":-816},{"CarTypeName":"其他","ActiveCount":9371,"Rise":-229}]'
    }
  }
  return success(result)
}

/*************************第3页******************************/
const getMileageInfo = ()=> {
  const result = {
    "code": 0,
    "message": "请求成功",
    "data": {
      "reachingstandardcarcount": 0,
      "totalmileage": 26493,
      "mileagelist": '[{"name":"0-20km","value":215877.0},{"name":"20-50km","value":82761.0},{"name":"50-100km","value":27919.0},{"name":"100-150km","value":7596.0},{"name":"150-200km","value":5645.0},{"name":"200km以上","value":7854.0}]',
      "cartypelist": '[{"CARTYPENAME":"EC200","MILEAGE":691389.21},{"CARTYPENAME":"其他","MILEAGE":236310.55},{"CARTYPENAME":"对标车","MILEAGE":18.32},{"CARTYPENAME":"EU400","MILEAGE":32525.29},{"CARTYPENAME":"C50EB","MILEAGE":47.5},{"CARTYPENAME":"EH300","MILEAGE":2786.64},{"CARTYPENAME":"九龙海狮","MILEAGE":146.21},{"CARTYPENAME":"EV150","MILEAGE":0},{"CARTYPENAME":"EC3","MILEAGE":138450.11},{"CARTYPENAME":"EU300","MILEAGE":395815.5},{"CARTYPENAME":"EX5","MILEAGE":1748.71},{"CARTYPENAME":"威旺407EV","MILEAGE":114948.54},{"CARTYPENAME":"EU5","MILEAGE":1964424.56},{"CARTYPENAME":"EC180","MILEAGE":1984786.39},{"CARTYPENAME":"EX200","MILEAGE":146168.86},{"CARTYPENAME":"EC280","MILEAGE":326.32},{"CARTYPENAME":"E150EV","MILEAGE":132377.57},{"CARTYPENAME":"Q60FB","MILEAGE":0},{"CARTYPENAME":"C33DB","MILEAGE":5.32},{"CARTYPENAME":"EX260","MILEAGE":68481.93},{"CARTYPENAME":"C50EB-C03","MILEAGE":0.04},{"CARTYPENAME":"EC5","MILEAGE":3.07},{"CARTYPENAME":"C53FB","MILEAGE":238.1},{"CARTYPENAME":"EC220","MILEAGE":184055.04},{"CARTYPENAME":"EX360","MILEAGE":1022817.5},{"CARTYPENAME":"EV160","MILEAGE":583678.79},{"CARTYPENAME":"EU220","MILEAGE":189596.36},{"CARTYPENAME":"EX3","MILEAGE":3617.58},{"CARTYPENAME":"C50EB-C04","MILEAGE":0},{"CARTYPENAME":"银翔","MILEAGE":0},{"CARTYPENAME":"威旺308EV","MILEAGE":0},{"CARTYPENAME":"绅宝EV","MILEAGE":6121.29},{"CARTYPENAME":"LITE","MILEAGE":9106.75},{"CARTYPENAME":"北斗星E","MILEAGE":2902.68},{"CARTYPENAME":"C50EB-Z01","MILEAGE":0},{"CARTYPENAME":"N60AB","MILEAGE":0},{"CARTYPENAME":"EU260","MILEAGE":1259317.11},{"CARTYPENAME":"威旺307EV","MILEAGE":125792.57},{"CARTYPENAME":"EV300","MILEAGE":14119.79},{"CARTYPENAME":"EV200","MILEAGE":149126.93},{"CARTYPENAME":"威旺608EV","MILEAGE":693}]',
      "dayMileageList": '[{"DATETIME":"01","MILEAGE":9868926.40},{"DATETIME":"02","MILEAGE":9294944.50},{"DATETIME":"03","MILEAGE":8317266.10},{"DATETIME":"04","MILEAGE":6113760.40},{"DATETIME":"05","MILEAGE":5959020.50},{"DATETIME":"06","MILEAGE":7055863.70},{"DATETIME":"07","MILEAGE":7171774.20},{"DATETIME":"08","MILEAGE":7402641.10},{"DATETIME":"09","MILEAGE":7749231.60},{"DATETIME":"10","MILEAGE":8113423.10},{"DATETIME":"11","MILEAGE":9255720.90},{"DATETIME":"12","MILEAGE":9502587.90},{"DATETIME":"13","MILEAGE":9712124.10},{"DATETIME":"14","MILEAGE":9324734.30},{"DATETIME":"15","MILEAGE":9665385.70},{"DATETIME":"16","MILEAGE":9881236.20},{"DATETIME":"17","MILEAGE":9725881.40},{"DATETIME":"18","MILEAGE":10091158.50},{"DATETIME":"19","MILEAGE":9954700.20},{"DATETIME":"20","MILEAGE":10814885.70},{"DATETIME":"21","MILEAGE":10646160.40},{"DATETIME":"22","MILEAGE":11145611.30},{"DATETIME":"23","MILEAGE":10880302.50},{"DATETIME":"24","MILEAGE":10687863.10},{"DATETIME":"25","MILEAGE":11603200.70},{"DATETIME":"26","MILEAGE":11520879.60},{"DATETIME":"27","MILEAGE":11682274.50},{"DATETIME":"28","MILEAGE":11792876.30}]'
    }
  }
  return success(result)
}
/*************************第4页******************************/
const getChargeInfo = ()=> {
  const result = {
    "code": 0,
    "message": "请求成功",
    "data":{
      "list1": '[{"Name":"00:00-04:00","QuickTime":15.62,"QuickCount":23291,"NotQuickTime":17936.15,"NotQuickCount":163730},{"Name":"04:00-08:00","QuickTime":10.04,"QuickCount":16198,"NotQuickTime":22750.8,"NotQuickCount":207229},{"Name":"08:00-12:00","QuickTime":25.69,"QuickCount":40996,"NotQuickTime":13857.78,"NotQuickCount":166315},{"Name":"12:00-16:00","QuickTime":32.58,"QuickCount":52576,"NotQuickTime":12074.06,"NotQuickCount":160941},{"Name":"16:00-20:00","QuickTime":26.93,"QuickCount":45541,"NotQuickTime":12199.44,"NotQuickCount":157756},{"Name":"20:00-24:00","QuickTime":25.46,"QuickCount":40096,"NotQuickTime":12087.29,"NotQuickCount":139937}]',
      "list2": '[{"CARTYPENAME":"威旺307EV","MINUTE":26519,"NUM":304400},{"CARTYPENAME":"EV160","MINUTE":13924,"NUM":183147},{"CARTYPENAME":"EU300","MINUTE":3339,"NUM":72374},{"CARTYPENAME":"EV200","MINUTE":8414,"NUM":74676},{"CARTYPENAME":"E150EV","MINUTE":1912,"NUM":22783},{"CARTYPENAME":"EU260","MINUTE":1883,"NUM":34473},{"CARTYPENAME":"EU220","MINUTE":1330,"NUM":43509}]',
      "list3": '[{"Name":"0-20%","StartSocRate":41.16,"EndSocRate":76.45},{"Name":"20-40%","StartSocRate":11.1,"EndSocRate":7.22},{"Name":"40-60%","StartSocRate":13.02,"EndSocRate":7.97},{"Name":"60-80%","StartSocRate":8.51,"EndSocRate":5.51},{"Name":"80-100%","StartSocRate":26.2,"EndSocRate":2.86}]',
      "list4": '[{"Name":"0-20%","StartSocRate":25.56,"EndSocRate":76.21},{"Name":"20-40%","StartSocRate":15.56,"EndSocRate":7.24},{"Name":"40-60%","StartSocRate":18.97,"EndSocRate":8.52},{"Name":"60-80%","StartSocRate":14.29,"EndSocRate":5.25},{"Name":"80-100%","StartSocRate":25.63,"EndSocRate":2.78}]'
    }
  }
  return success(result)
}
/*************************第5页******************************/
const GetFaultInfo = ()=> {
  // debugger
  const result = {
    "code": 0,
    "message": "请求成功",
    "data":{
      cartypefault: '[{"CARTYPENAME":"E150EV","ACTIVERATE":64.01,"FAULTRATE":35.14},{"CARTYPENAME":"威旺307EV","ACTIVERATE":60.41,"FAULTRATE":9.42},{"CARTYPENAME":"EU5","ACTIVERATE":96.81,"FAULTRATE":6.29},{"CARTYPENAME":"EC200","ACTIVERATE":92.58,"FAULTRATE":4.81},{"CARTYPENAME":"EC180","ACTIVERATE":93.2,"FAULTRATE":4.77},{"CARTYPENAME":"EU260","ACTIVERATE":70.23,"FAULTRATE":4.69},{"CARTYPENAME":"EX360","ACTIVERATE":91.85,"FAULTRATE":4.04},{"CARTYPENAME":"EV160","ACTIVERATE":78.56,"FAULTRATE":1.67},{"CARTYPENAME":"EV200","ACTIVERATE":60.45,"FAULTRATE":1.61},{"CARTYPENAME":"其他","ACTIVERATE":48.95,"FAULTRATE":0.2}]',
      faultcar: 159124,
      faultlelist: '[{"FLEVEL":1,"FAULTLEVEL":"一级故障","FAULECOUNT":254736},{"FLEVEL":2,"FAULTLEVEL":"二级故障","FAULECOUNT":5976393},{"FLEVEL":3,"FAULTLEVEL":"三级故障","FAULECOUNT":7416752},{"FLEVEL":4,"FAULTLEVEL":"四级故障","FAULECOUNT":5042755}]',
      faultlv: 43.87,
      faulttal: 3977,
      list1: '[{"PARTNAME":"VMS_BMS","FAULECOUNT":388556,"FAULERATE":45.54},{"PARTNAME":"MCU","FAULECOUNT":249959,"FAULERATE":29.3},{"PARTNAME":"VBU_VCU","FAULECOUNT":150654,"FAULERATE":17.66},{"PARTNAME":"VMS_VCU","FAULECOUNT":55455,"FAULERATE":6.5},{"PARTNAME":"VBU_BMS","FAULECOUNT":8601,"FAULERATE":1.01}]',
      list2: '[{"PARTNAME":"BMU","FAULECOUNT":3660828,"FAULERATE":62.99},{"PARTNAME":"MCU","FAULECOUNT":1097495,"FAULERATE":18.88},{"PARTNAME":"VMS_VCU","FAULECOUNT":770443,"FAULERATE":13.26},{"PARTNAME":"BMS","FAULECOUNT":168154,"FAULERATE":2.89},{"PARTNAME":"BCU","FAULECOUNT":115257,"FAULERATE":1.98}]',
      list3: '[{"PARTNAME":"VMS_VCU","FAULECOUNT":5074365,"FAULERATE":71.96},{"PARTNAME":"Vehicle","FAULECOUNT":857348,"FAULERATE":12.16},{"PARTNAME":"BMU","FAULECOUNT":629226,"FAULERATE":8.92},{"PARTNAME":"PCU","FAULECOUNT":283948,"FAULERATE":4.03},{"PARTNAME":"VMS_BMS","FAULECOUNT":206628,"FAULERATE":2.93}]',
      list4: '[{"PARTNAME":"MCU","FAULECOUNT":1793634,"FAULERATE":50.02},{"PARTNAME":"BMS","FAULECOUNT":678070,"FAULERATE":18.91},{"PARTNAME":"Vehicle","FAULECOUNT":473247,"FAULERATE":13.2},{"PARTNAME":"PTC","FAULECOUNT":336773,"FAULERATE":9.39},{"PARTNAME":"OBC","FAULECOUNT":304408,"FAULERATE":8.49}]',
}
  }
  return success(result)
}

/*************************第6页******************************/
const GetCloudInfo = ()=> {
  // debugger
  const result = {
    "code": 0,
    "message": "请求成功",
    "data":{
      activecount: 30,
      activerise: 0.58,
      android: 5145,
      cloudcount: 5166,
      femalecount: "",
      ios: 231,
      list: '[{"NAME":"远程空调控制","COUNT":"75","RATE":"25.25"},{"NAME":"远程充电控制","COUNT":"222","RATE":"74.75"},{"NAME":"远程车门控制","COUNT":"0","RATE":"0"},{"NAME":"","COUNT":"","RATE":""},{"NAME":"","COUNT":"","RATE":""}]',      malecount: 133,
      userate: 61,
      userlist: '[{"NAME":"60后","COUNT":1,"RATE":20.0},{"NAME":"70后","COUNT":0,"RATE":0.0},{"NAME":"80后","COUNT":4,"RATE":80.0},{"NAME":"90后","COUNT":0,"RATE":0.0}]'
}
  }
  return success(result)
}

export {
  getTitleInfo,
  getMonitorInfo,
  getActive,
  getMileageInfo,
  getChargeInfo,
  GetFaultInfo,
  GetCloudInfo
}