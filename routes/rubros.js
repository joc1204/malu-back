let express = require('express');
let router = express.Router();
let rubrosController = require('../controllers/rubrosController');

router
.post('/',rubrosController.crear)
.get('/',rubrosController.listar)
.get('/:id',rubrosController.listarone)
.put('/:id',rubrosController.editar)
.delete('/:id',rubrosController.borrar);

module.exports = router;