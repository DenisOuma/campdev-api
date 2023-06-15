const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const geocoder = require("../utils/geocoder");
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

// @desc    get bootcamps within a radius
// @route   DELETE /api/v1/bootcamps/radius/:zipcode/:distance
// @Access  Private
exports.getBootcamopsInRadius = asyncHandler(async (req, res, next) => {
	const { zipcode, distance } = req.params;

	// Get latitude/longitude from geocoder

	const loc = await geocoder.geocode(zipcode);
	const lat = loc[0].latitude;
	const lng = loc[0].longitude;

	// calc radius using radius
	// Divding distance by radius of earth
	// Easrth Radius = 3,963 mi / 6,378 km

	const radius = distance / 6963;

	const bootcamps = await Bootcamp.find({
		location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
	});

	res.status(200).json({
		success: true,
		count: bootcamps.length,
		data: bootcamps,
	});
});
