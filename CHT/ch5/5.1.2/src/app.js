
var HelloWorldLayer = cc.Layer.extend({
	
    ctor:function () {
        // ////////////////////////////
        // 1. super init first
        this._super();

        // ///////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the
		// program
        // you may modify it.
        // ask director the window size
        var size = cc.director.getWinSize();

        var bg = new cc.Sprite(res.background_png);
        bg.x = size.width/2;
        bg.y = size.height/2;
        
        this.addChild(bg);    

        var tree1 = new cc.Sprite(res.tree_png, cc.rect(604, 38, 302, 295));
        tree1.x = 200;
        tree1.y = 230;
        this.addChild(tree1); 
        
        var texture = cc.textureCache.addImage(res.tree_png);
        var tree2 = new cc.Sprite(texture, cc.rect(73, 72,182,270));
        tree2.x = 500;
        tree2.y = 200;
        this.addChild(tree2);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

