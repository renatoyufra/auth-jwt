import User from "../models/User";
// const User = require("../models/User");

export async function getUsers(req, res) {
    const users = await User.findAll();
    res.json({
        data: users,
    });
}
