const {AirportService} = require("../services/index")

const airportService = new AirportService();

const create = async  (req , res ) =>{
    try {
        const result = await  airportService.create(req.body);
        return res.status(200).json({
            message:"Successfully created the airport",
            err:{},
            data:result,
            success:true

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:"Cannot create a new airport"
        })
        
    }
}



module.exports={
create,
}