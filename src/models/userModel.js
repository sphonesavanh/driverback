const pool = require("../db/database");

const findUserByUsername = async (username) => {
  const query = "SELECT * FROM users WHERE username = $1";
  const result = await pool.query(query, [username]);
  return result.rows[0];
};

module.exports = {
  findUserByUsername,
};
