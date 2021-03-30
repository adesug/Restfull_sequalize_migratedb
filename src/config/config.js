// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }

module.exports = {
  development: {
    "username": "root",
    "password": null,
    "database": "sequelize_latihan2",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    username: DB_USERNAME_PRODUCTION,
    password: DB_PASSWORD_PRODUCTION,
    database: DB_DATABASE_PRODUCTION,
    host: DB_HOST_PRODUCTION,
    dialect: "postgress",
    protocol: "postgress",
    dialectOptions: {
      ssl : {
        require : true,
        rejectUnautorized : false
      }
    }

    
      }
}
