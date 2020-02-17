


const rootDir = require('../util/path');
const path = require('path');
const productsControllersUser = require('../controllers/user/Products');
const express = require('express');

const router = express.Router();


router.get('/', productsControllersUser.getProducts);

module.exports = router;