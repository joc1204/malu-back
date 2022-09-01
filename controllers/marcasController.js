let db = require('../database/models');

const marcasController = {
    crear:async(req,res)=>{
        console.log(req.body);
        try {
            const result= await db.Marcas.create(req.body);
            res.json(result)
        } catch (error) {
            res.status(412).json({message:error.message});
        }
    },
    listar:async(req,res)=>{
        try {
            const marcas=await db.Marcas.findAll({include:[{association:"articulos"}]})
            res.send(marcas)
        } catch (error) {
            res.json({message:error.message})
        }
    },
    listarone:async(req,res)=>{
        try {
            const marca=await db.Marcas.findAll({include:[{association:"articulos"}],
                                where:{id:req.params.id}})
                res.send(marca)
        } catch (error) {
            res.json({message:error.message})
        }
    },
    editar:async(req,res)=>{
        try {
            db.Marcas.update(req.body,{
                where:{id:req.params.id}
            })
            res.json({message: "Marca editado"})
        } catch (error) {
            res.json({message:error.message})            
        }
    },
    borrar:async(req,res)=>{
        try {
            db.Marcas.destroy({
                where:{id:req.params.id}
            })
            res.json({message:"marca borrada"})
        } catch (error) {
            res.json({message:error.message})
        }
    }
}

module.exports = marcasController;