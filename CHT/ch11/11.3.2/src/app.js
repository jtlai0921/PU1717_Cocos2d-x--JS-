var _player;
var _tileMap;

var HelloWorldLayer = cc.Layer.extend({
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.director.getWinSize();

        _tileMap = new cc.TMXTiledMap(res.MiddleMap_tmx);
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
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

