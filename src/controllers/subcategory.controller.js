import { sequelize } from "../database/database";

import Subcategory from "../models/Subcategory";

export async function getAllSubcategories(req, res) {
    const subcategories = await Subcategory.findAll({
        where: { active: true },
        include: ["category"],
        attributes: ["id", "description", "image", "active", "category_id"],
    });
    res.json({
        data: subcategories,
    });
}

export const updateSubcategoryById = async (req, res) => {
    console.log(req.body);
    const { id, ...properties } = req.body;

    if (Object.entries(properties).length === 0) {
        res.status(502).send({
            mensaje: "No se encontró data a modificar",
        });
    }
    const subcategory = await Subcategory.update(
        { ...properties },
        {
            where: { id: req.params.id },
        }
    );
    res.json({
        data: subcategory,
    });
};
