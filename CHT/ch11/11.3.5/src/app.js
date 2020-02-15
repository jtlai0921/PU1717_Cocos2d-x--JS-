var _player;
var _tileMap;
var _collidable;

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

        _collidable = _tileMap.getLayer("collidable");
        _collidable.setVisible(false);

        this.setViewpointCenter(_player.getPosition());

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
        var target = event.getCurrentTarget();
        //獲得座標
        var touchLocation = touch.getLocation();
        //轉為目前層的模型座標系
        touchLocation = target.convertToNodeSpace(touchLocation);
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
        target.setPlayerPosition(playerPos);
    },
    onExit: function () {
        this._super();
        cc.log("HelloWorld onExit");
        cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE);
    },
    setPlayerPosition: function (pos) {
        //從像素點座標轉化為圖磚座標
        var tileCoord = this.tileCoordFromPosition(pos);
        //獲得圖磚的GID
        var tileGid = _collidable.getTileGIDAt(tileCoord);

        if (tileGid > 0) {
            var prop = _tileMap.getPropertiesForGID(tileGid);
            var collision = prop["Collidable"];

            if (collision == "true") { //碰撞檢驗成功
                cc.log("碰撞檢驗成功");
                cc.audioEngine.playEffect(res.empty_wav);
                return;
            }
        }
        //搬移精靈
        _player.setPosition(pos);
        this.setViewpointCenter(_player.getPosition());
    },
    tileCoordFromPosition: function (pos) {
        var x = pos.x / _tileMap.getTileSize().width;
        //float 轉為為 int
        x = parseInt(x, 10);
        var y = ((_tileMap.getMapSize().height * _tileMap.getTileSize().height) - pos.y) / _tileMap.getTileSize().height;
        //float 轉為為 int
        y = parseInt(y, 10);
        return cc.p(x, y);
    },
    tileCoordFromPosition: function (pos) {
        var x = pos.x / _tileMap.getTileSize().width;
        //float 轉為為 int
        x = parseInt(x, 10);
        var y = ((_tileMap.getMapSize().height * _tileMap.getTileSize().height) - pos.y) / _tileMap.getTileSize().height;
        //float 轉為為 int
        y = parseInt(y, 10);
        return cc.p(x, y);
    },
    setViewpointCenter: function (pos) {
        cc.log("setViewpointCenter");
        var size = cc.director.getWinSize();
        //可以防止，檢視左邊超出螢幕之外。
        var x = Math.max(pos.x, size.width / 2);
        var y = Math.max(pos.y, size.height / 2);

        //可以防止，檢視右邊超出螢幕之外。
        x = Math.min(x, (_tileMap.getMapSize().width * _tileMap.getTileSize().width)
            - size.width / 2);
        y = Math.min(y, (_tileMap.getMapSize().height * _tileMap.getTileSize().height)
            - size.height / 2);

        //螢幕中心點
        var pointA = cc.p(size.width / 2, size.height / 2);
        //使精靈處於螢幕中心，搬移地圖目的位置
        var pointB = cc.p(x, y);

        //地圖搬移偏移量
        var offset = cc.pSub(pointA, pointB);
        // log("offset (%f ,%f) ",offset.x, offset.y);
        this.setPosition(offset);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

