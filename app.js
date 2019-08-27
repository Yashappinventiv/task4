const express = require('express');
const app = express() ;
var cookieParser = require('cookie-parser');
const route = require('./view') ;
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(cookieParser());
app.use(route);

app.listen(3000 , () => {
    console.log("connected")
})