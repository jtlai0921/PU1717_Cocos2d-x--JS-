
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

		cc.MenuItemFont.setFontName("Times New Roman");
		cc.MenuItemFont.setFontSize(86); 
		var item1 = new cc.MenuItemFont("Start", this.menuItem1Callback, this); 

//		var item2 = cc.MenuItemAtlasFont.create("Help", 
//		res.charmap_png, 
//		48, 65,' ',
//		this.menuItem2Callback, this); 

		var labelAtlas = new cc.LabelAtlas("Help", res.charmap_png, 48, 65, ' ');
		var item2 = new cc.MenuItemLabel(labelAtlas, this.menuItem2Callback, this );

		var  mn = new cc.Menu(item1, item2); 
		mn.alignItemsVertically();	
		this.addChild(mn); 

		return true;
	},
	menuItem1Callback:function (sender) {
        cc.log("Touch Start Menu Item " + sender);
	},
	menuItem2Callback:function (sender) {
		cc.log("Touch Help Menu Item " + sender);
	}
});

var HelloWorldScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new HelloWorldLayer();
		this.addChild(layer);
	}
});

