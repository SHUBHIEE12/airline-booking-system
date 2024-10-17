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
    "username": <Your db login>,
    "password": <your sql password>,
    "database": <Your data base name>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
 
}
```

-Once you have added db config go to the src folder and execute ` npz squelize init `

##DB desing
 -Airplane table
 -Flight
 -Airport
 -City

 -A Flight belongs to an airplane but one airplane can be used in multiple flights
 -A city has many flights , but a  flight belongs to one  airport
  ---
