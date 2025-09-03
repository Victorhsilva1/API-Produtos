//Importando os métodos
const express = require('express');
const router = express.Router();
const productModel = require('../model/productModel');


//Para listar todos os produtos 
router.get('/', (req, res) => {
    //getAllProducts
    const products = productModel.getAllProducts();
    res.json(products);
});


// Rota para criar um novo produto
router.post('/', (req, res) => {
    //Fazer a requisição do body produtos
    const newProduct = req.body;
    //createProduct e newProduct
    const createdProduct = productModel.createProduct(newProduct);
    //Devolver um 201
    res.status(201).json(createdProduct);
});

// Rota para obter um produto por ID
router.get('/:id', (req, res) => {
    //Convertendo a string para um número inteiro
    // O params é o que retorna o valor do parâmetro com o nome especificado ou seja nesse caso o ID
    const id = parseInt(req.params.id);
    //Procurar o produto pelo id
    const product = productModel.getProductById(id);
    if (product) {
        // Devolver o produto para o usuário
        res.json(product);
    } else {
        //Caso nao encontre um produto pelo seu id devolver um 404
        res.status(404).send('Produto não encontrado');
    }
});

//Exportando o router
module.exports = {
    router
}