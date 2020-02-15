var SPRITE_WIDTH = 64;
var SPRITE_HEIGHT = 64;
var DEBUG_NODE_SHOW = true;

var HelloWorldLayer = cc.Layer.extend({
    space: null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        this.initPhysics();

        this.scheduleUpdate();

    },
    setupDebugNode: function () {
        this._debugNode = new cc.PhysicsDebugNode(this.space);
        this._debugNode.visible = DEBUG_NODE_SHOW;
        this.addChild(this._debugNode);
    },
    onEnter: function () {
        this._super();
        cc.log("onEnter");
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.onTouchBegan
        }, this);
    },
    onTouchBegan: function (touch, event) {
        cc.log("onTouchBegan");
        var target = event.getCurrentTarget();
        var location = touch.getLocation();
        target.addNewSpriteAtPosition(location);
        return false;
    },
    onExit: function () {
        this._super();
        cc.log("onExit");
        cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE);
    },
    initPhysics: function () {

        var winSize = cc.director.getWinSize();

        this.space = new cp.Space();
        this.setupDebugNode();

        // 設定重力
        this.space.gravity = cp.v(0, -100);
        var staticBody = this.space.staticBody;

        // Walls
        var walls = [ new cp.SegmentShape(staticBody, cp.v(0, 0), cp.v(winSize.width, 0), 0),				// bottom
            new cp.SegmentShape(staticBody, cp.v(0, winSize.height), cp.v(winSize.width, winSize.height), 0),	// top
            new cp.SegmentShape(staticBody, cp.v(0, 0), cp.v(0, winSize.height), 0),				// left
            new cp.SegmentShape(staticBody, cp.v(winSize.width, 0), cp.v(winSize.width, winSize.height), 0)	// right
        ];
        for (var i = 0; i < walls.length; i++) {
            var shape = walls[i];
            shape.setElasticity(1);
            shape.setFriction(1);
            this.space.addStaticShape(shape);
        }
    },
    addNewSpriteAtPosition: function (p) {
        cc.log("addNewSpriteAtPosition");

        var body = new cp.Body(1, cp.momentForBox(1, SPRITE_WIDTH, SPRITE_HEIGHT));
        body.setPos(p);
        this.space.addBody(body);

        var shape = new cp.BoxShape(body, SPRITE_WIDTH, SPRITE_HEIGHT);
        shape.setElasticity(0.5);
        shape.setFriction(0.5);
        this.space.addShape(shape);

        //建立實體引擎精靈物件
        var sprite = new cc.PhysicsSprite("res/BoxA2.png");
        sprite.setBody(body);
        sprite.setPosition(cc.p(p.x, p.y));
        this.addChild(sprite);
    },
    update: function (dt) {
        var timeStep = 0.03;
        this.space.step(timeStep);
    },
    onExit: function () {

    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

