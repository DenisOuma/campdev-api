const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({ success: "true", msg: "Show all bootcamps" });
});

router.post("/", (req, res) => {
	res.status(200).json({ success: "true", msg: "Add new Bootcamp" });
});

router.get("/:id", (req, res) => {
	res.status(200).json({ success: "true", msg: "Add new Bootcamp" });
});

router.put("/:id", (req, res) => {
	res
		.status(200)
		.json({ success: "true", msg: `Update BootCamp ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
	res
		.status(200)
		.json({ success: "true", msg: `Delete BootCamp ${req.params.id}` });
});

module.exports = router;
