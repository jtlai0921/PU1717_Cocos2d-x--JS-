var audioEngine = cc.audioEngine;
var isEffectPlay = true;

var HelloWorldLayer = cc.Layer.extend({

    ctor: function () {
        // ////////////////////////////
        // 1. super init first
        this._super();
        cc.log("HelloWorldLayer init");

        // ///////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the
        // program
        // you may modify it.
        // ask director the window size
        var size = cc.director.getWinSize();

        var bg = new cc.Sprite(res.home_bg_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        // 設定選單item1
        var item1 = new cc.MenuItemImage(
            res.start_png,
            res.start_png);

        // 設定選單item2
        var item2 = new cc.MenuItemImage(
            res.setting_png,
            res.setting_png);
        // 設定選單item3
        var item3 = new cc.MenuItemImage(
            res.help_png,
            res.help_png);

        var mn = new cc.Menu(item1, item2, item3);
        mn.alignItemsVerticallyWithPadding(10.0);
        mn.x = size.width / 2;
        mn.y = size.height / 2 - 10;
        this.addChild(mn);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

