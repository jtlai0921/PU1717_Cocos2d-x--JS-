var HelloWorldLayer = cc.LayerColor.extend({
    hero: null,
    ctor: function () {
        var size = cc.winSize;
        this._super(cc.color(255, 255, 255, 255), size.width, size.height);
        this.hero = new cc.Sprite(res.hero_png);
        this.hero.x = size.width / 2;
        this.hero.y = 150;
        this.addChild(this.hero);

        //每0.2s 呼叫shootBullet函數發射1發炮彈.
        this.schedule(this.shootBullet, 0.2);

        return true;
    },
    //飛機發射炮彈
    shootBullet: function (dt) {
        var bullet = Bullet.create(res.bullet_png, cc.p(0, 300));
        if (bullet.getParent() == null) {
            this.addChild(bullet);
            cc.pool.putInPool(bullet);
        }
        bullet.shootBulletFromFighter(cc.p(this.hero.x, this.hero.y + this.hero.getContentSize().height / 2));
    },
    onExit: function () {
        this._super();
        this.unschedule(this.shootBullet);
        cc.pool.drainAllPools();
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

