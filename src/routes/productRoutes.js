const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

const clientController = require('../controller/clientController');

router.get('/', userController.getAllUsers);



//Produtos
router.get('/product', productController.getAllProducts);
router.get('/product/:id', productController.getProductById);
router.post('/product', productController.createProduct);




// //3° rota para criar um novo usuário
router.post('/', userController.createUser);