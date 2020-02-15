var SettingLayer = cc.Layer.extend({
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.director.getWinSize();

        var background = new cc.Sprite(res.setting_back_png);
        background.anchorX = 0;
        background.anchorY = 0;
        this.addChild(background);

        //音效
        var soundOnMenuItem = new cc.MenuItemImage(res.On_png, res.On_png);
        var soundOffMenuItem = new cc.MenuItemImage(res.Off_png, res.Off_png);

        var soundToggleMenuItem = new cc.MenuItemToggle(
            soundOnMenuItem,
            soundOffMenuItem,
            function () {
                cc.log("soundToggleMenuItem is clicked!");
            }, this);
        soundToggleMenuItem.x = 818;
        soundToggleMenuItem.y = size.height - 220;

        //音樂
        var musicOnMenuItem = new cc.MenuItemImage(
            res.On_png, res.On_png);
        var musicOffMenuItem = new cc.MenuItemImage(
            res.Off_png, res.Off_png);
        var musicToggleMenuItem = new cc.MenuItemToggle(
            musicOnMenuItem,
            musicOffMenuItem,
            function () {
                cc.log("musicToggleMenuItem is clicked!");
            }, this);
        musicToggleMenuItem.x = 818;
        musicToggleMenuItem.y = size.height - 362;

        //Ok按鈕
        var okMenuItem = new cc.MenuItemImage(
            res.ok_down_png,
            res.ok_up_png,
            function () {
                cc.director.popScene();
            }, this);
        okMenuItem.x = 600;
        okMenuItem.y = size.height - 510;

        var menu = new cc.Menu(okMenuItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);

        return true;
    }
});

var SettingScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new SettingLayer();
        this.addChild(layer);
    }
});

