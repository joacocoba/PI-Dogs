const { DataTypes } = require('sequelize');
const setBgColor = () =>  {
    console.log(1)
    const randomColor = `#` + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('temperament', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        hex: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
}