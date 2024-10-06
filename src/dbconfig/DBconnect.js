import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_URL_CONNECTION);

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: false, alter: true });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export {connection, sequelize};