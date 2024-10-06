import { sequelize } from "../dbconfig/DBconnect.js";
import { DataTypes } from "sequelize";

const Certificate = sequelize.define('certificate', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

export default Certificate;