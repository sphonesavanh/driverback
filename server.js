const express = require("express");
const cors = require("cors");
const authRoutes = require("../bus-tracking-system-driverback/src/routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

const PORT = 3002;
app.listen(PORT, '192.168.1.2', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
