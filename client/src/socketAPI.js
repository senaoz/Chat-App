import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Connecting to server...");

  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("Connected!");
  });
};

export const SendMessage = (chat) => {
  if (socket) {
    socket.emit("new-message", chat);
  }
};
