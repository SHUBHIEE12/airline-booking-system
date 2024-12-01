const { CityService } = require("../services/index")

const cityService = new CityService();

const create = async ( req,res) => {

    try {

        const city =  await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully creates a city",
            err:{}
        })
         
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"error in creating city",
            err:error
        })
    }

}
// DELETE -> /city/:id  it is a params...
const destroy = async ( req,res) => {
    try {
        const response = cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message:"Successfully deleted the city",
            err:{}
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"error in deleting the city",
            err:error
        })
    }
}
// GEt -> /city/:id
const get = async ( req,res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:"City retrieved successfully",
            err:{}
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Error in getting city",
            err:error

        })
    }
}
const update = async ( req,res) => {
    try {

        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:"city updated successfuly",
            err:{}
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"error in updating city",
            err:error
        })
    }
}

const getall = async(req,res) =>{
    try {
        const cities = await cityService.getAllCities();
        return res.status(200).json({
            data:cities,
            success:true,
            message:"city  fetched successfully",
            err:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"error in   fetching cities",
            err:error
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    update,
    getall
}