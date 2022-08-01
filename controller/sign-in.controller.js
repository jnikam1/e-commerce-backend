
const SignInModel = require('../model/sign-in.model')

const signInCreate = (req,res)=>{

    
    SignInModel.create({

        email: req.body.email,
        password: req.body.password,
        
    },(err,result)=>{
        if(err){
            res.send({
                message:"Not able to login",
                error: err
            })
        }
        res.send({
            message: "Successfully Logged In",
            data: result
        })
    })

}


module.exports = {signInCreate}