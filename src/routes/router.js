const express = require('express');
const router = express.Router();
const { ToDoResources } = require('../resources');

router.use('/todos', ToDoResources);

module.exports = router;