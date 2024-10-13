import dotenv from "dotenv";

dotenv.config();

let value = {
    PORT: process.env.PORT  // Keep PORT wrapped in an object

}

export default value;