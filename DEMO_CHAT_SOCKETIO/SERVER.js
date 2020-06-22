var express = require("express");
var app = express();
app.use(express.static("public")); //http://
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);//caaus hinh
var io = require("socket.io")(server);//goi module socket io
server.listen(4000);

var arrUsers = ["AAA"];

io.on("connection", function(socket){

  socket.on("client-send-username", function(username){

    if ( arrUsers.indexOf(username)>=0 ){
      socket.emit("server-send-register-fail");
    }else{
      socket.emit("server-send-register-fail");
    }

  })

});

app.get("/", function(req, res) {
  res.render("trangchu");
});
