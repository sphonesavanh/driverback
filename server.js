const express = require("express");
const cors = require("cors");

const authRoutes = require("../bus-tracking-system-driverback/src/routes/auth");
const driverRoutes = require("../bus-tracking-system-driverback/src/routes/driver");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/driver", driverRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Bus Tracking System Driver Backend!");
});

const PORT = 5000;
app.listen(PORT, "172.20.10.2", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
