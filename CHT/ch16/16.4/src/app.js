var HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        var size = cc.winSize;

        var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            this.onClickMenu, this);
        closeItem.attr({
            x: size.width - 20,
            y: 20,
            anchorX: 0.5,
            anchorY: 0.5
        });

        var menu = new cc.Menu(closeItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);

        for (var i = 0; i < 100; ++i) {
            var sprite = new cc.Sprite(res.Ball_png);
            var x = cc.random0To1() * 960;
            var y = cc.random0To1() * 640;
            sprite.setPosition(cc.p(x, y));
            this.addChild(sprite);
        }

        this.bake();
        return true;
    },
    onClickMenu: function () {
    },
    onExit: function () {
        this.sprite.release();
        this._super();
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

