import React from "react";
import { io } from "socket.io-client";

export const socket = io(process.env.BASE_URL, {
  transports: ["websocket"],
  upgrade: false,
});

export const SocketContext = React.createContext();
