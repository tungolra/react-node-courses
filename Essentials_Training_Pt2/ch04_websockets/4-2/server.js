// socket.io can raise events by name; 
// ws spec only handles message events; all types of data have to be served to the same event 


import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer().listen(3000);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`${io.engine.clientsCount} connections`);
  socket.on("chat", (message) => {
    console.log(`${socket.d}: ${message}`);
    io.sockets.emit("message", message, socket.id);
  });
  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

console.log("socket server")

