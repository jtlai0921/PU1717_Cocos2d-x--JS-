var HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        // ////////////////////////////
        // 1. super init first
        this._super();

        // ///////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the
        // program
        // you may modify it.
        // ask the window size
        var size = cc.winSize;

        // add a "close" icon to exit the progress. it's an autorelease object
        var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            function () {
                cc.log("Menu is clicked!");
            }, this);
        closeItem.attr({
            x: size.width - 20,
            y: 20,
            anchorX: 0.5,
            anchorY: 0.5
        });
        var menu = new cc.Menu(closeItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);

        var bg = new cc.Sprite(res.bg_png);
        bg.setPosition(size.width / 2, size.height / 2);
        this.addChild(bg, 2);

        var node1 = new cc.Sprite(res.node1_png);
        node1.setPosition(400, 500);
        node1.setAnchorPoint(1.0, 1.0);
        this.addChild(node1, 2);

        var node2 = new cc.Sprite(res.node2_png);
        node2.setPosition(200, 300);
        node2.setAnchorPoint(0.5, 0.5);
        this.addChild(node2, 2);

        var point1 = node1.convertToNodeSpace(node2.getPosition());
        var point3 = node1.convertToNodeSpaceAR(node2.getPosition());

        cc.log("Node2 NodeSpace = (" + point1.x + "," + point1.y + ")");
        cc.log("Node2 NodeSpaceAR =  (" + point3.x + "," + point3.y + ")");

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

