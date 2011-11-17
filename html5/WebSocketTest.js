function WebSocketTest()
{
  if ("WebSocket" in window)
  {
    // Google example code
    var ws = new WebSocket("ws://florimont:1024/service");

    ws.onopen = function()
    {
        alert("socket opened");
      // Web Socket is connected. You can send data by send() method
      ws.send("message to send");
    };
    ws.onmessage = function (evt) { 
        var received_msg = evt.data;
        alert(received_msg);
    };
    ws.onclose = function() { alert("socket closed"); };
  }
  else
  {
    // the browser doesn't support WebSocket
    alert("WebSocket NOT supported here!");
  }
}

