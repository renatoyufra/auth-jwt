import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Brand = sequelize.define(
    "brands",
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

export default Brand;
