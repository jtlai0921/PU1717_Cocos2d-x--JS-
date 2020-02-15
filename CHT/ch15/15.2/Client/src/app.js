
var _sioClient;
var SocketIO = SocketIO || io;

var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask director the window size
        var size = cc.director.getWinSize();

        var lblSendMsg = new cc.LabelBMFont("Send Message", res.fnt_fnt);        
        var menuItemSendMsg = new cc.MenuItemLabel(lblSendMsg,  this.onMenuCallback, this);
 
        var mn = new cc.Menu(menuItemSendMsg);
        mn.alignItemsVertically();
        this.addChild(mn);

        _sioClient = SocketIO.connect("http://localhost:3000/");
        _sioClient.tag = "Cocos2d-JS Client1";
        
        //登錄伺服器端事件
        _sioClient.on("callClientEvent", this.callClientEvent);
        
        _sioClient.on("connect", function() {
        	cc.log("connect called.");
        });        
        _sioClient.on("message", function(data) {
        	cc.log(_sioClient.tag + " message received: " + data);
        });        
        _sioClient.on("error", function() {
        	cc.log("error called..");
        });

        return true;
    },
    
    onMenuCallback:function (sender) {
    	cc.log("onMenuCallback");
    	//向伺服器發出訊息
    	_sioClient.send("Hello Socket.IO!");
    	//觸發伺服器callServerEvent事件
    	_sioClient.emit("callServerEvent","{\"message\":\"Hello Server.\"}");
    },
    //伺服器端回調用戶端事件
    callClientEvent: function(data) {
    	var msg = "Server CallBack: "+ _sioClient.tag +  " Data :" + data;
    	cc.log(msg);    	
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
