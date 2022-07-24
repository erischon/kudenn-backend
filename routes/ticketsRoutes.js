const express = require("express");
const router = express.Router();

const Ticket = require("../models/ticketModel");

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

// POST a new workout
router.post("/", async (req, res) => {
  const { title, problem, expected } = req.body;

  try {
    const ticket = await Ticket.create({ title, problem, expected });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
