const {Flights} = require('../models/index') // reactor it to the flight.js as per convention
  const {Op} = require('sequelize')
class FlightRepository{

//  #privatemethod(){

//  }

//Creating filter for  flight search
  #createFilter(data) {
    let filter = {};

    if (data.arrivalAirportId) {
        filter.arrivalAirportId = data.arrivalAirportId;
    }

    if (data.departureAirportId) {
        filter.departureAirportId = data.departureAirportId;
    }

    if (data.minPrice || data.maxPrice) {
        filter.price = {};
        if (data.minPrice) {
            filter.price[Op.gte] = data.minPrice;
        }
        if (data.maxPrice) {
            filter.price[Op.lte] = data.maxPrice;
        }
    }

    return filter;
}


    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in flight repository layer")
            throw{error}
        }
    }

    async deleteFlight(flightId)
    {
        try {

        } catch (error) {
            
        }
    }

    async getFlight(flightId)
    {
        try {
             const flight = await Flights.findByPk(flightId);
             return flight
        } catch (error) {
            console.log("Something went wrong in flight repository layer");
            throw{error};
            
        }
    }
    async getAllFlights(filter)
    {
        try {
            const filterObject = this.#createFilter(filter)
             const flight = await Flights.findAll({
                where:filterObject
             });
             return flight;
        } catch (error) {
            console.log("Something went wrong in flight repository layer");
            throw{error};
            
        }
    }


}

module.exports = FlightRepository