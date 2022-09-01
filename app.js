import bodyParser from 'body-parser';
//const bodyParser = require('body-parser');
//const express = require('express');
import express from 'express';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

let db = require('./database/models');
//const cors = require("cors");
import cors from 'cors';
//const path = require('path');
import path from 'path';
app.use(cors());

//app.use(express.json());
const rutasArticulos = require("./routes/articulos.js")
const rutasMarcas = require("./routes/marcas.js");
const rutasRubros = require("./routes/rubros.js");

app.use('/articulos',rutasArticulos);
app.use('/marcas',rutasMarcas);
app.use('/rubros',rutasRubros);

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));   
//khvjv

app.set('puerto', process.env.PORT || 3001);

db.sequelize.sync()
    .then(
        app.listen(app.get('puerto'),()=>console.log("Servidor corriendo en el puerto :",app.get('puerto')))
    )
    .catch(error =>{
        console.log(error);
    });
