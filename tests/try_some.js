require("dotenv").config();
const express = require("express");
const my_app = express();
const authRouter = require("../routes/authRouter");
const adminRouter = require("../routes/adminRouter");
const db = require("../models");






my_app.use(`/${process.env.SR_URL}`, authRouter);
my_app.use(`/${process.env.SR_URL}`, adminRouter);



// const my_app = require("./server");
my_app.listen(5001, async () => {
  await db.sequelize.authenticate();
  console.log("Database Connected");
  console.log("Server has started!");
});

module.exports = my_app