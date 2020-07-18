const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-wt4x9.mongodb.net/week10?retryWrites=true&w=majority', {
   useNewUrlParser: true, 
   useUnifiedTopology: true, 
});

app.use(cors());
app.use(express.json());
app.use(routes); 
 // Métodos HTTP: get, post, put, delete
  
 // Tipos de par6ametros:
 // Query Params: request.query (Filtros, ordenação, paginação, ...)
 // Route Params: request.params (Identificar um recurso na alteraçào ou remoção)
 // Body: request.body (Dados para criação ou alteração de um registro)

 //MongoDb (banco não relacional)
 
 
app.listen(3333);
   