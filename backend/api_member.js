const express = require("express");
const router = express.Router();
const User = require("./models/user");
const bcryptjs = require("bcryptjs");

router.post("/auth/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    password = bcryptjs.hash(password, salt, 8);
    let result = await User.create({ username, password });
    res.json({ result: result, message: "register successfully" });
  } catch (error) {
    res.status(500).json({ result: error, message: "" });
  }
});

router.post("/auth/login", (req, res) => {});
module.exports = router;