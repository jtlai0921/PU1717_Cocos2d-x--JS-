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

        var bg = new cc.Sprite(res.Background_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        var pItmLabel1 = new cc.LabelBMFont("EaseIn", "res/fonts/fnt2.fnt");
        var pItmMenu1 = new cc.MenuItemLabel(pItmLabel1, this.onMenuCallback, this);
        pItmMenu1.tag = ActionTypes.kEaseIn;

        var pItmLabel2 = new cc.LabelBMFont("EaseOut", "res/fonts/fnt2.fnt");
        var pItmMenu2 = new cc.MenuItemLabel(pItmLabel2, this.onMenuCallback, this);
        pItmMenu2.tag = ActionTypes.kEaseOut;

        var pItmLabel3 = new cc.LabelBMFont("EaseInOut", "res/fonts/fnt2.fnt");
        var pItmMenu3 = new cc.MenuItemLabel(pItmLabel3, this.onMenuCallback, this);
        pItmMenu3.tag = ActionTypes.kEaseInOut;

        var pItmLabel4 = new cc.LabelBMFont("EaseSineIn", "res/fonts/fnt2.fnt");
        var pItmMenu4 = new cc.MenuItemLabel(pItmLabel4, this.onMenuCallback, this);
        pItmMenu4.tag = ActionTypes.kEaseSineIn;

        var pItmLabel5 = new cc.LabelBMFont("EaseSineOut", "res/fonts/fnt2.fnt");
        var pItmMenu5 = new cc.MenuItemLabel(pItmLabel5, this.onMenuCallback, this);
        pItmMenu5.tag = ActionTypes.kEaseSineOut;

        var pItmLabel6 = new cc.LabelBMFont("EaseSineInOut", "res/fonts/fnt2.fnt");
        var pItmMenu6 = new cc.MenuItemLabel(pItmLabel6, this.onMenuCallback, this);
        pItmMenu6.tag = ActionTypes.kEaseSineInOut;

        var pItmLabel7 = new cc.LabelBMFont("EaseExponentialIn", "res/fonts/fnt2.fnt");
        var pItmMenu7 = new cc.MenuItemLabel(pItmLabel7, this.onMenuCallback, this);
        pItmMenu7.tag = ActionTypes.kEaseExponentialIn;

        var pItmLabel8 = new cc.LabelBMFont("EaseExponentialOut", "res/fonts/fnt2.fnt");
        var pItmMenu8 = new cc.MenuItemLabel(pItmLabel8, this.onMenuCallback, this);
        pItmMenu8.tag = ActionTypes.kEaseExponentialOut;

        var pItmLabel9 = new cc.LabelBMFont("EaseExponentialInOut", "res/fonts/fnt2.fnt");
        var pItmMenu9 = new cc.MenuItemLabel(pItmLabel9, this.onMenuCallback, this);
        pItmMenu9.tag = ActionTypes.kEaseExponentialInOut;

        var pItmLabel10 = new cc.LabelBMFont("Speed", "res/fonts/fnt2.fnt");
        var pItmMenu10 = new cc.MenuItemLabel(pItmLabel10, this.onMenuCallback, this);
        pItmMenu10.tag = ActionTypes.kSpeed;

        var mn = new cc.Menu(pItmMenu1, pItmMenu2, pItmMenu3, pItmMenu4, pItmMenu5, pItmMenu6, pItmMenu7, pItmMenu8, pItmMenu9, pItmMenu10);
        mn.alignItemsInColumns(2, 2, 2, 2, 2);
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

