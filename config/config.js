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
    },
    "production": {
        username: "khhhudhbpstuon",
        password: "059cd404e2bbfc2eb779ad0495fb22936090cab1a4bdd18fe3e781a920771c0a",
        database: "d1f4i6kkdufvhr",
        host: 'ec2-3-210-12-0.compute-1.amazonaws.com',
        dialect: "postgres",
    }
};
