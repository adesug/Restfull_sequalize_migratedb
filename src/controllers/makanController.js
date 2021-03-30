const {makan} = require('../models/');

module.exports = {
    
    getAllMakanan : (req, res ) => {
     
        makan.findAll()
        
        .then((data) => {
            res.status(200).send({
                msg : "get all makanan",
                status : 200,
                data
            })
            console.log(data);
            
        })
        
        .catch((error) => {
            res.status(500).send({
                msg: "Get all data is error",
                status: 500,
                error
            })
        })
    },
    createNewMakan : (req, res) => {
        const {body} = req ;

        makan.create(body)
        .then((data) => {
            res.status(200).send({
                msg : "create data success",
                status: 200,
                data
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "create data is error",
                status: 500,
                error
            })
        })
    },
    getMakanId : (req, res) => {
        const id = req.params.id;
        makan.findAll({
            where:{
                id
            }
        })
        .then((data) => {
            res.status(200).send({
                msg: "get id data makanan is success",
                status: 200,
                data
            })
        })
        .catch((error)=> {
            res.status(500).send({
                msg:"get data id is error",
                status: 500,
                error
            })
        })
    },
    updateMakanan : async (req,res) => {
        const {id} = req.params;
        const {body} = req
        
        let findmakan = await makan.findOne({
            where: {
                id 
            }
        });

        if(findmakan === null){
            res.status(404).send({
                msg : "update student is error",
                status : 404,
                error : "data is not found"
            })
        }

        makan.update (body,{
            where:{
                id
            }
        })
        .then ((data) => {
            const resObject = {...findmakan.dataValues, ...body}

            res.status(200).send({
                msg:"update data makanan is success",
                status: 200,
                data: resObject
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "update data is error",
                status: 500,
                error
            })
        })
    },
    deleteDataMakan : async (req,res) => {
        const {id} = req.params;

        let findmakan = await makan.findOne({
            where : {
                id
            }
        });

        if(findmakan === null){
            res.status(404).send({
                msg: "update makanan is error",
                status: 404,
                error: "data is not found"
            })
        }

        makan.destroy({
            where:({
                id
            })
        })
        .then((data) => {
            const resObject = {...findmakan.dataValues}

            res.status(200).send({
                msg : "Delete data students is success",
                status : 200,
                data : resObject
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "delete data is error",
                status: 500,
                error
            })

        })
    }


}