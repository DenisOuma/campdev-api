const Bootcamp = require("../models/Bootcamp");
// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @Access  Public
exports.getBootCamps = (req, res, next) => {
	res
		.status(200)
		.json({ success: "true", msg: "Show all bootcamps", hello: req.hello });
};

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @Access  Public
exports.getBootCamp = (req, res, next) => {
	res
		.status(200)
		.json({ success: "true", msg: `Get single Bootcamp ${req.params.id}` });
};

// @desc    Create new bootcamps
// @route   POST /api/v1/bootcamps
// @Access  Private
exports.createBootCamp = async (req, res, next) => {
	const bootCamp = await Bootcamp.create(req.body);

	res.status(201).json({
		success: true,
		data: bootCamp,
	});
};

// @desc    Update bootcamps
// @route   Put /api/v1/bootcamps/:id
// @Access  Private
exports.updateBootCamp = (req, res, next) => {
	res
		.status(200)
		.json({ success: "true", msg: `Update BootCamp ${req.params.id}` });
};

// @desc    Delete bootcamps
// @route   DELETE /api/v1/bootcamps/:id
// @Access  Private
exports.deleteBootCamp = (req, res, next) => {
	res
		.status(200)
		.json({ success: "true", msg: `Delete BootCamp ${req.params.id}` });
};
