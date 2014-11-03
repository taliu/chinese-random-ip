/*
chineseIp.json的格式：
{
"provinceName1":[{min:"127.0.0.1",max:"128.0.0.1"},...],
"provinceName2":[{min:"129.0.0.1",max:"130.0.0.1"},...],
...
}
*/
var chineseIps=require('./chineseIp.json');
var ip = require('ip');
/*
getChineseIp([provinceArray|provinceName])

概述
	随机产生一个中国IP，可以通过一个可选省份列表或者省份名称来限定ip的产生范围
参数
	provinceArray为数组类型，是可选的，表示省份列表，用于指定ip产生范围
	provinceName为字符串类型，是可选的，表示省份名称，用于指定ip产生范围
返回值
	返回一个随机的ip地址
	如果指定的省份不存在，则返回null

 *有效果的省份名称：
上海,云南,内蒙,北京,台湾,吉林,四川,天津,宁夏,安徽,山东,山西,广东,广西,新疆,江苏
江西,河北,河南,浙江,海南,湖北,湖南,甘肃,福建,西藏,贵州,辽宁,重庆,陕西,青海,香港
黑龙江
 * 
*/
function getChineseIp(provinceArray){
	var provinceArray=provinceArray||getProvinces(chineseIps);
	if(!(provinceArray instanceof Array)){//是一个省的名称时
		provinceArray=[provinceArray];
	}
	var provinceName=getRandomItem(provinceArray);
	var ipAddress=getProvinceRandomIp(provinceName);
	return ipAddress;
}
 

//随机产生指定省的随机ip
function getProvinceRandomIp(provinceName){
	var ipAddress=null;
	if(chineseIps.hasOwnProperty(provinceName)){
		provinceIps=chineseIps[provinceName];
	    var item=getRandomItem(provinceIps);//获取ip地址段
		ipAddress=getRandomIp(item.min,item.max);
	} 
	return ipAddress;
}

//随机返回minIp到maxIp之间的ip，包括minIp和maxIp
function getRandomIp(minIp, maxIp){
	var min=ip.toLong(minIp);
	var max=ip.toLong(maxIp);
	var randomNum=getRandomNum(min,max+1);
	return ip.fromLong(randomNum);
}

//获取中国各省市名称
function getProvinces(chineseIps){
	var provinces=[];
	for(var province in chineseIps){
		provinces.push(province);
    }
    return provinces;
}

//随机产生指定列表中的元素
function getRandomItem(list){
   var index=getRandomNum(0,list.length);
   return list[index]; 
}


//随机返回min到max之间的整数，但不包括max
function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

exports.getChineseIp=getChineseIp;

 