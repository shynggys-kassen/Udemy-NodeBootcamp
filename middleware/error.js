const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  console.log(err.stack.red);

  // Bad request (id is not exsisting)
  if (err.name === "CastError") {
    const message = `Recourse not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Duplicate values
  if (err.code === 11000) {
    const message = `Duplicate field entered`;
    error = new ErrorResponse(message, 400);
  }

  // Validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((value) => value.message);
    error = new ErrorResponse(messages, 400);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Server Error" });
};

module.exports = errorHandler;
