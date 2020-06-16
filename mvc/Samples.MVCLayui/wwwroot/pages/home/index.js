/// <reference path="../../typings/JQueryStatic.d.ts" />
/// <reference path="../../typings/layui.d.ts" />
/// <reference path="../../typings/misc.d.ts" />
var HomeIndex = /** @class */ (function () {
    function HomeIndex() {
    }
    HomeIndex.prototype.showMsgInPage = function () {
        layui.layer.msg('I am in page now.');
    };
    return HomeIndex;
}());
layui.define(['layer'], function (exports) {
    exports('currentPage', new HomeIndex());
});
//# sourceMappingURL=index.js.map