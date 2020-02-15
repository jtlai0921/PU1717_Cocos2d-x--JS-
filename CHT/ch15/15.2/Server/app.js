
var io = require('socket.io').listen(3000);
console.log('Server on port 3000.');

io.sockets.on('connection', function (socket) 
{
	//ϲ綋岢͏돢
    socket.send('Hello Cocos2d-JS');
	//ע⡿ͻ綋ϻϢ
    socket.on('message', function (data) 
    {
        console.log(data);
    });
	
	//ע⡣allServerEventʂ쾣챣Ӛ綋巔I
    socket.on('callServerEvent', function (data) 
    {
        console.log(data);
		//ϲ綋岢͏돢㬵瓃綋廣allClientEventʂ쾍
		socket.emit('callClientEvent', { message: 'Hello Client.' });
    });

});