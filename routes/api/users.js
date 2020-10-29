const express = require('express')
const router = express.Router()

// @route       GET api/users
// @describe    Test route
// @access      Public
router.get('/', (req, res) => {
    res.send('User route')
})