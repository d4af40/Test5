const socket = io('http://localhost:3000');

function sendMessage() {
  const message = document.getElementById("messageInput").value;
  if (message.trim() !== "") {
    socket.emit('chat message', message);
    document.getElementById("messageInput").value = "";
  }
}

socket.on('chat message', function(msg) {
  const item = document.createElement("li");
  item.appendChild(document.createTextNode(msg));
  document.getElementById("messages").appendChild(item);
});

document.getElementById("messageInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
