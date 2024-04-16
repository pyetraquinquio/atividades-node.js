const express = require('express')
const app = express()
const port = 3000

const py = 'Pyetra'
const emy = 'Emily'
const ma = 'Maria'
const ga = 'Gaby'


app.get('/saudacao/pyetra', (req, res) => {
    res.send(`Olá, ${py}, bem-vinda!`)
})

app.get('/saudacao/emily', (req, res) => {
    res.send(`Olá, ${emy}, bem-vinda!`)
})

app.get('/saudacao/maria', (req, res) => {
    res.send(`Olá, ${ma}, bem-vinda!`)
})

app.get('/saudacao/gaby', (req, res) => {
    res.send(`Olá, ${ga}, bem-vinda!`)
})

app.get('/', (req, res) => {
    res.send('Olá mundo com nodejs e express!')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})