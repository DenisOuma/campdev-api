const express = require("express");
const dotenv = require("dotenv");

// Loading the process or config file
dotenv.config({ path: "./config/config.env" });

const app = express();

// Working with routes for the application

app.get("/api/v1/bootcamps", (req, res) => {
	res.status(200).json({ success: "true", msg: "Show all bootcamps" });
});

app.post("/api/v1/bootcamps", (req, res) => {
	res.status(200).json({ success: "true", msg: "Add new Bootcamp" });
});

app.put("/api/v1/bootcamps/:id", (req, res) => {
	res
		.status(200)
		.json({ success: "true", msg: `Update BootCamp ${req.params.id}` });
});

app.delete("/api/v1/bootcamps/:id", (req, res) => {
	res
		.status(200)
		.json({ success: "true", msg: `Delete BootCamp ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

// run server
app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
