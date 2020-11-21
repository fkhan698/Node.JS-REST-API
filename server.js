require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const subscribersRouter = require('./routes/subscriber');


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use(express.json())

app.use('/subscribers', subscribersRouter);
app.listen(3000, () => console.log('Server started'));

