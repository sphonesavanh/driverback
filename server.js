const express = require("express");
const cors = require("cors");

const authRoutes = require("./src/routes/auth");
const dashRoutes = require("./src/routes/dashboard");

const trackingRoutes = require("./src/routes/trackingRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/driver", dashRoutes);

app.use("/api", trackingRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Bus Tracking System Driver Backend!");
});

const PORT = 5000;
// app.listen(PORT, "192.168.1.10", () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
  
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});