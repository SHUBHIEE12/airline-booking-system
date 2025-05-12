const { FlightRepository, AirplaneRepository } = require("../repository/index");
const {compareTime} = require('../utils/helper')

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();  // ✅ fixed here
    }

    async createFlight(data) {
        try {

            if(compareTime(data.arrivalTime,data.departureTime))// compare time from utils folder
            {
                throw{error:'Arrival cannot be less than departure time'}
            }
            // we vcan business logic here...
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity,
            });

            return flight;
        } catch (error) {
            console.log("Something went wrong in flight service layer");
            throw { error };
        }
    }

    async getFlightData() {
        // logic to be implemented
    }
}

module.exports = FlightService;
