const express = require('express');
const router = express.Router()

const logic = require('../controller/logic')


router.post('/add-details',logic.addmethod)


router.get('/show-details',logic.getmethod)

router.delete('/delete-details/:id',logic.deletemethod)


module.exports = router