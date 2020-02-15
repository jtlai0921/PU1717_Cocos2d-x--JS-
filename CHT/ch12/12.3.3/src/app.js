
var PTM_RATIO = 32;

var b2Vec2 = Box2D.Common.Math.b2Vec2
    , b2BodyDef = Box2D.Dynamics.b2BodyDef
    , b2Body = Box2D.Dynamics.b2Body
    , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    , b2World = Box2D.Dynamics.b2World
    , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    , b2EdgeShape = Box2D.Collision.Shapes.b2EdgeShape
    , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
    , b2ContactListener = Box2D.Dynamics.b2ContactListener;

var HelloWorldLayer = cc.Layer.extend({
    world: null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        // 起始化實體引擎
        this.initPhysics();
        this.scheduleUpdate();

        return true;
    },
    initPhysics : function () {

        var size = cc.director.getWinSize();

        this.world = new b2World(new b2Vec2(0, -10), true);
        this.world.SetContinuousPhysics(true);

        var fixDef = new b2FixtureDef;
        fixDef.density = 1.0;
        fixDef.friction = 0.5;
        fixDef.restitution = 0.2;

        var bodyDef = new b2BodyDef;

        bodyDef.type = b2Body.b2_staticBody;
        fixDef.shape = new b2PolygonShape;

        var w =  size.width / PTM_RATIO;
        var h =  size.height / PTM_RATIO;

        //設定寬度w的水平線
        fixDef.shape.SetAsBox(w / 2, 0);
        //頂部
        bodyDef.position.Set(w / 2, h);
        this.world.CreateBody(bodyDef).CreateFixture(fixDef);

        // 底部
        bodyDef.position.Set(w / 2, 0);
        this.world.CreateBody(bodyDef).CreateFixture(fixDef);

        //設定高度h的垂直線
        fixDef.shape.SetAsBox(0,  h / 2);
        // 左邊
        bodyDef.position.Set(0, h / 2 );
        this.world.CreateBody(bodyDef).CreateFixture(fixDef);
        // 右邊
        bodyDef.position.Set(w, h / 2);
        this.world.CreateBody(bodyDef).CreateFixture(fixDef);
    },

    onTouchBegan: function (touch, event) {
        cc.log("onTouchBegan");

        var target = event.getCurrentTarget();
        var p = touch.getLocation();
        target.addNewSpriteAtPosition(p);

        return false;
    },
    onEnter: function () {
        this._super();
        cc.log("onEnter");
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.onTouchBegan
        }, this);
    },
    onExit: function () {
        this._super();
        cc.log("onExit");
        cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE);
    },
    addNewSpriteAtPosition: function ( p ) {
        cc.log("addNewSpriteAtPosition");
        //建立實體引擎精靈物件
        var sprite = new cc.Sprite(res.BoxA2_png);
        sprite.setPosition( p );
        this.addChild(sprite);

        // 動態物體定義
        var bodyDef = new b2BodyDef;
        bodyDef.type = b2Body.b2_dynamicBody;
        bodyDef.position.Set(p.x / PTM_RATIO, p.y / PTM_RATIO);
        var body = this.world.CreateBody(bodyDef);
        body.SetUserData(sprite);

        // 定義2公尺見方的盒子形狀
        var dynamicBox = new b2PolygonShape();
        dynamicBox.SetAsBox(1, 1);

        // 動態物體夾具定義
        var fixtureDef = new b2FixtureDef();
        //設定夾具的形狀
        fixtureDef.shape = dynamicBox;
        //設定密度
        fixtureDef.density = 1.0;
        //設定摩擦系數
        fixtureDef.friction = 0.3;
        //使用夾具固定形狀到物體上
        body.CreateFixture(fixtureDef);

    },
    update: function (dt) {
    	
        var velocityIterations = 8;
        var positionIterations = 1;

        this.world.Step(dt, velocityIterations, positionIterations);
        
        for (var b = this.world.GetBodyList(); b; b = b.GetNext()) {
            if (b.GetUserData() != null) {
                var sprite = b.GetUserData();
            	sprite.x = b.GetPosition().x * PTM_RATIO;
            	sprite.y = b.GetPosition().y * PTM_RATIO;
            	sprite.rotation = -1 * cc.radiansToDegrees(b.GetAngle());
            }
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

