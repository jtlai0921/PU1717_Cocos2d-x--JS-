var BASE_URL = 'http://www.cocoagame.net/service/mynotes/WebService.php';
//查詢之後被給予值，selectedRowId是查詢的最後一條記錄的id
var selectedRowId = 1448;

var HelloWorldLayer = cc.Layer.extend({
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask director the window size
        var size = cc.director.getWinSize();

        var lblDecode = new cc.LabelBMFont("Decode", res.fnt_fnt);
        var menuItemDecode = new cc.MenuItemLabel(lblDecode, this.onMenuDecodeCallback, this);

        var lblEncode = new cc.LabelBMFont("Encode", res.fnt_fnt);
        var menuItemEncode = new cc.MenuItemLabel(lblEncode, this.onMenuEncodeCallback, this);

        var mn = new cc.Menu(menuItemDecode, menuItemEncode);
        mn.alignItemsVertically();
        this.addChild(mn);

        return true;
    },
    /*
     * JSON解碼
     */
    onMenuDecodeCallback: function (sender) {
        cc.log("onMenuDecodeCallback");

        var jsonStr = '{"ID":"1","CDate":"2012-12-23","Content":"發布iOSBook0"}';
        cc.log("JSON String : " + jsonStr);

        var jsonObj = JSON.parse(jsonStr);
        cc.log("JSON Object : " + jsonObj);

        jsonStr = '[{"ID":"1","CDate":"2012-12-23","Content":"發布iOSBook0"}, {"ID":"2","CDate":"2012-12-24","Content":"發布iOSBook1"}]';
        cc.log("JSON String : " + jsonStr);

        var jsonArray = JSON.parse(jsonStr);
        cc.log("JSON Array : " + jsonArray);
    },
    /*
     * JSON解碼
     */
    onMenuEncodeCallback: function (sender) {
        cc.log("onMenuEncodeCallback");

        var jsonObj = {"ID": "1", "CDate": "2012-12-23", "Content": "發布iOSBook0"};
        cc.log("JSON Object : " + jsonObj);

        var jsonArray = [
            {"ID": "1", "CDate": "2012-12-23", "Content": "發布iOSBook0"},
            {"ID": "2", "CDate": "2012-12-24", "Content": "發布iOSBook1"}
        ];
        cc.log("JSON Array : " + jsonArray);

        var jsonStr = JSON.stringify(jsonObj);
        cc.log("JSON String : " + jsonStr);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
