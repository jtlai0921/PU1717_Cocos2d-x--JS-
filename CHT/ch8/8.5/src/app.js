
//定義精靈的標簽常數
var SpriteTags = {
	kBall_Tag: 102
};

//速度
var SPEED = 30.0;

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
    
        var ball = new cc.Sprite(res.Ball_png);
        ball.x = size.width/2;
        ball.y = size.height/2;
        this.addChild(ball, 10, SpriteTags.kBall_Tag);
        
        return true;
    },
    onEnter: function () {
    		this._super();
    		cc.log("HelloWorld onEnter");
    		var ball = this.getChildByTag(SpriteTags.kBall_Tag);
    		cc.inputManager.setAccelerometerEnabled(true);    		
    		cc.eventManager.addListener({
    			event: cc.EventListener.ACCELERATION,
    			callback: function(acc, event){
    				var size = cc.director.getWinSize();
    				var s = ball.getContentSize();
    				var p0 = ball.getPosition();

    				var p1x =  p0.x + acc.x * SPEED ;
    				if ((p1x - s.width/2) <0) {
    					p1x = s.width/2;
    				}
    				if ((p1x + s.width / 2) > size.width) {
    					p1x = size.width - s.width / 2;
    				}

    				var p1y =  p0.y + acc.y * SPEED ;
    				if ((p1y - s.height/2) < 0) {
    					p1y = s.height/2;
    				}
    				if ((p1y + s.height/2) > size.height) {
    					p1y = size.height - s.height/2;
    				}
    				ball.runAction(cc.place(cc.p( p1x, p1y)));
    			}
    		}, ball);
    },
    onExit: function () {
    		this._super();
    		cc.log("HelloWorld onExit");
    		cc.eventManager.removeListeners(cc.EventListener.ACCELERATION);	
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

