const sequelize = require('sequelize');

const database = new sequelize("NEWSLETTER","root","",{
    dialect:'mssql', host:'localhost',port:1433
});

database.sync();

module.exports = database;