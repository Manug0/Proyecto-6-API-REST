const Car = require("../models/cars");

// CREATE

const postCar = async (req, res, next) => {
	try {
		const newCar = new Car(req.body);
		const carSave = await newCar.save();
		return res.status(200).json(carSave);
	} catch (error) {
		return res.status(404).json("Error");
	}
};

// READ

const getCar = async (req, res, next) => {
	try {
		const allCar = await Car.find();
		return res.status(200).json(allCar);
	} catch (error) {
		return res.status(404).json("Error");
	}
};

const getCarById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const carById = await Car.findById(id);
		return res.status(200).json(carById);
	} catch (error) {
		return res.status(404).json("Error");
	}
};

const getCarByPrice = async (req, res, next) => {
	try {
		const { price } = req.params;
		const carByPrice = await Car.find({ price: { $lte: price } });
		return res.status(200).json(carByPrice);
	} catch (error) {
		return res.status(404).json("Error");
	}
};

const getCarByColor = async (req, res, next) => {
	try {
		const { color } = req.params;
		const carByColor = await Car.find({ color: color });
		return res.status(200).json(carByColor);
	} catch (error) {
		return res.status(404).json("Error");
	}
};

// UPDATE

const updateCar = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updatedCar = new Car(req.body);
		updatedCar._id = id;
		const update = await Car.findByIdAndUpdate(id, updatedCar);
		return res.status(200).json(update);
	} catch (error) {
		return res.status(404).json("Error");
	}
};

// DELETE

const deleteCar = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedCar = await Car.findByIdAndDelete(id);
		return res.status(200).json(deletedCar);
	} catch (error) {
		return res.status(404).json("Error");
	}
};

module.exports = {
	postCar,
	getCar,
	getCarById,
	getCarByPrice,
	getCarByColor,
	updateCar,
	deleteCar,
};
