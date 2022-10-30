var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos')

router.get('/', todosCtrl.index);
router.get('/', todosCtrl.new);
router.get('/', todosCtrl.show);
router.post('/', todosCtrl.create);

module.exports = router;
