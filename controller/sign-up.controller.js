
const SignUpModel = require('../model/sign-up.model')

const signUpCreate = (req,res)=>{

    
    SignUpModel.create({

        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
        
    },(err,result)=>{
        if(err){
            res.send({
                message:"Not able to login",
                error: err
            })
        }
        res.send({
            message: "Signed Up Successfully",
            data: result
        })
    })

}


module.exports = {signUpCreate}