/// <reference path="../typings/JQueryStatic.d.ts" />
/// <reference path="../typings/layui.d.ts" />
/// <reference path="../typings/misc.d.ts" />

class Test {

    constructor() {
        console.log("in constructor");
    }

    public showMsg() {
        layui.layer.msg('Hello World');
    }
}


//如下，以后即可使用layui.test... 使用了
layui.define(['layer'], (exports) => {
    exports('test', new Test()); 
});
