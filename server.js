const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("../bus-tracking-system-webback/src/routes/auth");
const busRoutes = require("../bus-tracking-system-webback/src/routes/bus");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/bus", busRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Bus Tracking System");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
