var HelloWorldLayer = cc.Layer.extend({

    ctor: function () {
        // ////////////////////////////
        // 1. super init first
        this._super();
        cc.log("HelloWorldLayer init");
        var size = cc.director.getWinSize();

        var bg = new cc.Sprite(res.zippo_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        var particleSystem = new cc.ParticleFire();
        particleSystem.texture = cc.textureCache.addImage(res.s_fire);
        particleSystem.x = 270;
        particleSystem.y = size.height - 380;
        this.addChild(particleSystem);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

