import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Use = sequelize.define(
    "uses",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
        },
        active: {
            type: Sequelize.INTEGER,
        },
    },
    {
        timestamps: false,
    }
);

export default Use;
