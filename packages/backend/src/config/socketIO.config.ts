import type { Server as HttpServer } from "node:http";
import { Server as SocketIOServer } from "socket.io";

export const initializeSocketIO = (httpServer: HttpServer): SocketIOServer => {
	const io = new SocketIOServer(httpServer, {
		cors: {
			origin: "*",
			methods: ["GET", "POST"],
		},
	});

	io.on("connection", (socket) => {
		console.log("A user connected:", socket.id);

		socket.on("disconnect", () => {
			console.log("User disconnected:", socket.id);
		});

		socket.on("message", (data) => {
			console.log("Message received:", data);
			io.emit("message", data);
		});
	});

	return io;
};
