//Dependencies
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;

//Mongoose Database Connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection
// Database connection error/success
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use((req, res, next) => {
    console.log('Middleware active');
    next();
})
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//Controller
const productsController = require('./controllers/product');
app.use('/', productsController);

// Listen
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});