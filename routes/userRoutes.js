const { Router } = require('express');
const router = Router();
const controller = require('../controllers/userController');

router.post('/create', controller.create);
router.delete('/deleteOne', controller.deleteOne);

module.exports = router;