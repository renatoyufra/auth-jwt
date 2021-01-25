const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");

require("dotenv").config();

const AuthRoute = require("./routes/auth");

const app = express();
app.use(morgan("dev"));

app.get("/", async (req, res, next) => {
    res.send("Hello cuy.");
});

app.use("/auth", AuthRoute);

app.use(async (req, res, next) => {
    // const error = new Error("Not Found");
    // error.status = 404;
    // next(error);
    next(createError.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
