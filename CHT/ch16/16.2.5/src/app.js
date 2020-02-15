var HelloWorldLayer = cc.Layer.extend({
    _labelLoading: null,
    _labelPercent: null,
    _numberOfSprites: 0,
    _numberOfLoadedSprites: 0,
    _imageOffset: 0,
    ctor: function () {
        // ////////////////////////////
        // 1. super init first
        this._super();

        // ///////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the
        // program
        // you may modify it.
        // ask director the window size
        var size = cc.director.getWinSize();

        this._labelLoading = new cc.LabelTTF("loading...", "Arial", 35);
        this._labelLoading.x = size.width / 2;
        this._labelLoading.y = size.height / 2 - 20;

        this._labelPercent = new cc.LabelTTF("0%", "Arial", 35);
        this._labelPercent.x = size.width / 2;
        this._labelPercent.y = size.height / 2 + 20;

        this.addChild(this._labelLoading);
        this.addChild(this._labelPercent);

        this._numberOfLoadedSprites = 0;
        this._imageOffset = 0;
        this._numberOfSprites = res_icon.length;

        // load textrues
        for (var i in res_icon) {
            var filename = "res/icons/" + res_icon[i];
            cc.textureCache.addImage(filename, this.loadingCallBack, this);
        }
        return true;
    },
    loadingCallBack: function (texture) {
        ++this._numberOfLoadedSprites;
        this._labelPercent.setString(parseInt((this._numberOfLoadedSprites / this._numberOfSprites) * 100) + '%');

        var i = ++this._imageOffset * 60;
        var textureKey = "res/icons/" + res_icon[this._numberOfLoadedSprites - 1];
        var sprite = new cc.Sprite(textureKey);
        sprite.setAnchorPoint(cc.p(0, 0));
        this.addChild(sprite, -1);

        var size = cc.director.getWinSize();
        sprite.x = parseInt(i % size.width);
        sprite.y = parseInt(i / size.width) * 60;

        if (this._numberOfLoadedSprites == this._numberOfSprites) {
            this._numberOfLoadedSprites = 0;
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
