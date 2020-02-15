
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
        
        var mountain1 = new cc.Sprite(res.SpirteSheet_png,cc.rect(2,391, 934, 388));
        mountain1.anchorX = 0;
        mountain1.anchorY = 0;
        mountain1.x = -200;
        mountain1.y = 80; 
        this.addChild(mountain1); 
        
        var texture = cc.textureCache.addImage(res.SpirteSheet_png);
        var hero1 = new cc.Sprite(texture, cc.rect(2,1706,391,327));
        hero1.x = 800;
        hero1.y = 200;
        this.addChild(hero1);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

