var audioEngine = cc.audioEngine;
var isEffectPlay = true;

var HelloWorldLayer = cc.Layer.extend({

    ctor: function () {
        // ////////////////////////////
        // 1. super init first
        this._super();
        cc.log("HelloWorldLayer init");

        cc.spriteFrameCache.addSpriteFrames(res.Texture_plist, res.Texture_res);
        cc.spriteFrameCache.addSpriteFrames(res.Texture_bg_plist, res.Texture_bg_res);

        // ///////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the
        // program
        // you may modify it.
        // ask director the window size
        var size = cc.director.getWinSize();

        var bg = new cc.Sprite('#background.png');
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        //開始精靈
        var startSpriteNormal = new cc.Sprite('#start-up.png');
        var startSpriteSelected = new cc.Sprite('#start-down.png');

        var startMenuItem = new cc.MenuItemSprite(startSpriteNormal,
            startSpriteSelected,
            function () {
                if (isEffectPlay) {
                    audioEngine.playEffect(res.effectBlip);
                }
                cc.log("startMenuItem is clicked!");
            }, this);
        startMenuItem.x = 700;
        startMenuItem.y = size.height - 170;

        // 設定圖片選單
        var settingMenuItem = new cc.MenuItemImage(
            '#setting-up.png',
            '#setting-down.png',
            function () {
                if (isEffectPlay) {
                    audioEngine.playEffect(res.effectBlip);
                }
                cc.director.pushScene(new cc.TransitionFadeTR(1.0, new SettingScene()));
            }, this);
        settingMenuItem.x = 480;
        settingMenuItem.y = size.height - 400;

        // 幫助圖片選單
        var helpMenuItem = new cc.MenuItemImage(
            '#help-up.png',
            '#help-down.png',
            function () {
                if (isEffectPlay) {
                    audioEngine.playEffect(res.effectBlip);
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
        audioEngine.playMusic(res.bgMusicSynth, true);
    },
    onExit: function () {
        this._super();
        cc.log("HelloWorldLayer onExit");
    },
    onExitTransitionDidStart: function () {
        this._super();
        cc.log("HelloWorldLayer onExitTransitionDidStart");
        audioEngine.stopMusic(res.bgMusicSynth);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

