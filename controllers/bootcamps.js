// DO NOT REPEAT YOURSELF

const Bootcamp = require("../models/Bootcamps");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");

// @desc    Get all bootcamps
// @route   GET api/v1/bootcamps/
// @access  Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  let bootcamps = await Bootcamp.find();
  res.status(200).json({ success: true, data: bootcamps });
});

// @desc    Get single bootcamp
// @route   GET api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  let bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Recourse not found with id of ${req.params.id}`, 500)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Paste all bootcamps
// @route   POST api/v1/bootcamps/
// @access  Public
exports.postBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Recourse not found with id of ${req.params.id}`, 500)
    );
  }
  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

// @desc    Update all bootcamps
// @route   PUT api/v1/bootcamps/:id
// @access  Public
exports.putBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Recourse not found with id of ${req.params.id}`, 500)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc    DELETE single bootcamps
// @route   DELETE api/v1/bootcamps/:id
// @access  Public
exports.deleteBoocamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Recourse not found with id of ${req.params.id}`, 500)
    );
  }
  res.status(200).json({ success: true });
});
