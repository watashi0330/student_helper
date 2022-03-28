const express = require('express');
const mongoose = require('mongoose');
const mongoURI = require('./config/db');
const app = express();
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');


// middleware
app.use(express.json());


// route
app.use('/user', userRoutes);


const port = process.env.PORT || 8000;
mongoose.connect(mongoURI).then(() => {
    app.listen(port, () => console.log(`listening on http://localhost:${port}`))
});