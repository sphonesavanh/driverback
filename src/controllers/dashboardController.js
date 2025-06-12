const { getDriverDashboard } = require("../models/dashboardModel");

const getDashboardInfo = async (req, res) => {
  try {
    const driverId = req.params.driverId;
    const data = await getDriverDashboard(driverId);
    if (!data) {
      return res.status(404).json({ error: "Driver not found" });
    }
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching dashboard info:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getDashboardInfo };
