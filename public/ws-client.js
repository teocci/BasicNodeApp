// Write your code in the same way as for native WebSocket:
  var ws = new WebSocket('ws://localhost:8080/');
  ws.onopen = function() {
    ws.send("Hello");  // Sends a message.
  };
  ws.onmessage = function(e) {
    // Receives a message.
    alert(e.data);
  };
  ws.onclose = function() {
    alert("closed");
  };
