const express = require("express");
const dotenv = require("dotenv");

// Loading the process or config file
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

// run server
app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
