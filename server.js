require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const ticketsRoutes = require("./routes/ticketsRoutes");

// express app
const app = express();
connectDB();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/tickets/", ticketsRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server started to listening on port ${process.env.PORT}`);
});
