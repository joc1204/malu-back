const express = require("express");
const router = express.Router();
const articulosController = require('../controllers/articulosController');

router
.post("/",articulosController.crear)
.get("/",articulosController.listar)
.get("/:id",articulosController.listarone)
.put("/:id",articulosController.editar)
.delete("/:id",articulosController.borrar);

module.exports = router;