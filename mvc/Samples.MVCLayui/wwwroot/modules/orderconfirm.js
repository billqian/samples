/// <reference path="../typings/JQueryStatic.d.ts" />
/// <reference path="../typings/layui.d.ts" />
/// <reference path="../typings/misc.d.ts" />
var OrderConfirm = /** @class */ (function () {
    function OrderConfirm() {
        this.data = {
            orderno: ""
        };
    }
    OrderConfirm.prototype.CheckInput = function () {
        //if (!!JSON.parse(sessionStorage.getItem("checkinpersoninfo"))) {
        //    return true;
        //}
        //else {
        //    return false;
        //}
        return true;
    };
    OrderConfirm.prototype.GetModuleResult = function () {
        return JSON.parse(sessionStorage.getItem("orderinfo"));
    };
    OrderConfirm.prototype.QueryOrder = function () {
        var checkinpersoninfo = JSON.parse(sessionStorage.getItem("checkinpersoninfo"));
        this.data = { orderno: "123456" };
        sessionStorage.setItem("orderinfo", JSON.stringify(this.data));
        return this.data;
    };
    return OrderConfirm;
}());
//如下，以后即可使用layui.test... 使用了
layui.define(['layer'], function (exports) {
    exports('orderconfirm', new OrderConfirm());
});
//# sourceMappingURL=orderconfirm.js.map