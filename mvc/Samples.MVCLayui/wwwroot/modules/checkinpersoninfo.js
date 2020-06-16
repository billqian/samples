/// <reference path="../typings/JQueryStatic.d.ts" />
/// <reference path="../typings/layui.d.ts" />
/// <reference path="../typings/misc.d.ts" />
var CheckInPersonInfo = /** @class */ (function () {
    function CheckInPersonInfo() {
        this.data = {
            name: "",
            mobile: "",
            idcard: ""
        };
    }
    CheckInPersonInfo.prototype.CheckInput = function () {
        return true;
    };
    CheckInPersonInfo.prototype.GetModuleResult = function () {
        return JSON.parse(sessionStorage.getItem("checkinpersioninfo"));
    };
    CheckInPersonInfo.prototype.ReadCard = function () {
        var _a;
        this.data = (_a = JSON.parse(sessionStorage.getItem("checkinpersioninfo"))) !== null && _a !== void 0 ? _a : {
            name: "",
            mobile: "",
            idcard: ""
        };
        this.data.name = "许佳文";
        this.data.idcard = "32058392294473882X";
        sessionStorage.setItem("checkinpersioninfo", JSON.stringify(this.data));
        return this.data;
    };
    CheckInPersonInfo.prototype.SetMobile = function (mobile) {
        var _a;
        this.data = (_a = JSON.parse(sessionStorage.getItem("checkinpersioninfo"))) !== null && _a !== void 0 ? _a : {
            name: "",
            mobile: "",
            idcard: ""
        };
        this.data.mobile = mobile;
        sessionStorage.setItem("checkinpersioninfo", JSON.stringify(this.data));
        return this.data;
    };
    return CheckInPersonInfo;
}());
//如下，以后即可使用layui.test... 使用了
layui.define(['layer'], function (exports) {
    exports('checkinpersoninfo', new CheckInPersonInfo());
});
//# sourceMappingURL=checkinpersoninfo.js.map