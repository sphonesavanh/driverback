const { getDriverByName } = require("../models/driverModel");

const loginDriver = async (req, res) => {
  const { driver_name, driver_password } = req.body;

  if (!driver_name || !driver_password) {
    return res.status(400).json({ error: "Missing credentials" });
  }

  try {
    const driver = await getDriverByName(driver_name);
    if (!driver || driver.driver_password !== driver_password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      driver: {
        id: driver.driver_id,
        name: driver.driver_name,
        phone: driver.driver_phone,
        status: driver.driver_status,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { loginDriver };
