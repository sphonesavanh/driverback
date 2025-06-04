const { getUserByName } = require("../models/userAuthModel");

const loginDriver = async (req, res) => {
  const { driver_name, driver_password } = req.body;

  if (!driver_name || !driver_password) {
    return res.status(400).json({ error: "Missing credentials" });
  }

  try {
    const driver = await getUserByName(driver_name);
    if (!driver || driver.driver_password !== driver_password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      driver: {
        driver_id: driver.driver_id,
        driver_name: driver.driver_name,
        driver_phone: driver.driver_phone,
        driver_status: driver.driver_status,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { loginDriver };
