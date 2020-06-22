//Server
var express = require("express");
var app = express();
app.use(express.static("./public")); //http://
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);//caaus hinh
var io = require("socket.io")(server);//goi module socket io
server.listen(3000);

//langws nghe, on: lang nghe, 'connection': co ng ket noi

io.on("connection", function(socket){
    socket.on("Client-send-color", function(color){
      console.log(color);
      io.sockets.emit("Server-send-color", color);
    });
});

app.get("/", function(req, res) {
  res.render("trangchu")
})
