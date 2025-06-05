const express = require('express');
const CityController = require('../../controller/city-controller')
const FlightController = require("../../controller/flight-controller")
const AirportController = require("../../controller/airport-controller")

const router = express.Router();

//Router for the city
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getall)//getall is a controller function


// Router for the flights
router.post('/flights',FlightController.create)
router.get('/flights' ,FlightController.getAll)


//Router for the Airport

router.post('/airports',AirportController.create);

module.exports= router;