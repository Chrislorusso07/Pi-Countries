const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Country", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    flagImage: {
      type: DataTypes.STRING,
    },
    continent: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
    },
    subregion: DataTypes.STRING,
    area: DataTypes.FLOAT,
    population: DataTypes.INTEGER,
  });
};
