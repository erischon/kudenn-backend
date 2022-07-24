const express = require("express");

const router = express.Router();

/**
 * GET all tickets
 * @route   /api/tickets/
 * @access  Private
 */
router.get("/", (req, res) => {
  res.json({ msg: "GET all tickets" });
});

// GET a single ticket
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single ticket" });
});

// POST a new ticket
router.post("/", (req, res) => {
  res.json({ msg: "POST a new ticket" });
});

// DELETE a ticket
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a ticket" });
});

// UPDATE a ticket
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a ticket" });
});

module.exports = router;
