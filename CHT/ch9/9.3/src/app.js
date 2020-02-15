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

        var bg = new cc.Sprite(res.background_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        //開始精靈
        var startSpriteNormal = new cc.Sprite(res.start_up_png);
        var startSpriteSelected = new cc.Sprite(res.start_down_png);

        var startMenuItem = new cc.MenuItemSprite(startSpriteNormal,
            startSpriteSelected,
            function () {
                if (isEffectPlay) {
                    audioEngine.playEffect(res.effectBlip_wav);
                }
                cc.log("startMenuItem is clicked!");
            }, this);
        startMenuItem.x = 700;
        startMenuItem.y = size.height - 170;

        // 設定圖片選單
        var settingMenuItem = new cc.MenuItemImage(
            res.setting_up_png,
            res.setting_down_png,
            function () {
                if (isEffectPlay) {
                    audioEngine.playEffect(res.effectBlip_wav);
                }
                cc.director.pushScene(new cc.TransitionFadeTR(1.0, new SettingScene()));
            }, this);
        settingMenuItem.x = 480;
        settingMenuItem.y = size.height - 400;

        // 幫助圖片選單
        var helpMenuItem = new cc.MenuItemImage(
            res.help_up_png,
            res.help_down_png,
            function () {
                if (isEffectPlay) {
                    audioEngine.playEffect(res.effectBlip_wav);
                }
                cc.log("helpMenuItem is clicked!");
            }, this);
        helpMenuItem.x = 860;
        helpMenuItem.y = size.height - 480;

        var mu = new cc.Menu(startMenuItem, settingMenuItem, helpMenuItem);
        mu.x = 0;
        mu.y = 0;
        this.addChild(mu);

        return true;
    },
    onEnter: function () {
        this._super();
        cc.log("HelloWorldLayer onEnter");

    },
    onEnterTransitionDidFinish: function () {
        this._super();
        cc.log("HelloWorldLayer onEnterTransitionDidFinish");
        audioEngine.playMusic(res.bgMusicSynth_mp3, true);
    },
    onExit: function () {
        this._super();
        cc.log("HelloWorldLayer onExit");
    },
    onExitTransitionDidStart: function () {
        this._super();
        cc.log("HelloWorldLayer onExitTransitionDidStart");
        audioEngine.stopMusic(res.bgMusicSynth_mp3);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

