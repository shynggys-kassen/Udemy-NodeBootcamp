const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoDB = require("./config/db");
const errorHandler = require("./middleware/error");
const color = require("colors");

// Initilize express app
const app = express();

// Parser. It is needed to get req.body
app.use(express.json());

// require Routes
const bootcamps = require("./routes/bootcamp");

// load env file:
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;

// Connect Mongoose database
mongoDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routing
app.use("/api/v1/bootcamps", bootcamps);

// Error Handler
app.use(errorHandler);

const server = app.listen(
  PORT,
  console.log(
    `SERVER is running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow
      .bold
  )
);

// Handle unhandeled rejections
// process.on("unhandledRejection", (err, promise) => {
//   console.log("server is closed due to error");
//   server.close(() => {
//     process.exit(1);
//   });
// });
