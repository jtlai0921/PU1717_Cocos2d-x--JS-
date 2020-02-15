﻿var HelloWorldLayer = cc.Layer.extend({

    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask director the window size
        var size = cc.director.getWinSize();

        var bg = new cc.Sprite(res.Background_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        var pItmLabel1 = new cc.LabelBMFont("Sequence", res.fnt2_fnt);
        var pItmMenu1 = new cc.MenuItemLabel(pItmLabel1, this.onMenuCallback, this);
        pItmMenu1.tag = ActionTypes.kSequence;

        var pItmLabel2 = new cc.LabelBMFont("Spawn", res.fnt2_fnt);
        var pItmMenu2 = new cc.MenuItemLabel(pItmLabel2, this.onMenuCallback, this);
        pItmMenu2.tag = ActionTypes.kSpawn;

        var pItmLabel3 = new cc.LabelBMFont("Repeate", res.fnt2_fnt);
        var pItmMenu3 = new cc.MenuItemLabel(pItmLabel3, this.onMenuCallback, this);
        pItmMenu3.tag = ActionTypes.kRepeate;

        var pItmLabel4 = new cc.LabelBMFont("RepeatForever", res.fnt2_fnt);
        var pItmMenu4 = new cc.MenuItemLabel(pItmLabel4, this.onMenuCallback, this);
        pItmMenu4.tag = ActionTypes.kRepeatForever1;

        var pItmLabel5 = new cc.LabelBMFont("Reverse", res.fnt2_fnt);
        var pItmMenu5 = new cc.MenuItemLabel(pItmLabel5, this.onMenuCallback, this);
        pItmMenu5.tag = ActionTypes.kReverse;

        var mn = new cc.Menu(pItmMenu1, pItmMenu2, pItmMenu3, pItmMenu4, pItmMenu5);
        mn.alignItemsVerticallyWithPadding(50);
        this.addChild(mn);

        return true;
    },
    onMenuCallback: function (sender) {
        cc.log("tag = " + sender.tag);
        var scene = new MyActionScene();
        var layer = new MyActionLayer(sender.tag);
        //layer.tag = sender.tag;
        scene.addChild(layer);
        cc.director.pushScene(new cc.TransitionSlideInR(1, scene));
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

