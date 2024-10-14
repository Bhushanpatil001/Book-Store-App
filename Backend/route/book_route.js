const express = require('express');
const { getbook } = require('../controller/book_controller.js');

const router = express.Router();

router.get('/', getbook);

module.exports = router;