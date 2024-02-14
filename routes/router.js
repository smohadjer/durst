const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'hello from express.js server'});
});

module.exports = router;
