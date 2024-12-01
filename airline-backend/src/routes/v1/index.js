const express = require('express');
const CityController = require('../../controller/city-controller')

const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);

module.exports= router;