var MyActionLayer = cc.Layer.extend({
    flagTag: 0,                     	// 動作標志
    ctor: function (flagTag) {
        // ////////////////////////////
        // 1. super init first
        this._super();
        this.flagTag = flagTag;
        cc.log("MyActionLayer init flagTag " + this.flagTag);

        var size = cc.director.getWinSize();

        var bg = new cc.Sprite(res.Background_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        var sprite = new cc.Sprite(res.Plane_png);
        sprite.x = size.width / 2;
        sprite.y = size.height / 2;
        this.addChild(sprite, 1, SP_TAG);

        var backMenuItem = new cc.MenuItemImage(res.Back_up_png, res.Back_down_png,
            function () {
                cc.director.popScene();
            }, this);
        backMenuItem.x = 120;
        backMenuItem.y = size.height - 100;

        var goMenuItem = new cc.MenuItemImage(res.Go_up_png, res.Go_down_png,
            this.onMenuCallback, this);
        goMenuItem.x = size.width / 2;
        goMenuItem.y = 100;

        var mn = new cc.Menu(backMenuItem, goMenuItem);
        this.addChild(mn, 1);
        mn.x = 0;
        mn.y = 0;
        mn.anchorX = 0.5;
        mn.anchorY = 0.5;

        return true;
    },
    onMenuCallback: function (sender) {
        cc.log("Tag = " + this.flagTag);

        switch (this.flagTag) {
            case ActionTypes.kFunc:
                this.onCallFunc(sender);
                break;
            case ActionTypes.kFuncN:
                this.onCallFuncN(sender);
                break;
        }
    },
    onCallFunc: function (sender) {
        var sprite = this.getChildByTag(SP_TAG);
        var size = cc.director.getWinSize();

        var ac1 = cc.moveBy(2, cc.p(100, 100));
        var ac2 = ac1.reverse();

        var acf = cc.callFunc(
            this.callBack1,
            this);
        var seq = cc.sequence(ac1, acf, ac2);
        sprite.runAction(cc.sequence(seq));
    },
    callBack1: function () {
        var sprite = this.getChildByTag(SP_TAG);
        sprite.runAction(cc.tintBy(0.5, 255, 0, 255));
    },
    onCallFuncN: function (sender) {
        var sprite = this.getChildByTag(SP_TAG);
        var size = cc.director.getWinSize();

        var ac1 = cc.moveBy(2, cc.p(100, 100));
        var ac2 = ac1.reverse();
        var acf = cc.callFunc(
            this.callBack2,
            this, sprite);
        var seq = cc.sequence(ac1, acf, ac2);
        sprite.runAction(cc.sequence(seq));
    },
    callBack2: function (sp) {
        sp.runAction(cc.tintBy(1, 255, 0, 255));
    }
});

var MyActionScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        // var layer = new MyActionLayer();
        // this.addChild(layer);
    }
});

