import express from "express";
import dotenv from "dotenv";
import value from "./config/serverConfig.js";
import bodyparser from"body-parser"

dotenv.config();

console.log(value.PORT);

const PORT = value.PORT;

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended : true}));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
};

setupAndStartServer();
