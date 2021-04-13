const express = require('express');
const { uuid } = require('uuidv4');
const server = express();

// HTPP REST
// GET (obtem um recurso json(javascript object notation))
// POST (adicionar )
// PUT (atualizr recurso)
// DELETE (apaga um recurso)

// ?nome=Henrique (informacoes passadas pela url) - request.query
// produto/1 (informacaoes passadas pela url) - request.params
// corpo da mensagme - request.body (json)

// middleware, esse transforma tudo em json
server.use(express.json());

contatos = [];

server.get('/', function(request, response) {
    response.json(contatos);
})

server.get('/:id', function(request, response) {
    const id = request.params.id;
    const result = contatos.filter(contato => contato.id == id);
    response.json(result);
})

server.post('/', function(request, response) {
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    contato = {
        nome,
        telefone
    };

    contatos.push(contato);
    response.status(201).send();
})

server.listen(process.env.PORT || 3000);