
var socket = io();

window.onload = function() {
    document.querySelector("#send").onclick = function() {
        var msg = document.querySelector("#message").value;
        socket.emit('chat message', msg);
    }

    socket.on('chat message', function(msg){
        console.log(msg);
    });
};

