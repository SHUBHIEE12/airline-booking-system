const dotenv = require("dotenv");

dotenv.config();



let value = {
    PORT: process.env.PORT  // Keep PORT wrapped in an object
};

module.exports = value;  // Export the value object
