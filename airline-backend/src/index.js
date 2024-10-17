const express = require("express");
const dotenv = require("dotenv");
const value = require("./config/serverConfig.js"); // Adjust this if you're exporting differently
const bodyParser = require("body-parser");

dotenv.config();

console.log(value.PORT);

const PORT = value.PORT;

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
};

setupAndStartServer();
