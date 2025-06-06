
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // since city has  many airports so its is 1:N relationship
    static associate(models) {
      // define association here
      this.hasMany(models.Airport,{
        foreignKey:"CityId"
      })
    }
  }
  City.init({
    name: 
    {
      type:DataTypes.STRING,
      allowNull : false,
      unique:true
    }
   
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};