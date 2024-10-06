import { sequelize } from "../dbconfig/DBconnect.js";
import { DataTypes } from "sequelize";

const Education = sequelize.define('education', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    institution: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    endYear: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

export default Education;