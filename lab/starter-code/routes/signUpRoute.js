const bcrypt = require("bcrypt");
const express = require('express')
const router = express.Router()
const { User } = require('../models/index')

router.post('/signup', async (req, res) => {
    try {
        let { username, password } = req.body;
        const record = await User.create({
            username,
            password
        });
        res.status(201).json(record);
    } catch (e) { res.status(403).send('Error Creating User'); }
});

module.exports = router;