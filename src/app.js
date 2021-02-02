import express, { json } from "express";
import morgan from "morgan";

const createError = require("http-errors");

// Importing routes
import authRoute from "./routes/auth";
import userRoute from "./routes/users";

// Initialization
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(json());

// routes
app.get("/", async (req, res, next) => {
    res.send("Hello cuy.");
});

app.use("/auth", authRoute);
app.use("/api/users", userRoute);

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

export default app;
