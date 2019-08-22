
const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user-router.js')
const productRouter = require('./router/product-router.js')

const ex = express()
const port = 1994

ex.use(cors())
ex.use(express.json())
ex.use(userRouter)
ex.use(productRouter)

ex.listen(port, () => {
    console.log("Running at ", port);
    
})