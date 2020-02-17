const express = require("express");
const parser = require('body-parser');
const path = require('path');
const app = express();
const shopRoute = require('./routes/shop');

app.use(parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug')



app.use(shopRoute);


PORT = 3000
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`)})