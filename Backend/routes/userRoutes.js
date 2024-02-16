const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/signup',userController.sginUp)
router.post('/login',userController.login)

module.exports= router;