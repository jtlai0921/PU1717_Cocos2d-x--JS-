
var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.director.getWinSize();

        var bg = new cc.Sprite(res.background_png);
        bg.x = size.width/2;
        bg.y = size.height/2;        
        this.addChild(bg);    

        var frameCache = cc.spriteFrameCache; 
        frameCache.addSpriteFrames(res.SpirteSheet_plist, 
        		res.SpirteSheet_png);		

        var mountain1 = new cc.Sprite("#mountain1.png");	
        mountain1.anchorX = 0;
        mountain1.anchorY = 0;
        mountain1.x = -200;
        mountain1.y = 80; 
        this.addChild(mountain1); 

        var heroSpriteFrame = frameCache.getSpriteFrame("hero1.png");
        var hero1 = new cc.Sprite(heroSpriteFrame); 
        hero1.x = 800;
        hero1.y = 200;
        this.addChild(hero1);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

