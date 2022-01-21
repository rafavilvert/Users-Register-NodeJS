var express = require("express")

var router = express.Router();
var HomeController = require("../controllers/HomeController");
var UserController = require('../controllers/UserController')

router.get('/', HomeController.index);
router.post('/user', UserController.create);
router.get('/user', UserController.index);
router.get('/user/:id', UserController.findUser);
router.put('/user', UserController.edit);
router.delete('/user/:id', UserController.delete);

router.post('/recover-password', UserController.recoverPassword);
router.post('/change-password', UserController.changePassword);

module.exports = router;