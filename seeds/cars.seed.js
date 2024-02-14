const mongoose = require("mongoose");
const Car = require("../src/api/models/cars");
require("dotenv").config();

const cars = [
	{
		brand: "Mazda",
		name: "X3",
		color: "red",
		price: 30000,
		year: 2021,
	},
	{
		brand: "BMW",
		name: "IX1",
		color: "black",
		price: 50000,
		year: 2024,
	},
	{
		brand: "Audi",
		name: "A1",
		color: "white",
		price: 20000,
		year: 2018,
	},
	{
		brand: "Mercedes Benz",
		name: "Viano",
		color: "gray",
		price: 60000,
		year: 2010,
	},
	{
		brand: "Seat",
		name: "León",
		color: "red",
		price: 25000,
		year: 2020,
	},
];

const carDB = cars.map((car) => new Car(car));
mongoose
	.connect(process.env.DB_URL)
	.then(async () => {
		const allCars = await Car.find();
		if (allCars.length) {
			await Car.collection.drop();
		}
	})
	.catch((err) => console.log(`Error al eliminar los datos: ${err}`))
	.then(async () => {
		await Car.insertMany(carDB);
		console.log("BBDD creada");
	})
	.catch((err) => console.log(`Error al insertar los datos: ${err}`))
	.finally(() => mongoose.disconnect());
