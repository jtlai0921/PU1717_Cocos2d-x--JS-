﻿var io = require('socket.io').listen(3000);

//䴽褡tabasesĿ¼
var fs = require("fs");
if (!fs.existsSync("databases")) {
    fs.mkdirSync("databases", function (err) {
        if (err) {
            console.log(err);
            return;
        }
    });
}
var sqlite3 = require('sqlite3');
//㵊컯ʽ⍊var db = new sqlite3.Database('databases/NoteDB.sqlite3');
db.run("CREATE TABLE IF NOT EXISTS Note (cdate TEXT PRIMARY KEY, content TEXT)");
db.close();
io.sockets.on('connection', function (socket) {
    socket.on('findAll', function (data) {
        var db = new sqlite3.Database('databases/NoteDB.sqlite3');
        db.all("SELECT cdate,content FROM Note", function (err, res) {
            if (!err) {
                var jsonObj = {
                    ResultCode: 0,
                    Record: res
                };
                socket.emit('findAllCallBack', jsonObj);
            }
        });
        db.close();
    });
    socket.on('create', function (data) {

		if (data instanceof Object) {
            console.log("JSON Object");
        } else {
            console.log("JSON String");
            data = JSON.parse(data);
        }

        var db = new sqlite3.Database('databases/NoteDB.sqlite3');
        var stmt = db.prepare("INSERT OR REPLACE INTO note (cdate, content) VALUES (?,?)");
        stmt.run(data.cdate, data.content);
        stmt.finalize();
        db.close();
        socket.emit('createCallBack', {
            ResultCode: 0
        });
    });
    socket.on('remove', function (data) {
		
        if (data instanceof Object) {
            console.log("JSON Object");
        } else {
            console.log("JSON String");
            data = JSON.parse(data);
        }

        var db = new sqlite3.Database('databases/NoteDB.sqlite3');
        var stmt = db.prepare("DELETE  from note where cdate =?");
        stmt.run(data.cdate);
        stmt.finalize();
        db.close();
        socket.emit('removeCallBack', {
            ResultCode: 0
        });
    });
    socket.on('modify', function (data) {
		
		if (data instanceof Object) {
            console.log("JSON Object");
        } else {
            console.log("JSON String");
            data = JSON.parse(data);
        }
        
		console.log("call modify. " + data.cdate);
        console.log("call modify.content " + data.content);
        var db = new sqlite3.Database('databases/NoteDB.sqlite3');
        var stmt = db.prepare("UPDATE note set content=? where cdate =?");
        stmt.run(data.content, data.cdate);
        stmt.finalize();
        db.close();
        socket.emit('modifyCallBack', {
            ResultCode: 0
        });
    });
});