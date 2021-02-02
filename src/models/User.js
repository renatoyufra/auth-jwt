// const Sequelize = require("sequelize");
import Sequelize from "sequelize";
import { sequelize } from "../database/database";
// const sequelize = require("../database/database");

const User = sequelize.define(
    "users",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
        username: {
            type: Sequelize.STRING,
        },
    },
    {
        timestamps: false,
    }
);

// module.exports = User;
export default User;
