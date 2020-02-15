
var _player;
var _tileMap;
var _collidable;

var HelloWorldLayer = cc.Layer.extend({
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.director.getWinSize();

        _tileMap = cc.TMXTiledMap.create("res/map/MiddleMap.tmx");
        this.addChild(_tileMap, 0, 100);

        var group = _tileMap.getObjectGroup("objects");
        var spawnPoint = group.getObject("ninja");

        var x = spawnPoint["x"];
        var y = spawnPoint["y"];

        _player = new cc.Sprite("res/ninja.png");
        _player.x = x;
        _player.y = y;
        this.addChild(_player, 2, 200);

        _collidable = _tileMap.getLayer("collidable");
        _collidable.setVisible(false);
        
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
                _player.runAction(cc.FlipX.create(false));
            } else {
                playerPos.x -= _tileMap.getTileSize().width;
                _player.runAction(cc.FlipX.create(true));
            }
        } else {
            if (diff.y > 0) {
                playerPos.y += _tileMap.getTileSize().height;
            } else {
                playerPos.y -= _tileMap.getTileSize().height;
            }
        }
        cc.log(this);
        target.setPlayerPosition(playerPos);
        //this.setPlayerPosition(playerPos);
    }, 
    onExit: function () {
        this._super();
        cc.log("HelloWorld onExit");
        cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE);
    },
    setPlayerPosition: function (pos) {
    	//從像素點座標轉化為圖磚座標
    	var tileCoord =  this.tileCoordFromPosition(pos);
    	//獲得圖磚的GID
    	var tileGid = _collidable.getTileGIDAt(tileCoord);

    	if (tileGid > 0) {
    		var prop = _tileMap.getPropertiesForGID(tileGid);    		
    		var collision = prop["Collidable"];

    		if (collision == "true") { //碰撞檢驗成功
    			cc.log("碰撞檢驗成功");
    			cc.audioEngine.playEffect("res/empty.wav");
    			return;
    		}
    	}
    	//搬移精靈
    	_player.setPosition(pos);
    }, 
    tileCoordFromPosition: function (pos) {
    	var x = pos.x / _tileMap.getTileSize().width;
    	//float 轉為為 int
    	x = parseInt(x, 10);
    	var y = ((_tileMap.getMapSize().height * _tileMap.getTileSize().height) - pos.y) / _tileMap.getTileSize().height;
    	//float 轉為為 int
    	y = parseInt(y, 10);
    	return cc.p(x, y);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

