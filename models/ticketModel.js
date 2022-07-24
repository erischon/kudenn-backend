const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title value."],
    },
    problem: {
      type: String,
      required: [true, "Please add a title value."],
    },
    expected: {
      type: String,
      required: [true, "Please add a title value."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
