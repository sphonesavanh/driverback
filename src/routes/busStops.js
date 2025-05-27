const express = require("express");
const router = express.Router();
const axios = require("axios"); // or use database query if migrated

// Example if calling external PHP API
router.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://lao.busnavi.asia/api/busstop.php");
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching bus stops:", err.message);
    res.status(500).json({ error: "Failed to fetch bus stops" });
  }
});

module.exports = router;
