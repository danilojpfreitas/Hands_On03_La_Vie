const { DataTypes } = require("sequelize");
const db = require("../database");




const Paciente = db.define(
    "Paciente", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        idade: {
            type: DataTypes.DATE
        },
        createdAt: { type: DataTypes.DATE },
        updatedAt: { type: DataTypes.DATE },
    }, {
        tableName: "pacientes",
    });

module.exports = Paciente;