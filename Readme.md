# Welcome to Flights service

##Project Setup
-clone the project on  your local
-Execute `npm install` on the same path as of your root directory of the downloaded prject
-create    `.env` file in the root directory and add the following varaiable
  `-PORT = 3000`
- Inside the src/config folder create a new file config.json and the add the followinf piece of json

```
{
  "development": {
    "username": <Your db login name>,
    "password": <your sql password>,
    "database": "your database name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
 
}
