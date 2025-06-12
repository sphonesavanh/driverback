// src/models/trackingModel.js
const pool = require("../db/database");

async function createTrip(route_id, bus_id) {
  const result = await pool.query(
    "INSERT INTO trip (route_id, bus_id) VALUES ($1, $2) RETURNING *",
    [route_id, bus_id]
  );
  return result.rows[0];
}

async function initTracking(trip_id) {
  const result = await pool.query(
    "INSERT INTO tracking (trip_id, status) VALUES ($1, $2) RETURNING *",
    [trip_id, "bus_station"]
  );
  return result.rows[0];
}

async function updateTrackingStatus(trip_id, status) {
  const result = await pool.query(
    "UPDATE tracking SET status = $1, timestamp = NOW() WHERE trip_id = $2 RETURNING *",
    [status, trip_id]
  );
  return result.rows[0];
}

module.exports = {
  createTrip,
  initTracking,
  updateTrackingStatus,
};
