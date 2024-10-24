const { City } = require("../models/index")


class CityRepositary{
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {

            throw{error};
        }
    }
    async deleteCity({cityId}){
        try {
             await City.destroy({
                where:{
                    id:cityId
                }
             });
        } catch (error) {
            console.log("Something went wrong in repositary layer");
            throw{error};
        }
    }

    async updateCity(CityId , data){
        try {
            const city =  awit City.update(data,{
                where : {
                    id : cityId,
                }
            });

            return city;
        } catch (error) {
            
        }


    }
    async getCity({CityId}){
        try {
            const city = await City.findByPk(CityId);
            return city;
        } catch (error) {

            console.log("Something went wrong in repositary layer");
            throw(error);
            
        }
        
    }
}

    module.exports = CityRepositary;
