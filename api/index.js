const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')


app.use(bodyParser.json())

const roteador = require('./rotas/pontos')
app.use('/api/pontos', roteador)

app.listen(config.get('api.porta'), () => console.log('Api ok!') )