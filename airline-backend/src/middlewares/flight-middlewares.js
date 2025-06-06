const validateCreateFlight = (req , res , next) => {
     if (
        
        !req.body.flightNumber ||
        !req.body.airplaneId||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId||
        !req.body.arrivalTime||
        !req.body.departureTime||
        !req.body.price

     )
     {
        //id any of the body param is missing we come inside

        return res.status(400).json({
            data:{},
            success:false,
            message:"Invalid request body for creating the flight",
            err:"Missing the manddatory properties to create the flight"
        });
     }

     next();
}
module.exports = {
    validateCreateFlight
}