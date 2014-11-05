
var app = require("../app.js");
describe("中国ip随机生成器测试", function () {
    it("应该能随机生成一个符合格式的中国IP", function () {
        var chineseIp = app.getChineseIp();
        expect(chineseIp).toMatch(/(\d{1,3}\.){2}(\d{1,3}\.)/);

        chineseIp = app.getChineseIp("");
        expect(chineseIp).toMatch(/(\d{1,3}\.){2}(\d{1,3}\.)/);

        chineseIp = app.getChineseIp(null);
        expect(chineseIp).toMatch(/(\d{1,3}\.){2}(\d{1,3}\.)/);

    });

    it("生成结果应该为null", function () {
        var chineseIp = app.getChineseIp({error:"error params"});
        expect(chineseIp).toBe(null);

        chineseIp = app.getChineseIp({});
        expect(chineseIp).toBe(null);

        chineseIp = app.getChineseIp("常山");
        expect(chineseIp).toBe(null);

        chineseIp = app.getChineseIp([]);
        expect(chineseIp).toBe(null);
    });

    it("应该能随机生成指定区域的ip", function () { 
        var   chineseIp = app.getChineseIp("福建");
        expect(chineseIp).toMatch(/(\d{1,3}\.){2}(\d{1,3}\.)/);
       
        chineseIp = app.getChineseIp(["福建","浙江","江苏","广东"]);
        expect(chineseIp).toMatch(/(\d{1,3}\.){2}(\d{1,3}\.)/);

        chineseIp = app.getChineseIp(["台湾","香港"]);
        expect(chineseIp).toMatch(/(\d{1,3}\.){2}(\d{1,3}\.)/);
    });

    it("生成的IP地址应该在指定区域", function (done) {//可能我们的ip地址库已经过时了，所有用淘宝ip来检查一下
        var request = require('request');
        var provinceName = "香港";
        var chineseIp = app.getChineseIp(provinceName);
        request('http://ip.taobao.com/service/getIpInfo.php?ip=' + chineseIp, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var ipInfo = JSON.parse(body);
                expect(ipInfo.data.region).toContain(provinceName);
                done();
            }
        });
    });
});