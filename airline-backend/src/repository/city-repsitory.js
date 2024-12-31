const { City } = require("../models/index")
const {Op} = require("sequelize")

//it is being consumed in city-servicce
class CityRepository{
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {

            throw{error};
        }
    }
    async deleteCity(cityId){
        try {
             await City.destroy({
                where:{
                    id:cityId
                }
             });
             return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw{error};
        }
    }

    async updateCity(cityId , data){
        try {
            // this approch is only valid in postgres;:: returning true is not valid in sequelize...
            // const city =  await City.update(data,{
            //     where : {
            //         id : cityId,
                
            //     }
            // });

            //this is valid in sequelize;
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            
            return city;
        } catch (error) {
            
        }


    }
    async getCity({cityId}){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {

            console.log("Something went wrong in repositary layer");
            throw(error);
            
        }
        
    }

    async getAllCities(filter)//filter can be empty also,we will pass it as a query param
    {
        try {
            if(filter.name){//if it has a name param
                const cities  = await City.findAll({
                    where :{
                        name:{
                            [Op.startsWith]: filter.name,
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll()
            return cities;
            
        } catch (error) {
            console.log("Something went wrong in repositary layer");
            throw(error);
            
        }
    }
}

    module.exports = CityRepository;
