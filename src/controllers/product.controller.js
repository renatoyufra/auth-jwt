import { sequelize } from "../database/database";
const { QueryTypes } = require("sequelize");
import Product from "../models/Product";

export async function getProductById(req, res) {
    const product = await Product.findOne({
        where: { code: req.params.code },
        include: ["brand", "category"],
        attributes: ["id", "description", "brand.description"],
    });
    res.json({
        data: product,
    });
}
export async function getProductByCode(req, res) {
    const [results, metadata] = await sequelize.query(
        `SELECT p.id, p.description, p.code, p.description2, p.image,
        p.comments,
        c.description as categoria,
        s.description as subcategoria,
        b.description as marca,
        g.description as gender,
        a.description as age,
        u.description as sport,
        m.description as form,
        p.active
        FROM products p
        LEFT JOIN categories c ON p.category_id = c.id
        LEFT JOIN subcategories s ON p.subcategory_id = s.id
        LEFT JOIN brands b ON p.brand_id = b.id
        LEFT JOIN uses u ON p.uses_id = u.id
        LEFT JOIN ages a ON p.ages_id = a.id
        LEFT JOIN genders g   ON p.gender_id = g.id
        LEFT JOIN measurements m ON p.measurement_id = m.id
        WHERE p.code LIKE $1`,
        {
            bind: [req.params.code],
            type: QueryTypes.SELECT,
        }
    );

    res.json({
        data: results,
        header: metadata,
    });
}

export async function updateProduct(req, res) {
    
   
    try {
        const { id, ...properties } = req.body;
        if(Object.entries(properties).length === 0) {
            throw ('No properties data');
            res.status(502).send({
                mensaje: "No se encontró data a modificar"
            })
        }
        const response = await Product.update(
            { ...properties },
            {
                where: { id: req.params.id },
                returning: true,
            }
        )
        if (response[0] === 0) throw('No data found')  

        res.json({
            count: response[0],
            data: response[1]
        })
    } catch (error) {
        res.status(503).send({
            mensaje: "No se pudo modificar, consulte a soporte",
            error: error
        })
    }
}
