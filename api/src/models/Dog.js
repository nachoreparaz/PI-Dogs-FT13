const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      foreignKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    años: {
      type: DataTypes.INTEGER
    },
    temper:{
      type: DataTypes.STRING,
    },
    raza: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://s1.eestatic.com/2020/08/11/curiosidades/mascotas/mascotas-perros-curiosidades_512209327_157471851_1706x960.jpg"   
    }

  });
};
