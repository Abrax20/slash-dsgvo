var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log("Device connect");
  socket.on('OPEN_SIGNATURE_SCREEN', (data) =>
    io.emit('OPEN_SIGNATURE_SCREEN', data));
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
