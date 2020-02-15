var contentKey = 'content';
var dateKey = 'date';

var HelloWorldLayer = cc.Layer.extend({
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask director the window size
        var size = cc.director.getWinSize();

        var lblInsert = new cc.LabelBMFont("Insert Data", res.fnt_fnt);
        var menuItemInsert = new cc.MenuItemLabel(lblInsert, this.onMenuInsertCallback, this);

        var lblDelete = new cc.LabelBMFont("Delete Data", res.fnt_fnt);
        var menuItemDelete = new cc.MenuItemLabel(lblDelete, this.onMenuDeleteCallback, this);

        var lblRead = new cc.LabelBMFont("Read Data", res.fnt_fnt);
        var menuItemRead = new cc.MenuItemLabel(lblRead, this.onMenuReadCallback, this);

        var mn = new cc.Menu(menuItemInsert, menuItemDelete, menuItemRead);
        mn.alignItemsVertically();
        this.addChild(mn);

        return true;
    },
    onMenuInsertCallback: function (sender) {

        cc.log("onMenuInsertCallback");
        var ls = cc.sys.localStorage;

        var time = new Date().format('yyyy-MM-dd hh:mm:ss');
        ls.setItem(dateKey, time);
        ls.setItem(contentKey, "歡迎使用MyNote。");

    },
    onMenuDeleteCallback: function (sender) {
        cc.log("onMenuDeleteCallback");

        var ls = cc.sys.localStorage;
        ls.removeItem(dateKey);
        ls.removeItem(contentKey);

    },
    onMenuReadCallback: function (sender) {
        cc.log("onMenuReadCallback");
        var ls = cc.sys.localStorage;
        cc.log("--------------");
        var rdate = ls.getItem(dateKey);
        cc.log(rdate == null ? "No Date Data" : rdate);
        var rcontent = ls.getItem(contentKey);
        cc.log(rcontent == null ? "No Content Data" : rcontent);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
