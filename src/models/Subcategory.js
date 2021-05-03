import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Category from "./Category";

const Subcategory = sequelize.define(
    "subcategories",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
        },
        category_id: {
            type: Sequelize.INTEGER,
        },
        image: {
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
Category.hasMany(Subcategory, { foreignKey: "category_id" });
Subcategory.belongsTo(Category, { foreignKey: "category_id" });

export default Subcategory;
