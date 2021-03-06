﻿
var BASE_URL = 'http://www.cocoagame.net/service/mynotes/WebService.php';
//查詢之後修改，用於移除和修改
var selectedRowId = 1463;

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

        var lblInsert = new cc.LabelBMFont("Insert Data", res.fnt_fnt);        
        var menuItemInsert = new cc.MenuItemLabel(lblInsert,  this.onMenuInsertCallback, this);

        var lblDelete = new cc.LabelBMFont("Delete Data", res.fnt_fnt);
        var menuItemDelete = new cc.MenuItemLabel(lblDelete,  this.onMenuDeleteCallback, this);
       
        var lblUpdate = new cc.LabelBMFont("Update Data", res.fnt_fnt);
        var menuItemUpdate = new cc.MenuItemLabel(lblUpdate,  this.onMenuUpdateCallback, this);

        var lblRead = new cc.LabelBMFont("Read Data", res.fnt_fnt);
        var menuItemRead = new cc.MenuItemLabel(lblRead,  this.onMenuReadCallback, this);

        var mn = new cc.Menu(menuItemInsert, menuItemDelete, menuItemUpdate, menuItemRead);
        mn.alignItemsVertically();
        this.addChild(mn);

        return true;
    },
    
    onMenuReadCallback:function (sender) {
    	cc.log("onMenuReadCallback");

    	var xhr = cc.loader.getXMLHttpRequest();
    	var data = "email={0}&type={1}&action={2}";

    	data = data.replace("{0}", "test@51work6.com");
    	data = data.replace("{1}", "JSON");
    	data = data.replace("{2}", "query");

    	xhr.open("GET", BASE_URL + "?" + data);
    	xhr.onreadystatechange = function () {
    		if (xhr.readyState == 4 && xhr.status == 200) {
    			var response = xhr.responseText;
    			cc.log(response);
    		}
    	};
    	xhr.send();
    },
    onMenuInsertCallback:function (sender) {    	
    	cc.log("onMenuInsertCallback");
    
    	var xhr = cc.loader.getXMLHttpRequest();
    	var data = "email={0}&type={1}&action={2}&date={3}&content={4}";
    	
    	data = data.replace("{0}", "test@51work6.com");
    	data = data.replace("{1}", "JSON");
    	data = data.replace("{2}", "add");
    	data = data.replace("{3}", "2014-08-09");
    	data = data.replace("{4}", "Tony insert data");
    	
    	xhr.open("POST", BASE_URL);
    	xhr.onreadystatechange = function () {
    		if (xhr.readyState == 4 && xhr.status == 200) {
    			var response = xhr.responseText;
    			cc.log(response);
    		}
    	};
    	xhr.send(data);
    	
    },
    onMenuDeleteCallback:function (sender) {
    	cc.log("onMenuDeleteCallback");

        if (selectedRowId == null) {
        	cc.log("請先點擊Read Data，獲得一個有效的id。");
            return;
        }
    	var xhr = cc.loader.getXMLHttpRequest();
    	var data = "email={0}&type={1}&action={2}&id={3}";

    	data = data.replace("{0}", "test@51work6.com");
    	data = data.replace("{1}", "JSON");
    	data = data.replace("{2}", "remove");
    	data = data.replace("{3}", selectedRowId);

    	xhr.open("POST", BASE_URL);
    	xhr.onreadystatechange = function () {
    		if (xhr.readyState == 4 && xhr.status == 200) {
    			var httpStatus = xhr.statusText;
    			var response = xhr.responseText;
    			cc.log(response);
    		}
    	};
    	xhr.send(data);
    	
    },
    onMenuUpdateCallback:function (sender) {
    	cc.log("onMenuUpdateCallback");

    	if (selectedRowId == null) {
    		cc.log("請先點擊Read Data，獲得一個有效的id。");
    		return;
    	}
    	var xhr = cc.loader.getXMLHttpRequest();
    	var data = "email={0}&type={1}&action={2}&date={3}&content={4}&id={5}";
    	
    	data = data.replace("{0}", "test@51work6.com");
    	data = data.replace("{1}", "JSON");
    	data = data.replace("{2}", "modify");
    	data = data.replace("{3}", "2014-08-18");
    	data = data.replace("{4}", "Tom modify data");
    	data = data.replace("{5}", selectedRowId);
    	
    	xhr.open("POST", BASE_URL);
    	xhr.onreadystatechange = function () {
    		if (xhr.readyState == 4 && xhr.status == 200) {
    			var httpStatus = xhr.statusText;
    			var response = xhr.responseText;
    			cc.log(response);
    		}
    	};
    	xhr.send(data);

    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
