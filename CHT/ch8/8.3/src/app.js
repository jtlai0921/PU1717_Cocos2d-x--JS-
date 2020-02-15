
//定義精靈的標簽常數
var SpriteTags = {
	kBoxA_Tag: 102, kBoxB_Tag:103, kBoxC_Tag:104
};

var HelloWorldLayer = cc.Layer.extend({
 
	ctor:function () {
        // ////////////////////////////
        // 1. super init first
        this._super();
        cc.log("HelloWorld init");
        // ///////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the
		// program
        // you may modify it.
        // ask director the window size
        var size = cc.director.getWinSize();
        
        var bg = new cc.Sprite(res.Background_png);
        bg.x = size.width/2;
        bg.y = size.height/2;
        this.addChild(bg, 0, 0);
    
        var boxA = new cc.Sprite(res.BoxA2_png);
        boxA.x = size.width/2 - 120;
        boxA.y = size.height/2 + 120;
        this.addChild(boxA, 10, SpriteTags.kBoxA_Tag);
        
        return true;
    },
    onEnter: function () {
    		this._super();
    		cc.log("HelloWorld onEnter");
    		
    		cc.eventManager.addListener({
    			event: cc.EventListener.KEYBOARD,
    			onKeyPressed:  function(keyCode, event){
    				cc.log("Key with keycode " + keyCode + " pressed");
    			},
    			onKeyReleased: function(keyCode, event){
    				cc.log("Key with keycode " + keyCode + " released");
    			}
    		}, this);
    },
    onExit: function () {
    		this._super();
    		cc.log("HelloWorld onExit");
    		cc.eventManager.removeListeners(cc.EventListener.KEYBOARD);	
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

