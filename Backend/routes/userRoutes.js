const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();
const jwt =require('jsonwebtoken');


router.post('/signup',userController.sginUp)
router.post('/login/:type',userController.login)
router.get('/userinfo/:token',userController.userInfo)
router.put('/updateLat/:token',userController.updateLatLang)
module.exports= router;