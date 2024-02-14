const {
	postCar,
	getCar,
	getCarById,
	getCarByPrice,
	getCarByColor,
	updateCar,
	deleteCar,
} = require("../controllers/cars");

const carRoutes = require("express").Router();

carRoutes.post("/", postCar);
carRoutes.get("/", getCar);
carRoutes.get("/getById/:id", getCarById);
carRoutes.get("/getByPrice/:price", getCarByPrice);
carRoutes.get("/getByColor/:color", getCarByColor);
carRoutes.put("/:id", updateCar);
carRoutes.delete("/:id", deleteCar);

module.exports = carRoutes;
