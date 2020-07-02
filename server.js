const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');

// import controllers
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

// database connection
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'test',
        database: 'smart_brain'
    }
});

// app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// listening
app.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT}`);
});

// root
app.get('/', (req, res) => {
    res.send("it's working");
})

// signin
app.post('/signin', (req, res) => { signin.signinHandler(req, res, db, bcrypt) });

// register
app.post('/register', (req, res) => { register.registerHandler(req, res, db, bcrypt) });

// profile
app.get('/profile/:id', (req, res) => { profile.profileHandler(req, res, db) });

// image count
app.put('/image', (req, res) => { image.imageHandler(req, res, db) });

// image url
app.post('/imageurl', (req, res) => { image.apiCallHandler(req, res) });


