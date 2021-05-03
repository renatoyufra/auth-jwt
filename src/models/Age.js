import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Age = sequelize.define(
    "Ages",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
    },
    {
        timestamps: false,
    }
);

export default Age;
