var HelloWorldLayer = cc.Layer.extend({

    ctor: function () {
        // ////////////////////////////
        // 1. super init first
        this._super();

        // ///////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the
        // program
        // you may modify it.
        // ask director the window size
        var size = cc.director.getWinSize();

        var bg = new cc.Sprite(res.setting_back_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        //音效
        var soundOnMenuItem = new cc.MenuItemImage(
            res.On_png, res.On_png);
        var soundOffMenuItem = new cc.MenuItemImage(
            res.Off_png, res.Off_png);

        var soundToggleMenuItem = new cc.MenuItemToggle(
            soundOnMenuItem,
            soundOffMenuItem,
            this.menuSoundToggleCallback, this);
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
            this.menuMusicToggleCallback, this);

        musicToggleMenuItem.x = 818;
        musicToggleMenuItem.y = size.height - 362;

        //Ok按鈕
        var okMenuItem = new cc.MenuItemImage(
            res.ok_down_png,
            res.ok_up_png,
            this.menuOkCallback, this);
        okMenuItem.x = 600;
        okMenuItem.y = size.height - 510;

        var mu = new cc.Menu(soundToggleMenuItem, musicToggleMenuItem, okMenuItem);
        mu.x = 0;
        mu.y = 0;
        this.addChild(mu);
    },
    menuSoundToggleCallback: function (sender) {
        cc.log("menuSoundToggleCallback!");
    },
    menuMusicToggleCallback: function (sender) {
        cc.log("menuMusicToggleCallback!");
    },
    menuOkCallback: function (sender) {
        cc.log("menuOkCallback!");
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

