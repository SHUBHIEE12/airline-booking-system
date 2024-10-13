import express from "express";
import dotenv from "dotenv";
import value from "./config/serverConfig.js";

dotenv.config();

console.log(value.PORT);

const PORT = value.PORT;

const setupAndStartServer = async () => {
    const app = express();

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
};

setupAndStartServer();
