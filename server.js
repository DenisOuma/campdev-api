const express = require("express");
const bootcamps = require("./routes/bootcamps");

const dotenv = require("dotenv");
// Rote files
// Loading the process or config file
dotenv.config({ path: "./config/config.env" });

const app = express();

// Moute routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

// run server
app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
