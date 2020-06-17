/// <reference path="../typings/JQueryStatic.d.ts" />
/// <reference path="../typings/layui.d.ts" />
/// <reference path="../typings/misc.d.ts" />
/// <reference path="checkinpersoninfo.ts" />
/// <reference path="orderconfirm.ts" />

class Main {
    cpi: CheckInPersonInfo;
    oc: OrderConfirm;

    constructor() {
        this.cpi = new CheckInPersonInfo();
        this.oc = new OrderConfirm();
    }

    public CollectCheckInPersonInfo()
    {
        var checkResult = this.cpi.CheckInput();
        if (checkResult) {
            location.href = "/checkin/idcard";
        } else {
            layui.layer.msg('输入条件未通过');
            location.href = "/home/index";
        }
    }

    public FinishCheckInPersonInfo()
    {
        var checkResult = this.oc.CheckInput();
        if (checkResult) {
            location.href = "/checkin/order";
        } else {
            layui.layer.msg('输入条件未通过');
            location.href = "/home/index";
        }
    }
}

layui.define(['layer', 'orderconfirm', 'checkinpersoninfo'], (exports) => {
    exports('main', new Main()); 
});
