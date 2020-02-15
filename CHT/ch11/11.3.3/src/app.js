var _player;
var _tileMap;

var HelloWorldLayer = cc.Layer.extend({
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.director.getWinSize();

        _tileMap = cc.TMXTiledMap.create(res.MiddleMap_tmx);
        this.addChild(_tileMap, 0, 100);

        var group = _tileMap.getObjectGroup("objects");
        //var spawnPoint = group.getObject("ninja"); //JSB可以 Web不能用
        var array = group.getObjects();
        for (var i = 0, len = array.length; i < len; i++) {
            var spawnPoint = array[i];
            var name = spawnPoint["name"];
            if (name == "ninja") {
                var x = spawnPoint["x"];
                var y = spawnPoint["y"];
                _player = new cc.Sprite(res.ninja_png);
                _player.x = x;
                _player.y = y;
                this.addChild(_player, 2, 200);
                break;
            }
        }

        return true;
    },
    onEnter: function () {
        this._super();
        cc.log("HelloWorld onEnter");
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);
    },
    onTouchBegan: function (touch, event) {
        cc.log("onTouchBegan");
        return true;
    },
    onTouchMoved: function (touch, event) {
        cc.log("onTouchMoved");
    },
    onTouchEnded: function (touch, event) {
        cc.log("onTouchEnded");
        //獲得座標
        var touchLocation = touch.getLocation();
        //獲得精靈位置
        var playerPos = _player.getPosition();

        var diff = cc.pSub(touchLocation, playerPos);

        if (Math.abs(diff.x) > Math.abs(diff.y)) {
            if (diff.x > 0) {
                playerPos.x += _tileMap.getTileSize().width;
                _player.runAction(cc.flipX(false));
            } else {
                playerPos.x -= _tileMap.getTileSize().width;
                _player.runAction(cc.flipX(true));
            }
        } else {
            if (diff.y > 0) {
                playerPos.y += _tileMap.getTileSize().height;
            } else {
                playerPos.y -= _tileMap.getTileSize().height;
            }
        }
        _player.setPosition(playerPos);

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

