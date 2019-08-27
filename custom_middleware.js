const model = require('./model');

module.exports = {
        checkID(req,res , next){
                
             let {id} =  req.body ;
             let found = false ;
             model.forEach( (elem) => {
                 if(elem.id == id){
                    found = true ;
                 }
             } )

             if(found){
                 res.status(404).json({
                        statusCode : 404 ,
                        message : "Unsuccesful",
                        data  : "data already exist"
                 })
             }else{
                 next() ;
             }

        }
}