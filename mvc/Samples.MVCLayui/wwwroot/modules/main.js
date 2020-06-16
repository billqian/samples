/// <reference path="../typings/JQueryStatic.d.ts" />
/// <reference path="../typings/layui.d.ts" />
/// <reference path="../typings/misc.d.ts" />
/// <reference path="checkinpersoninfo.ts" />
/// <reference path="orderconfirm.ts" />
var Main = /** @class */ (function () {
    function Main() {
        this.cpi = new CheckInPersonInfo();
        this.oc = new OrderConfirm();
    }
    Main.prototype.CollectCheckInPersonInfo = function () {
        var checkResult = this.cpi.CheckInput();
        if (checkResult) {
            location.href = "/checkin/idcard";
        }
        else {
            layui.layer.msg('输入条件未通过');
            location.href = "/home/index";
        }
    };
    Main.prototype.FinishCheckInPersonInfo = function () {
        var checkResult = this.oc.CheckInput();
        if (checkResult) {
            location.href = "/checkin/order";
        }
        else {
            layui.layer.msg('输入条件未通过');
            location.href = "/home/index";
        }
    };
    return Main;
}());
layui.define(['layer'], function (exports) {
    exports('main', new Main());
});
//# sourceMappingURL=main.js.map