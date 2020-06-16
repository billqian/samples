/// <reference path="../typings/JQueryStatic.d.ts" />
/// <reference path="../typings/layui.d.ts" />
/// <reference path="../typings/misc.d.ts" />
var Test = /** @class */ (function () {
    function Test() {
        console.log("in constructor");
    }
    Test.prototype.showMsg = function () {
        layui.layer.msg('Hello World');
    };
    return Test;
}());
//如下，以后即可使用layui.test... 使用了
layui.define(['layer'], function (exports) {
    exports('test', new Test());
});
//# sourceMappingURL=test.js.map