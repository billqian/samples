/// <reference path="../typings/JQueryStatic.d.ts" />
/// <reference path="../typings/layui.d.ts" />
/// <reference path="../typings/misc.d.ts" />

class CheckInPersonInfo {

    constructor() {
        this.data = {
            name: "",
            mobile: "",
            idcard: ""
        }
    }

    data: { name: string, mobile: string, idcard: string }

    public CheckInput() {
        return true;
    }

    public GetModuleResult() {
        return JSON.parse(sessionStorage.getItem("checkinpersioninfo"));
    }

    public ReadCard() {
        this.data = JSON.parse(sessionStorage.getItem("checkinpersioninfo")) ?? {
            name: "",
            mobile: "",
            idcard: ""
        };
        this.data.name = "许佳文";
        this.data.idcard = "32058392294473882X";
        sessionStorage.setItem("checkinpersioninfo", JSON.stringify(this.data));
        return this.data;
    }

    public SetMobile(mobile: string) {
        this.data = JSON.parse(sessionStorage.getItem("checkinpersioninfo")) ?? {
            name: "",
            mobile: "",
            idcard: ""
        };
        this.data.mobile = mobile;
        sessionStorage.setItem("checkinpersioninfo", JSON.stringify(this.data));
        return this.data;
    }
}


//如下，以后即可使用layui.test... 使用了
layui.define(['layer'], (exports) => {
    exports('checkinpersoninfo', new CheckInPersonInfo()); 
});
