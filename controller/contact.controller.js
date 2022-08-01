
const ContactModel = require('../model/contact.model')

const ContactCreate = (req,res)=>{

    
    ContactModel.create({

        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        
    },(err,result)=>{
        if(err){
            res.send({
                message:"Not able to send the message",
                error: err
            })
        }
        res.send({
            message: "Message sent successfully",
            data: result
        })
    })

}


module.exports = {ContactCreate}