import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Gender = sequelize.define(
    "genders",
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

export default Gender;
