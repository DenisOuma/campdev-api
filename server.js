const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

const connectDB = require("./config/db");
// Rote files

// Loading the process or config file
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDB();
const bootcamps = require("./routes/bootcamps");

const app = express();

// Body parser after model
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// Moute routers
app.use("/api/v1/bootcamps", bootcamps);

// set Port application
const PORT = process.env.PORT || 5001;

// run server
const server = app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`.magenta
			.bold
	)
);

process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`.red);

	// cloese Server and exit process
	server.close(() => process.exit(1));
});
