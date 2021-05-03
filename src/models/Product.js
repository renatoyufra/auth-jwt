import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Brand from "./Brand";
import Category from "./Category";
import Subcategory from "./Subcategory";
import Age from "./Age";
import Gender from "./Gender";
import Use from "./Use";
import Form from "./Form";

const Product = sequelize.define(
    "products",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
        },
        description2: {
            type: Sequelize.STRING,
        },
        code: {
            type: Sequelize.STRING,
        },
        image: {
            type: Sequelize.STRING,
        },
        regime: {
            type: Sequelize.STRING,
        },
        category_id: {
            type: Sequelize.INTEGER,
        },
        subcategory_id: {
            type: Sequelize.INTEGER,
        },
        brand_id: {
            type: Sequelize.INTEGER,
        },
        ages_id: {
            type: Sequelize.INTEGER,
        },
        gender_id: {
            type: Sequelize.INTEGER,
        },
        use_id: {
            type: Sequelize.INTEGER,
        },
        measurement_id: {
            type: Sequelize.INTEGER,
        },
    },
    {
        timestamps: false,
    }
);
Brand.hasMany(Product, { foreignKey: "brand_id" });
Product.belongsTo(Brand, { foreignKey: "brand_id" });

Category.hasMany(Product, { foreignKey: "category_id" });
Product.belongsTo(Category, { foreignKey: "category_id" });

Subcategory.hasMany(Product, { foreignKey: "subcategory_id" });
Product.belongsTo(Subcategory, { foreignKey: "subcategory_id" });

Age.hasMany(Product, { foreignKey: "ages_id" });
Product.belongsTo(Age, { foreignKey: "ages_id" });

Gender.hasMany(Product, { foreignKey: "gender_id" });
Product.belongsTo(Gender, { foreignKey: "gender_id" });

Use.hasMany(Product, { foreignKey: "use_id" });
Product.belongsTo(Use, { foreignKey: "use_id" });

Form.hasMany(Product, { foreignKey: "measurement_id" });
Product.belongsTo(Form, { foreignKey: "measurement_id" });

export default Product;
