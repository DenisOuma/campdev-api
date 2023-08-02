const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: [true, "Please add a cource Title"],
	},
	description: {
		type: String,
		require: [true, "Please add a description"],
		trim: true,
	},
	weeks: {
		type: String,
		require: [true, "Please add a number of Weeks"],
		trim: true,
	},

	tuition: {
		type: String,
		required: [true, "Please add a minimum skill"],
	},

	minimumSkill: {
		type: String,
		required: [true, "Please add a minimum skill"],
		enum: ["beginner", "intermediate", "advanced"],
	},

	scholarhipsAvailable: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	bootcamp: {
		type: mongoose.Schema.ObjectId,
		ref: "Bootcamp",
		required: true,
	},
});

module.exports = mongoose.model("Course", CourseSchema);
