var MyActionLayer = cc.Layer.extend({
    flagTag: 0,
    gridNodeTarget: null,
    ctor: function (flagTag) {
        // ////////////////////////////
        // 1. super init first
        this._super();
        this.flagTag = flagTag;
        this.gridNodeTarget = new cc.NodeGrid();
        this.addChild(this.gridNodeTarget);

        cc.log("MyActionLayer init flagTag " + this.flagTag);

        var size = cc.director.getWinSize();

        var bg = new cc.Sprite(res.Background_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.gridNodeTarget.addChild(bg);

        var sprite = new cc.Sprite(res.hero_png);
        sprite.x = size.width / 2;
        sprite.y = size.height / 2;
        this.gridNodeTarget.addChild(sprite, 1, SP_TAG);

        var backMenuItem = new cc.MenuItemImage(res.Back_up_png, res.Back_down_png,
            function () {
                cc.director.popScene();
            }, this);
        backMenuItem.x = 140;
        backMenuItem.y = size.height - 65;

        var goMenuItem = new cc.MenuItemImage(res.Go_up_png, res.Go_down_png,
            this.onMenuCallback, this);
        goMenuItem.x = 820;
        goMenuItem.y = size.height - 540;

        var mn = new cc.Menu(backMenuItem, goMenuItem);
        this.gridNodeTarget.addChild(mn, 1);
        mn.x = 0;
        mn.y = 0;
        mn.anchorX = 0.5;
        mn.anchorY = 0.5;

        return true;
    },
    onMenuCallback: function (sender) {
        cc.log("Tag = " + this.flagTag);
        var size = cc.director.getWinSize();

        switch (this.flagTag) {
            case ActionTypes.kFlipX3D:
                this.gridNodeTarget.runAction(cc.flipX3D(3.0));
                break;
            case ActionTypes.kPageTurn3D:
                this.gridNodeTarget.runAction(cc.pageTurn3D(3.0, cc.size(15, 10)));
                break;
            case ActionTypes.kLens3D:
                this.gridNodeTarget.runAction(cc.lens3D(3.0, cc.size(15, 10), cc.p(size.width / 2, size.height / 2), 240));
                break;
            case ActionTypes.kShaky3D:
                this.gridNodeTarget.runAction(cc.shaky3D(3.0, cc.size(15, 10), 5, false));
                break;
            case ActionTypes.kWaves3D:
                this.gridNodeTarget.runAction(cc.waves3D(3.0, cc.size(15, 10), 5, 40));
                break;
            case ActionTypes.kJumpTiles3D:
                this.gridNodeTarget.runAction(cc.jumpTiles3D(3.0, cc.size(15, 10), 2, 30));
                break;
            case ActionTypes.kShakyTiles3D:
                this.gridNodeTarget.runAction(cc.shakyTiles3D(3.0, cc.size(16, 12), 5, false));
                break;
            case ActionTypes.kWavesTiles3D:
                this.gridNodeTarget.runAction(cc.wavesTiles3D(3.0, cc.size(15, 10), 4, 120));
                break;
        }
    }
});

var MyActionScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        // var layer = new MyActionLayer();
        // this.addChild(layer);
    }
});

