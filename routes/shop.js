


const rootDir = require('../util/path');
const path = require('path');

const express = require('express');

const router = express.Router();


router.get('/', (req,res) => {
    res.render(
        path.join(rootDir, 'views', 'shop'),{ 
        path: '/',
        title: 'Shop Page'
        }
    );
});

module.exports = router;