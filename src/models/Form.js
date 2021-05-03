import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Form = sequelize.define(
    "measurements",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        code: {
            type: Sequelize.STRING,
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

export default Form;
