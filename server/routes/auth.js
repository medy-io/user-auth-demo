// logging users in

// name, email passwords
// email: { type: String, unique: true }const { Rental } = require('../schema/rentalsSchema');

const { User } = require('./../schema/userSchema');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const express = require('express');
const validateAuth = require('../validation/validateAuth');
const router = express.Router();

// post by user
router.post('/', async (request, response) => {
    const { error } = validateAuth.validateAuth(request.body);
    if (error) return response.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: request.body.email });
    if (!user) return response.status(400).send('Invalid email or password.');

    const validPassword = await bcrypt.compare(request.body.password, user.password);
    if (!validPassword) return response.status(400).send('Invalid email or password.');
    // simpley delete token on the client side to logout of the application
    const token = user.generateAuthToken();
    // json webtoken
    response.send(token);
});



module.exports = router;