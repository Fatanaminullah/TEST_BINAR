const router = require('express').Router()

const {authentication} = require('../controller')

//register
router.post('/auth/signup', authentication.register)
//login
router.post('/auth/login',authentication.login)


module.exports = router
