var HelloWorldLayer = cc.Layer.extend({

    ctor: function () {
        // ////////////////////////////
        // 1. super init first
        this._super();
        cc.log("HelloWorldLayer init");
        var size = cc.director.getWinSize();

        // /////////////動畫開始//////////////////////
        var animation = new cc.Animation();
        for (var i = 1; i < 18; i++) {
            var str = "0" + i;
            var str1 = str.substring(str.length - 2, str.length);
            var frameName = "res/fire/campFire" + str1 + ".png";
            cc.log("frameName = " + frameName);
            animation.addSpriteFrameWithFile(frameName);
        }

        animation.setDelayPerUnit(0.11);           // 設定兩個框播放時間
        animation.setRestoreOriginalFrame(true);    // 動畫執行後復原起始狀態
        var action = cc.animate(animation);

        var sprite = new cc.Sprite(res.campFire01_png);
        sprite.x = size.width / 2;
        sprite.y = size.height / 2;
        this.addChild(sprite);

        sprite.runAction(cc.repeatForever(action));
        // ////////////////動畫結束///////////////////

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

