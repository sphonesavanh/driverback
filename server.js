const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const authRoutes = require("../bus-tracking-system-driverback/src/routes/auth");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

//Handle web socket connections
io.on("connection", (socket) => {
  console.log("🟢 Client connected:", socket.id);

  // Receive event from driver app
  socket.on("driver-event", (data) => {
    console.log("🚍 Driver event received:", data);

    // Broadcast to all clients (admin dashboard + passenger app)
    io.emit("broadcast-event", data);
  });

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
