const { Router } = require('express');
const router = Router();
const controller = require('../controllers/userController');

router.post('/create', controller.create);


module.exports = router;