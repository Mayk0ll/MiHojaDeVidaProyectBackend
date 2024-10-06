import { sequelize } from "../dbconfig/DBconnect.js";
import { DataTypes } from "sequelize";

const Experience = sequelize.define('experience', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endDate: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Experience;