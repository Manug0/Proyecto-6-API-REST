const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
	{
		brand: { type: String, required: true },
		name: { type: String, required: true },
		color: { type: String, required: true },
		price: { type: Number, required: true },
		year: { type: Number, required: true },
	},
	{
		timestamps: true,
		collection: "cars",
	}
);

const Car = mongoose.model("cars", carSchema, "cars");
module.exports = Car;
