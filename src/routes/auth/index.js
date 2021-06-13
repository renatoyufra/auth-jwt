import { Router } from "express";
import User from "../../models/User";
const router = Router();

router.post("/register", async (req, res, next) => {
    res.send("register route");
});

router.post("/login", async (req, res, next) => {
    const user = await User.findAll({
        where: {
            id: 1,
        },
    });

    // Send
    res.status(401).send({
        message: "Usuario obtenido con éxito",
        data: user,
    });
});

router.post("/refresh-token", async (req, res, next) => {
    res.send("refresh token");
});

router.delete("/logout", async (req, res, next) => {
    res.send("logout route");
});

export default router;
