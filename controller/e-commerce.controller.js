
const ProductModel = require('../model/e-commerce.model')

const create = (req,res)=>{

    // Two para
    // 1. Object or document that needs to be stored
    // 2. Callback funtion
    ProductModel.create({

        title: req.body.title,
        imageUrl: req.body.imageUrl,
        id: req.body.id,
        linkUrl:req.body.id

    },(err,result)=>{
        if(err){
            res.send({
                message:"Not able to insert the data",
                error: err
            })
        }
        res.send({
            message: "Data Inserted",
            data: result
        })
    })

}


const read = (req,res) =>{
    ProductModel.find({},(err,result) =>{
        if(err){
            res.send({
                message:"Not able to read the data",
                error: err
            })
        }
        res.send({
            message: "Read sucessful",
            data: result
        })
    })
}

module.exports = {create,read}