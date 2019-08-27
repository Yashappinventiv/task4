const express  = require('express');
const route = express.Router() ;
const controler = require('./controller');
const middleware = require('./custom_middleware')



route.post('/' , middleware.checkID , (req,res) => {
    
    controler.postdata(req,res) ;
    console.log(req.cokkies);
})    

module.exports = route ;