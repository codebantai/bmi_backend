require('dotenv').config();

module.exports = {
    // url: process.env.DATABASE_URL,
    // dialect: 'postgres',

    // port: process.env.PORT || 5000,
    "development": {
        username: "root",
        password: "root",
        database: "sequelize_database_dev",
        host: process.env.DB_HOST,
        dialect: "postgres",
    }
};
