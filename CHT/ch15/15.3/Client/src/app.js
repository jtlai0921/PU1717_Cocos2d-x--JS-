var _sioClient;
var SocketIO = SocketIO || io;
// 查詢之後被給予值，selectedRowId是查詢的最後一條記錄的id
var selectedRowId = null;

var HelloWorldLayer = cc.Layer.extend({
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

        var lblInsert = new cc.LabelBMFont("Insert Data", res.fnt_fnt);
        var menuItemInsert = new cc.MenuItemLabel(lblInsert, this.onMenuInsertCallback, this);

        var lblDelete = new cc.LabelBMFont("Delete Data", res.fnt_fnt);
        var menuItemDelete = new cc.MenuItemLabel(lblDelete, this.onMenuDeleteCallback, this);

        var lblUpdate = new cc.LabelBMFont("Update Data", res.fnt_fnt);
        var menuItemUpdate = new cc.MenuItemLabel(lblUpdate, this.onMenuUpdateCallback, this);

        var lblRead = new cc.LabelBMFont("Read Data", res.fnt_fnt);
        var menuItemRead = new cc.MenuItemLabel(lblRead, this.onMenuReadCallback, this);

        var mn = cc.Menu.create(menuItemInsert, menuItemDelete, menuItemUpdate, menuItemRead);
        mn.alignItemsVertically();
        this.addChild(mn);

        _sioClient = SocketIO.connect("http://localhost:3000/");
        _sioClient.tag = "Cocos2d-JS Client1";

        // 登錄伺服器端事件
        _sioClient.on("findAllCallBack", this.findAllCallBack);
        _sioClient.on("createCallBack", this.createCallBack);
        _sioClient.on("removeCallBack", this.removeCallBack);
        _sioClient.on("modifyCallBack", this.modifyCallBack);

        _sioClient.on("connect", function () {
            cc.log("connect called.");
        });
        _sioClient.on("message", function (data) {
            log(_sioClient.tag + " message received: " + data);
        });
        _sioClient.on("error", function () {
            log("error called..");
        });

        return true;
    },

    /*
     * Insert Data選單項回調函數
     */
    onMenuInsertCallback: function (sender) {
        cc.log("onMenuInsertCallback");
        var time = new Date().format('yyyy-MM-dd hh:mm:ss');
        var content = '{"cdate":"' + time + '","content":"Node.js insert."}';
        _sioClient.emit("create", content);
    },

    /*
     * Delete Data選單項回調函數
     */
    onMenuDeleteCallback: function (sender) {
        cc.log("onMenuDeleteCallback");
        if (selectedRowId == null) {
            cc.log("請先點擊Read Data，獲得一個有效的id。");
        } else {
            cc.log("Delete Data id :" + selectedRowId);
            var content = '{"cdate":"' + selectedRowId + '"}';
            _sioClient.emit("remove", content);
        }
    },

    /*
     * Update Data選單項回調函數
     */
    onMenuUpdateCallback: function (sender) {
        cc.log("onMenuUpdateCallback");
        if (selectedRowId == null) {
            cc.log("請先點擊Read Data，獲得一個有效的id。");
        } else {
            cc.log("Update Data id :" + selectedRowId);
            var content = '{"cdate":"' + selectedRowId + '","content":"Node.js modify."}';
            _sioClient.emit("modify", content);
        }
    },
    /*
     * Read Data選單項回調函數
     */
    onMenuReadCallback: function (sender) {
        cc.log("onMenuReadCallback");
        _sioClient.emit("findAll", "{}");
    },
    /*
     * 伺服器回調函數findAllCallBack
     */
    findAllCallBack: function (data) {

        cc.log("findAllCallBack called with data: " + data);
        if (data instanceof Object) {
            cc.log("JSON Object");
        } else {
            cc.log("JSON String");
            var jsonObj = JSON.parse(data);
            var args = jsonObj['args'];
            data = args[0];
        }
        var resultCode = data['ResultCode'];
        if (resultCode < 0) {
            cc.log(resultCode.errorMessage());
        } else {
            cc.log("read success.");
            var records = data['Record'];
            for (var i = 0; i < records.length; i++) {
                cc.log("---------------- [" + i + "] -------------------");
                var row = records[i];
                cc.log("cdate : " + row["cdate"]);
                cc.log("content : " + row["content"]);
                selectedRowId = row["cdate"];
            }
        }
    },
    /*
     * 伺服器回調函數createCallBack
     */
    createCallBack: function (data) {

        cc.log("createCallBack called with data: " + data);

        if (data instanceof Object) {
            cc.log("JSON Object");
        } else {
            cc.log("JSON String");
            var jsonObj = JSON.parse(data);
            var args = jsonObj['args'];
            data = args[0];
        }

        var resultCode = data['ResultCode'];

        if (resultCode < 0) {
            cc.log(resultCode.errorMessage());
        } else {
            cc.log(" create success.");
        }
    },
    /*
     * 伺服器回調函數removeCallBack
     */
    removeCallBack: function (data) {
        cc.log("removeCallBack called with data: " + data);

        if (data instanceof Object) {
            cc.log("JSON Object");
        } else {
            cc.log("JSON String");
            var jsonObj = JSON.parse(data);
            var args = jsonObj['args'];
            data = args[0];
        }

        var resultCode = data['ResultCode'];

        if (resultCode < 0) {
            cc.log(resultCode.errorMessage());
        } else {
            cc.log("delete success.");
            selectedRowId == null;
        }
    },
    /*
     * 伺服器回調函數modifyCallBack
     */
    modifyCallBack: function (data) {
        cc.log("modifyCallBack called with data: " + data);

        if (data instanceof Object) {
            cc.log("JSON Object");
        } else {
            cc.log("JSON String");
            var jsonObj = JSON.parse(data);
            var args = jsonObj['args'];
            data = args[0];
        }

        var resultCode = data['ResultCode'];

        if (resultCode < 0) {
            cc.log(resultCode.errorMessage());
        } else {
            cc.log("update success.");
            selectedRowId == null
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
