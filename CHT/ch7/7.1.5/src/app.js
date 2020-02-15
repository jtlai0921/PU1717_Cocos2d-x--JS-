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

        var pItmLabel1 = new cc.LabelBMFont("CallFunc", res.fnt2_fnt);
        var pItmMenu1 = new cc.MenuItemLabel(pItmLabel1, this.onMenuCallback, this);
        pItmMenu1.tag = ActionTypes.kFunc;

        var pItmLabel2 = new cc.LabelBMFont("CallFuncN", res.fnt2_fnt);
        var pItmMenu2 = new cc.MenuItemLabel(pItmLabel2, this.onMenuCallback, this);
        pItmMenu2.tag = ActionTypes.kFuncN;

        var mn = new cc.Menu(pItmMenu1, pItmMenu2);
        mn.alignItemsVertically();
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

