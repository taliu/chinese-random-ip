/*
 * chinese-random-ip
 * https://github.com/taliu/chinese-random-ip
 *
 * Copyright (c) 2014 taliu
 * Licensed under the MIT license.
 */

var chineseIps=require('./chineseIp.json');
var ip = require('ip');
//随机产生一个中国IP
function getChineseIp(provinceArray){
	var provinceArray=provinceArray||getProvinces(chineseIps);
	if(!(provinceArray instanceof Array)){
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

 