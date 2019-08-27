const model = require('./model');

module.exports = {
     postdata(req,res){
        let data = req.body ;
        model.push(data);
        res.status(200).json({
            message : "succesful" ,
            data : model
        })
     }
}