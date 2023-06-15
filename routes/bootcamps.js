const express = require("express");
const router = express.Router();

const {
	getBootCamps,
	getBootCamp,
	createBootCamp,
	updateBootCamp,
	deleteBootCamp,
	getBootcamopsInRadius,
} = require("../controllers/bootcamps");

router.route("/radius/:zipcode/:distance").get(getBootcamopsInRadius);
router.route("/").get(getBootCamps).post(createBootCamp);
router
	.route("/:id")
	.get(getBootCamp)
	.put(updateBootCamp)
	.delete(deleteBootCamp);

module.exports = router;
