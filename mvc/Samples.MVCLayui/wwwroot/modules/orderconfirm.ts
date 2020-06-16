/// <reference path="../typings/JQueryStatic.d.ts" />
/// <reference path="../typings/layui.d.ts" />
/// <reference path="../typings/misc.d.ts" />

class OrderConfirm {

    constructor() {
        this.data = {
            orderno: ""
        }
    }

    data: {orderno:string}

    public CheckInput() {
        //if (!!JSON.parse(sessionStorage.getItem("checkinpersoninfo"))) {
        //    return true;
        //}
        //else {
        //    return false;
        //}
        return true;
    }

    public GetModuleResult() {
        return JSON.parse(sessionStorage.getItem("orderinfo"))
    }

    public QueryOrder() {
        let checkinpersoninfo = JSON.parse(sessionStorage.getItem("checkinpersoninfo"));
        this.data = { orderno: "123456" };
        sessionStorage.setItem("orderinfo", JSON.stringify(this.data));
        return this.data;
    }
}


//如下，以后即可使用layui.test... 使用了
layui.define(['layer'], (exports) => {
    exports('orderconfirm', new OrderConfirm()); 
});
