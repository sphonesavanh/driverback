const express = require("express");
const router = express.Router();
const { loginDriver } = require("../controllers/authController");

router.post("/", loginDriver);

module.exports = router;
