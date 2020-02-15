//定義精靈的標簽常數
var SpriteTags = {
    kBoxA_Tag: 102, kBoxB_Tag: 103, kBoxC_Tag: 104
};

var HelloWorldLayer = cc.Layer.extend({

    ctor: function () {

        this._super();
        cc.log("HelloWorld init");

        var size = cc.director.getWinSize();

        var bg = new cc.Sprite(res.Background_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg, 0, 0);

        var boxA = new cc.Sprite(res.BoxA2_png);
        boxA.x = size.width / 2 - 120;
        boxA.y = size.height / 2 + 120;
        this.addChild(boxA, 10, SpriteTags.kBoxA_Tag);

        var boxB = new cc.Sprite(res.BoxB2_png);
        boxB.x = size.width / 2;
        boxB.y = size.height / 2;
        this.addChild(boxB, 20, SpriteTags.kBoxB_Tag);

        var boxC = new cc.Sprite(res.BoxC2_png);
        boxC.x = size.width / 2 + 120;
        boxC.y = size.height / 2 + 160;
        this.addChild(boxC, 30, SpriteTags.kBoxC_Tag);

        return true;
    },
    onEnter: function () {
        this._super();
        cc.log("HelloWorld onEnter");
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true, // 設定是否吞沒事件
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();
                // 取得目前點擊點所在相對按鈕的位置座標
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                // 點擊範圍判斷檢驗
                if (cc.rectContainsPoint(rect, locationInNode)) {
                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    cc.log("sprite tag = " + target.tag);
                    target.runAction(cc.scaleBy(0.06, 1.06));
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch, event) {
                cc.log("onTouchMoved");
                var target = event.getCurrentTarget();
                var delta = touch.getDelta();
                // 搬移目前按鈕精靈的座標位置
                target.x += delta.x;
                target.y += delta.y;
            },
            onTouchEnded: function (touch, event) {            // 點擊事件結束處理
                cc.log("onTouchesEnded");
                var target = event.getCurrentTarget();
                // 取得目前點擊點所在相對按鈕的位置座標
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                // 點擊範圍判斷檢驗
                if (cc.rectContainsPoint(rect, locationInNode)) {
                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    cc.log("sprite tag = " + target.tag);
                    target.runAction(cc.scaleTo(0.06, 1.0));
                }
            }
        });

        // 登錄監聽器
        cc.eventManager.addListener(listener, this.getChildByTag(SpriteTags.kBoxA_Tag));
        cc.eventManager.addListener(listener.clone(), this.getChildByTag(SpriteTags.kBoxB_Tag));
        cc.eventManager.addListener(listener.clone(), this.getChildByTag(SpriteTags.kBoxC_Tag));

    },
    onExit: function () {
        this._super();
        cc.log("HelloWorld onExit");
        cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

