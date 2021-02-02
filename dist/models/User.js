"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const Sequelize = require("sequelize");
// const sequelize = require("../database/database");
var User = _database.sequelize.define("users", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  email: {
    type: _sequelize["default"].STRING
  },
  password: {
    type: _sequelize["default"].STRING
  },
  username: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false
}); // module.exports = User;


var _default = User;
exports["default"] = _default;