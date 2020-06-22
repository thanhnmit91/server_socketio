var socket = "http://localhost:4000"

$(document).ready(function(){
  $("#loginForm").show();
  $("#chatForm").hide();

  socket.on("server-send-register-fail", function(){
    alert("SAI");
  });

  $("#btnRegister").click(function(){
    socket.emit("client-send-username", $("#txtUsername").val());
  });
});
