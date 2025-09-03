
/**
 *  Objetivo: Iniciar e definir o servidor, e importar os módulos.
 * Autor: Victor Hugo Rocha da Silva
 * Data: 03/09/2025
 * Versão: 1.0
 */
 
//Importar o módulo Express 
const express = require('express')

//Criar uma aplicação express
//Servidor web, recebendo requisições 
const app = express()

//Definir um middleware para analisar Json no corpo das requisiçõess
app.use(express.json())

//Definir a porta do servidor que irá escutar
const porta = 8000

//Definir a rota de teste API
app.get('/', (req, res) => {
    res.send('API está funcionando!')
})

//iniciando o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})

