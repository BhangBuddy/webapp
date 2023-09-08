const express = require('express');
const router = express.Router();

const product=require('../controllers/products_controller');
const Product = require('../models/product');
router.post('/createProduct',product.createProduct);
router.post('/uploadVideo',product.uploadVideoHandler);


module.exports=router;