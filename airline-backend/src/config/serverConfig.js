const dotenv = require("dotenv");

dotenv.config();

const result = dotenv.config();
console.log("dotenv result:", result);
console.log("PORT from process.env:", process.env.PORT);




let value = {
    PORT: process.env.PORT  // Keep PORT wrapped in an object
};

module.exports = value;  // Export the value object
