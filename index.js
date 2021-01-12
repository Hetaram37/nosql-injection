const express = require('express')
const mongoose = require('mongoose')
const mongoSanitize = require('express-mongo-sanitize');
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

mongoose.connect('mongodb://localhost:27017/my_db', { useUnifiedTopology: true, useNewUrlParser: true});

// Data sanitization against NoSQL query injection
// app.use(mongoSanitize());

const authRoute = require('./route/auth')
app.use('/', authRoute)

app.listen(8000, () => {
    console.log('Server is running on 8000');
})
