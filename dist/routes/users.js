"use strict";

var express = require("express");

var router = express.Router(); // import { getUsers } from "../controllers/user.controller";

var getUsers = require("../controllers/user.controller"); // /api/users/


router.get("/", getUsers); // export default router;

module.exports = router;