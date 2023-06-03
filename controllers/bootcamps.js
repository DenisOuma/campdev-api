const { json } = require("express");
const Bootcamp = require("../models/Bootcamp");
// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @Access  Public
exports.getBootCamps = async (req, res, next) => {
	try {
		const bootCamps = await Bootcamp.find();

		res.status(200).json({
			success: true,
			data: bootCamps,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
		});
	}
};

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @Access  Public
exports.getBootCamp = async (req, res, next) => {
	try {
		const bootCamp = await Bootcamp.findById(req.params.id);

		if (!bootCamp) {
			return res.status(400).json({
				success: false,
			});
		}
		res.status(200).json({
			success: true,
			data: bootCamp,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
		});
	}
};

// @desc    Create new bootcamps
// @route   POST /api/v1/bootcamps
// @Access  Private
exports.createBootCamp = async (req, res, next) => {
	try {
		const bootCamp = await Bootcamp.create(req.body);

		res.status(201).json({
			success: true,
			data: bootCamp,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
		});
	}
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
