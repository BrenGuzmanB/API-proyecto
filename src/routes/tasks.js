const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();

router.get('/', TaskController.option);
router.get('/create', TaskController.create);
router.post('/create', TaskController.store);
router.get('/editview', TaskController.mostrar_registros);
router.post('/tasks/delete', TaskController.destroy);
router.get('/tasks/edit/:id', TaskController.edit);
router.post('/tasks/edit/:id', TaskController.update);

module.exports = router;