const express = require('express');
const router = express.Router();
var userController = require('../controllers/userController.js');
var authController = require('../controllers/authController.js');
var playController = require('../controllers/playController.js');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/login', userController.loginForm);
router.post('/login', authController.login);
router.get('/play',authController.isLoggedIn,playController.play);
router.get('/',userController.home);
router.post('/play',playController.newlevel);
router.get('/register', userController.registerForm);
router.post('/register',
    userController.validateRegister,
    catchErrors(userController.register),
    authController.login);
router.get('/logout',authController.logout);
module.exports = router;
