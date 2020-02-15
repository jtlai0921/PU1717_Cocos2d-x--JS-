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

        //設定粒子的重力
        particleSystem.setGravity(cc.p(45, 300));
        //設定徑向加速度
        particleSystem.setRadialAccel(58);
        //設定粒子起始化大小
        particleSystem.setStartSize(84);
        //設定粒子起始化大小偏差
        particleSystem.setStartSizeVar(73);
        //設定粒子最後大小偏差
        particleSystem.setEndSize(123);
        //設定粒子最後大小偏差
        particleSystem.setEndSizeVar(17);
        //設定粒子切向加速度
        particleSystem.setTangentialAccel(70);
        //設定粒子切向加速度偏差
        particleSystem.setTangentialAccelVar(47);
        //設定粒子生命期
        particleSystem.setLife(0.79);
        //設定粒子生命期偏差
        particleSystem.setLifeVar(0.45);
        
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

