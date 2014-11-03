#chinese-random-ip
chinese-random-ip 是一个随机生成中国IP地址的nodejs模块工具

##使用方式

###API
getChineseIp([provinceArray|provinceName])
####概述
	随机产生一个中国IP，可以通过一个可选省份列表或者省份名称来限定ip的产生范围

####参数
	provinceArray为数组类型，是可选的，表示省份列表，用于指定ip产生范围
	provinceName为字符串类型，是可选的，表示省份名称，用于指定ip产生范围

####返回值
	返回一个随机的ip地址
	如果指定的省份不存在，则返回null

####有效果的省份名称：
上海,云南,内蒙,北京,台湾,吉林,四川,天津,宁夏,安徽,山东,山西,广东,广西,新疆,江苏
江西,河北,河南,浙江,海南,湖北,湖南,甘肃,福建,西藏,贵州,辽宁,重庆,陕西,青海,香港
黑龙江

###示例

```
 var randomIp= require('chinese-random-ip');

 var ipAddress = randomIp.getChineseIp();
 console.log(ipAddress);//可能输出: 58.194.64.3

 ipAddress = randomIp.getChineseIp("福建");
 console.log(ipAddress);

 ipAddress = app.getChineseIp(["福建","浙江","江苏","广东"]);
 console.log(ipAddress);

```
*注意：ip地址库可能会过期。*



