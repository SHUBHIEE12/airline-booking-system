const {Flights} = require('../models/index') // reactor it to the flight.js as per convention
  
class FlightRepository{

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
}

module.exports = FlightRepository