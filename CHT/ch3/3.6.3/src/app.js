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
                this.unscheduleUpdate();
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

        // ///////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);

        helloLabel.attr({
            x: size.width / 2,
            y: 0,
            anchorX: 1.0,
            anchorY: 1.0
        });

        helloLabel.setTag(123);
        //更新方法  
        this.scheduleUpdate();
        //this.schedule(this.update, 1.0/60, cc.REPEAT_FOREVER, 0.1);

        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.5,
            rotation: 180
        });
        this.addChild(this.sprite, 0);

        this.sprite.runAction(
            cc.sequence(
                cc.rotateTo(2, 0),
                cc.scaleTo(2, 1, 1)
            )
        );
        return true;
    },
    update: function (dt) {
        var label = this.getChildByTag(123);
        label.x = label.x + 0.2;
        label.y = label.y + 0.2;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

