const express = require("express");
const router = express.Router();
const { getDashboardInfo } = require("../controllers/driverController");

router.get("/dashboard/:driverId", getDashboardInfo);

module.exports = router;