const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

contatos = [];

server.get('/', async function(request, response) {
    return response.json(contatos);
})

server.get('/:id' function(request, response) { 
    const nome = request.body.nome; // JSON
    const quantidade = request.body.numero;

    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);
