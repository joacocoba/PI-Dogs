const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.JSON,
      allowNull: false
    },
    weight: {
      type: DataTypes.JSON,
      allowNull: false
    },
    life_span: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://images.unsplash.com/photo-1423958950820-4f2f1f44e075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
