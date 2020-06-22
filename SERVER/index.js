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
  console.log("Connection..." + socket.id);

  socket.on("disconnect", function(){
    console.log("Disconnect..." + socket.id);
  })

  socket.on("Client-send-data", function(data){
    console.log(data);
    // io.sockets.emit("Server-send-data", data+"Server" + " " + socket.id);//pulic all server
    // socket.emit("Server-send-data", data+"Server" + " " + socket.id);//only me
    socket.broadcast.emit("Server-send-data", data+"Server" + " " + socket.id);
  });

});

app.get("/", function(req, res) {
  res.render("trangchu")
})
