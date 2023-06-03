const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Bootcamp = require("../models/Bootcamp");
// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @Access  Public
exports.getBootCamps = asyncHandler(async (req, res, next) => {
	const bootCamps = await Bootcamp.find();

	res.status(200).json({
		success: true,
		count: bootCamps.length,
		data: bootCamps,
	});
});

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @Access  Public
exports.getBootCamp = asyncHandler(async (req, res, next) => {
	const bootCamp = await Bootcamp.findById(req.params.id);

	if (!bootCamp) {
		return next(
			new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
		);
	}
	res.status(200).json({
		success: true,
		data: bootCamp,
	});
});

// @desc    Create new bootcamps
// @route   POST /api/v1/bootcamps
// @Access  Private
exports.createBootCamp = asyncHandler(async (req, res, next) => {
	const bootCamp = await Bootcamp.create(req.body);

	res.status(201).json({
		success: true,
		data: bootCamp,
	});
});

// @desc    Update bootcamps
// @route   Put /api/v1/bootcamps/:id
// @Access  Private
exports.updateBootCamp = asyncHandler(async (req, res, next) => {
	const bootCamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	if (!bootCamp) {
		return next(
			new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
		);
	}
	res.status(200).json({
		success: true,
		data: bootCamp,
	});
});

// @desc    Delete bootcamps
// @route   DELETE /api/v1/bootcamps/:id
// @Access  Private
exports.deleteBootCamp = asyncHandler(async (req, res, next) => {
	const bootCamp = await Bootcamp.findByIdAndDelete(req.params.id);

	if (!bootCamp) {
		return next(
			new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
		);
	}
	res.status(200).json({
		success: true,
		data: {},
	});
});
