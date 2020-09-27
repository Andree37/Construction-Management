const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const Knex = require('knex');
require('dotenv').config()

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const knex = Knex(
    {
        client: 'pg',
        useNullAsDefault: true,
        connection: process.env.PG_CONNECTION_STRING
    }
)

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log(`App listening at http://localhost:${3000}`)
});

