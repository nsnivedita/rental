const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./model/rental');
const FakeDB = require('./fake-db');
const rentalRouter = require('./router/Rental')
const app = express();
const Port = process.env.Port || 3001;

mongoose.connect(config.db_URI,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    const fakeDb = new FakeDB();
    fakeDb.seeDb();
});

app.use('/api/v1/rentals', rentalRouter);

app.listen(Port,()=>{
    console.log("App is running on port" + ":" + Port)
});