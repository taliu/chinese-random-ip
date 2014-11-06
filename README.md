
## chinese-random-ip

 一个随机生成中国IP地址的nodejs模块。

## 安装

```
npm install chinese-random-ip
```

### 使用示例

```
 var randomIp= require('chinese-random-ip');

 var ipAddress = randomIp.getChineseIp();
 console.log(ipAddress);//随机输出如：58.194.64.3

 ipAddress = randomIp.getChineseIp("福建");
 console.log(ipAddress);//随机输出一个福建的ip地址

 ipAddress = app.getChineseIp(["福建","浙江","江苏"]);
 console.log(ipAddress);//随机输出一个福建,浙江或江苏的ip地址

```

### API参考

```
getChineseIp([provinceArray|provinceName])
```

#### 概述

	随机产生一个中国IP，可以通过一个可选省份列表或者省份名称来限定ip的产生范围

#### 参数
	provinceArray为数组类型，是可选的，表示省份列表，用于指定ip产生范围
	provinceName为字符串类型，是可选的，表示省份名称，用于指定ip产生范围
省份名称的有效值有：
	上海,云南,内蒙,北京,台湾,吉林,四川,天津,宁夏,安徽,山东,山西,广东,广西,新疆,江苏
江西,河北,河南,浙江,海南,湖北,湖南,甘肃,福建,西藏,贵州,辽宁,重庆,陕西,青海,香港
黑龙江

#### 返回值
	返回一个随机的ip地址
	如果指定的省份不存在，则返回null

*注意：ip地址库可能会过期。*



