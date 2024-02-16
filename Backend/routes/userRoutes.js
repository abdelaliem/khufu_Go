const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();
const jwt =require('jsonwebtoken');
const UserModel = require('../models/UserModel');

router.post('/signup',userController.sginUp)
router.post('/login',userController.login)
router.get('/userinfo/:token',userController.userInfo)
module.exports= router;