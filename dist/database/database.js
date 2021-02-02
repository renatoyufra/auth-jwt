"use strict";

var Sequelize = require("sequelize");

var sequelize = new Sequelize("erp", "postgres", "pgcuy", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
module.exports = sequelize;