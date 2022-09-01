let express = require('express');
let router = express.Router();
let marcasController = require("../controllers/marcasController");

router
.post('/',marcasController.crear)
.get('/',marcasController.listar)
.get('/:id',marcasController.listarone)
.put('/:id',marcasController.editar)
.delete('/:id',marcasController.borrar);

module.exports = router;