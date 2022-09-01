let db = require('../database/models');


const rubrosController = {
    crear: async (req, res) => {
        try {
            const results = await db.Rubros.create(req.body)
            res.json(results)
        } catch (error) {
            res.status(412).json({ message: error.message });
        }
    },
    listar: async (req, res) => {
        try {
            const rubros = await db.Rubros.findAll({ include: [{ association: "articulos" }] })
            for(let i=0;i < rubros.length;i++){
                rubros[i].setDataValue("endpoint","rubros/"+rubros[i].id)
                }
            let listrubros={
                meta:{
                    status:200,
                    total:rubros.length
                },
                data:rubros

            }
            res.json(listrubros)
        } catch (error) {
            res.json({ message: error.message })
        }
    },
    listarone: async (req, res) => {
        try {
            const rubro = await db.Rubros.findAll({
                include: [{ association: "articulos" }],
                where: { id: req.params.id }
            })
            res.send(rubro)
        } catch (error) {
            res.json({ message: error.message })
        }
    },
    editar: async (req, res) => {
        try {
            await db.Rubros.update(req.body, {
                where: { id: req.params.id }
            })
            res.json({ message: "Rubro editado" })
        } catch (error) {
            res.json({ message: error.message })
        }
    },
    borrar: async (req, res) => {
        try {
            await db.Rubros.destroy({ where: { id: req.params.id } })
            res.json({ message: "Rubro eliminado" })
        } catch (error) {
            res.json({ message: error.message })
        }
    }
}

module.exports = rubrosController;