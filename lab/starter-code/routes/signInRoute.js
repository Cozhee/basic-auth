const express = require('express')
const router = express.Router()
const basicAuth = require('../auth/middleware/basicAuth')

router.post('/signin', basicAuth, async (req, res, next) => {
    const user = req.user
    res.status(200).json({user: user})
});

module.exports = router;