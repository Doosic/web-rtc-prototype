module.exports = (server, app) => {
    const io = require("socket.io")(server, {
        cors: {
            credentials: true,
        },
        allowEIO3: true,
    });

    app.set("io", io);

    io.on("connection",  (socket) => {
        console.log("Connect from Client: ", socket.id);

        socket.on("message", (data, room) => {
            console.log('message from client: ', data.message);
            console.log('구분: ', data);
            console.log('구분room: ', room);
            socket.broadcast.emit('message', data.message);
        })

    });
}

