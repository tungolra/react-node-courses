import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", (ws) => {
  ws.on("close", () => {
    console.log("socket closed");
  });
  console.log("new socket connected");
});

console.log("chat server waiting for connections on ws://localhost:3000");
