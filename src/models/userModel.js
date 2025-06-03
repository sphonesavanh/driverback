const pool = require("../db/database");

const getDriverByName = async (driver_name) => {
  const result = await pool.query(
    "SELECT * FROM drivers WHERE driver_name = $1",
    [driver_name]
  );
  return result.rows[0];
};

module.exports = {
  getDriverByName,
};
