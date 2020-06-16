/// <reference path="../../typings/JQueryStatic.d.ts" />
/// <reference path="../../typings/layui.d.ts" />
/// <reference path="../../typings/misc.d.ts" />

class HomeIndex {

    public showMsgInPage() {
        layui.layer.msg('I am in page now.');
    }
}

layui.define(['layer'], (exports) => {
    exports('currentPage', new HomeIndex());
});
