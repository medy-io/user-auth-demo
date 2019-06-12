const config = require('../config');
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
// app routes
// register new users, etc.
const users = require('./routes/users');
// login existing users, etc.
const auth = require('./routes/auth');
const app = express();

if (!config.jwtPrivateKey) {
    console.log('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}
// connect to Mongo DB
mongoose.connect('mongodb://localhost/card-borrower-db')
    .then(() => console.log('Connected to MongoDb...'))
    .catch((error) => console.error('Could not connect to Mongo DB... ', error));

app.use(cors());
app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
// app.get('/email/confirm/:id', emailController.confirmEmail)
// PORT
const port = process.env.PORT || 3000;
app.listen(port, (console.log(`Port: ${port}`)));

// Authentication => Logging In
// Authorization =>  Permissioned Users