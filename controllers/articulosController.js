let db = require('../database/models');

const articulosController = {
    crear:async(req,res)=>{
        try {
            const result=await db.Articulos.create(req.body)
            res.json(result)
        } catch (error) {
            res.json({message:error.message});
        }
    },
    listar:async (req,res) => {
        try {
            const articulos=await db.Articulos.findAll({
                include:[{association:"rubros"},{association:"marcas"}]
                })
                res.send(articulos)
        } catch (error) {
            res.json({message:error.message});
        }
    },
    listarone:async (req,res)=> {
        try {
            const articulo=await db.Articulos.findAll(
                {include:[{association:"rubros"},{association:"marcas"}],
                where:{
                    art_id:req.params.id
                }
            })
                res.send(articulo)
        } catch (error) {
            res.json({message:error.message});
        }
    },

    editar: async (req,res)=>{
            try {
            await db.Articulos.update(req.body,
                {
                where:{art_id:req.params.id}
                })
                res.json({
                    "message":"Editado"
                })
            } catch (error) {
                res.json({message:error.message});
            }
        },
    borrar:async (req,res)=>{
        try {
            await db.Articulos.destroy({
                where:{art_id:req.params.id}
            })
            res.json({
                "message":"Borrado"
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = articulosController;