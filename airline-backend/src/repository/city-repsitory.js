const { City } = require("../models/index")


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
}

    module.exports = CityRepository;
