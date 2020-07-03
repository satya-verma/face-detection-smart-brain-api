# Face-Detection-Smart-Brain-Api

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. You must add your own API key in the `controllers/image.js` file to connect to Clarifai API.

You can grab Clarifai API key [here](https://www.clarifai.com/)

# Important

** This repo is the backend(Node) part of face-detection project. Check `Face-Detection-Smart-Brain` for frontend(React) part.

1. The database used in this project is `postgreSQL`
2. Check database section below to setup database for the project.

# Database

1. Install postgreSQL
2. create a new database in postgres named smart_brain. you can name your own. Make sure to change database configs in server.js accordingly.
3. create following tables in the smart_brain database: 
    1. create table users(id SERIAL PRIMARY KEY, name VARCHAR(100), email TEXT UNIQUE NOT NULL, entries BIGINT DEFAULT 0, joined TIMESTAMP NOT NULL);
    2. create table login(id SERIAL PRIMARY KEY, hash VARCHAR(100) NOT NULL, email TEXT UNIQUE NOT NULL);
