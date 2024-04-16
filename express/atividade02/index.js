const express = require('express');
const app = express();
const port = 3000;

const path = require("path");

const basePath = path.join(__dirname, "templates");

app.get('/sobre', (req, res) => {
    res.sendFile(`${basePath}/sobre.html`);
});

app.get('/contato', (req, res) => {
    res.sendFile(`${basePath}/contato.html`);});

app.get('/', (req, res) => {
    res.send('Olá!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
});