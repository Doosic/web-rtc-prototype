module.exports = (server, app) => {
    const io = require("socket.io")(server, {
        cors: {
            credentials: true,
        },
        allowEIO3: true,
    });

    app.set("io", io);

    io.on("connection", function (socket) {
        console.log("Connect from Client: ", socket.id);

    });
}

