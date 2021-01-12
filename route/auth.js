'use strict'

const router = require('express').Router()
const { loginV1, loginV2 } = require('../controller/auth')

router.post('/v1/login', loginV1)
router.post('/v2/login', loginV2)

module.exports = router
