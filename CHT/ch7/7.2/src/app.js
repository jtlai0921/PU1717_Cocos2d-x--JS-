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

        var pItmLabelFlipX3D = new cc.LabelBMFont("FlipX3D", res.fnt2_fnt);
        var pItmMenupFlipX3D = new cc.MenuItemLabel(pItmLabelFlipX3D, this.onMenuCallback, this);
        pItmMenupFlipX3D.tag = ActionTypes.kFlipX3D;

        var pItmLabelPageTurn3D = new cc.LabelBMFont("PageTurn3D", res.fnt2_fnt);
        var pItmMenuPageTurn3D = new cc.MenuItemLabel(pItmLabelPageTurn3D, this.onMenuCallback, this);
        pItmMenuPageTurn3D.tag = ActionTypes.kPageTurn3D;

        var pItmLabelLens3D = new cc.LabelBMFont("Lens3D", res.fnt2_fnt);
        var pItmMenuLens3D = new cc.MenuItemLabel(pItmLabelLens3D, this.onMenuCallback, this);
        pItmMenuLens3D.tag = ActionTypes.kLens3D;

        var pItmLabelShaky3D = new cc.LabelBMFont("Shaky3D", res.fnt2_fnt);
        var pItmMenuShaky3D = new cc.MenuItemLabel(pItmLabelShaky3D, this.onMenuCallback, this);
        pItmMenuShaky3D.tag = ActionTypes.kShaky3D;

        var pItmLabelWaves3D = new cc.LabelBMFont("Waves3D", res.fnt2_fnt);
        var pItmMenuJumpTiles3D = new cc.MenuItemLabel(pItmLabelWaves3D, this.onMenuCallback, this);
        pItmMenuJumpTiles3D.tag = ActionTypes.kJumpTiles3D;

        var pItmLabelShakyTiles3D = new cc.LabelBMFont("ShakyTiles3D", res.fnt2_fnt);
        var pItmMenuShakyTiles3D = new cc.MenuItemLabel(pItmLabelShakyTiles3D, this.onMenuCallback, this);
        pItmMenuShakyTiles3D.tag = ActionTypes.kShakyTiles3D;

        var pItmLabelWavesTiles3D = new cc.LabelBMFont("WavesTiles3D", res.fnt2_fnt);
        var pItmMenuWavesTiles3D = new cc.MenuItemLabel(pItmLabelWavesTiles3D, this.onMenuCallback, this);
        pItmMenuWavesTiles3D.tag = ActionTypes.kWavesTiles3D;

        var mn = new cc.Menu(pItmMenupFlipX3D, pItmMenuPageTurn3D,
            pItmMenuLens3D, pItmMenuShaky3D,
            pItmMenuJumpTiles3D, pItmMenuShakyTiles3D,
            pItmMenuWavesTiles3D);
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

