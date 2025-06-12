// src/controllers/trackingController.js
const {
  createTrip,
  initTracking,
  updateTrackingStatus,
} = require("../models/trackingModel");

async function startTrip(req, res) {
  try {
    const { route_id, bus_id } = req.body;
    const trip = await createTrip(route_id, bus_id);
    const tracking = await initTracking(trip.trip_id);
    res.status(201).json({ trip, tracking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to start trip" });
  }
}

async function updateTracking(req, res) {
  try {
    const { trip_id } = req.params;
    const { status } = req.body;
    const updated = await updateTrackingStatus(trip_id, status);
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update tracking status" });
  }
}

module.exports = {
  startTrip,
  updateTracking,
};
