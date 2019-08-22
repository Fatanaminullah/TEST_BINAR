const router = require('express').Router()

const {product} = require('../controller')

//get data
router.get('/v1/products', product.showData)
//get data by id
router.get('/v1/products/:id',product.showDatabyId)
//create data
router.post('/v1/products',product.createData)
//update data
router.put('/v1/products/:id',product.updateData)
//delete data
router.delete('/v1/products/:id',product.deleteData)

module.exports = router
