const pool = require("../db/database"); // Adjust the path based on your structure

// Get user by name (or modify to use email/phone if needed)
const getUserByName = async (driver_name) => {
  const query = "SELECT * FROM driver WHERE driver_name = $1";
  const values = [driver_name];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error("Error fetching user:", err);
    throw err;
  }
};

module.exports = { getUserByName };
