const {addTranscation,GetTranscation } = require('../controller/PaymentController')
const router = require('express').Router()

router.post('/post', addTranscation)
router.get('/transaction',GetTranscation)

Model.exports = router