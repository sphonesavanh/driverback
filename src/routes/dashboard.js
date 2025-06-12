const express = require("express");
const router = express.Router();
const { getDashboardInfo } = require("../controllers/dashboardController");

router.get("/:driverId", getDashboardInfo);

module.exports = router;