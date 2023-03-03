const user = require('../models/datamodel')

exports.addmethod = async (req,res,next) => {
    try {
        const name = req.body.name
        const email = req.body.email
        const phone = req.body.phone
        console.log(name,email,phone)
        const data = await user.create({
            name:name,
            email:email,
            phone:phone
        })
        res.json({newuser:data})

    } catch (error) {
        console.log(error)
    }
}

exports.getmethod = async (req,res,next) => {
    try {
        const data = await user.findAll()
        res.json({alluser:data})


    } catch (error) {
        console.log(error)
    }
}

exports.deletemethod = async (req,res,next) => {
    try {
        if(!req.param.id){

        throw new Error ("id is mandatory to delete")
        }
        const detailsId = req.param.id
        await user.destroy({where : {id:detailsId}})






    } catch (error) {
        console.log(error)
    }
}