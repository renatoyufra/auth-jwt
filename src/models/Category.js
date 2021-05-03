import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Category = sequelize.define(
    "categories",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
        },
        image: {
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

export default Category;
