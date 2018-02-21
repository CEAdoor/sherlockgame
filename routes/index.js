const express = require('express');
const router = express.Router();
var userController = require('../controllers/userController.js');
var authController = require('../controllers/authController.js');
var playController = require('../controllers/playController.js');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/login',authController.isNotLoggedIn,userController.loginForm);
router.post('/login', authController.login);
router.get('/play',authController.isLoggedIn,playController.play);
router.get('/',userController.home);
router.post('/play',playController.newlevel);
router.get('/register',authController.isNotLoggedIn,userController.registerForm);
router.post('/register',
    userController.validateRegister,
    catchErrors(userController.register),
    authController.flogin);
router.get('/logout',authController.logout);
router.get('/rules',userController.rules);
router.get('/about',userController.about);
module.exports = router;
