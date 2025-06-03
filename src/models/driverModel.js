const pool = require("../db/database");

const getDriverDashboard = async (driver_id) => {
  const result = await pool.query(
    `SELECT 
      d.driver_name,
      d.driver_phone,
      b.bus_number,
      b.bus_plate,
      bt.bus_type_capacity
    FROM drivers d
    JOIN bus b ON d.bus_id = b.bus_id
    JOIN bus_type bt ON b.bus_type_id = bt.bus_type_id
    WHERE d.driver_id = $1`,
    [driver_id]
  );
  return result.rows[0];
};

module.exports = { getDriverDashboard };
