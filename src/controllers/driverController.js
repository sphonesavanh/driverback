const { getDriverDashboard } = require("../models/driverModel");

const getDashboardInfo = async (req, res) => {
  const driverId = req.params.driverId;
  try {
    const data = await getDriverDashboard(driverId);
    if (!data) {
      return res.status(404).json({ error: "Driver not found" });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getDashboardInfo };
