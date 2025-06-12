const express = require("express");
const router = express.Router();
const {
  startTrip,
  updateTracking
} = require("../controllers/trackingController")

router.post('/trip/start', startTrip);
router.put('/tracking/:trip_id', updateTracking);

module.exports = router;