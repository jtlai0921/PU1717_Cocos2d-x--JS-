var Bullet = cc.Sprite.extend({
    velocity: 0,			//速度
    ctor: function (spriteFrameName, velocity) {
        this._super(spriteFrameName);
        this.velocity = velocity;
    },
    shootBulletFromFighter: function (p) {
        this.setPosition(p);
        this.scheduleUpdate();
    },
    update: function (dt) {
        var size = cc.winSize;
        //計算搬移位置
        this.x = this.x + this.velocity.x * dt;
        this.y = this.y + this.velocity.y * dt;
        if (this.y >= size.height) {
            this.unscheduleUpdate();
            this.removeFromParent();
        }
    },
    unuse: function () {
        this.retain();//if in jsb
        this.setVisible(false);
    },
    reuse: function (spriteFrameName, velocity) {
        this.spriteFrameName = spriteFrameName;
        this.velocity = velocity;
        this.setVisible(true);
    }
});

Bullet.create = function (spriteFrameName, velocity) {

    if (cc.pool.hasObject(Bullet)) {
        cc.log("獲得可重用物件。");
        return cc.pool.getFromPool(Bullet, spriteFrameName, velocity);
    } else {
        cc.log("建立新物件。");
        return new Bullet(spriteFrameName, velocity);
    }
}
