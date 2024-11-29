const express = require("express");
const dotenv = require("dotenv");
const value = require("./config/serverConfig.js"); // Adjust this if you're exporting differently
const bodyParser = require("body-parser");
const CityRepository = require("./repository/city-repsitory.js");

dotenv.config();



const PORT = value.PORT;

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`);
        const repo = new CityRepository();

        try {
            await repo.createCity({ name: "New Delhi" });
            console.log("City created successfully");
        } catch (error) {
            console.error("Error creating city:", error);
        }
    });
};

setupAndStartServer();
