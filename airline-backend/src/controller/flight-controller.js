const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully created a flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create flight",
            err: error
        });
    }
};

const getAll =  async(req,res) =>{

    try {
         const flight = await flightService.getAllFlightData(req.query);
         return res.status(200).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully fetched a flight"
         })
    } catch (error) {
         console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetched flight",
            err: error
        });
    }
}

module.exports = {
    create,
    getAll
};
