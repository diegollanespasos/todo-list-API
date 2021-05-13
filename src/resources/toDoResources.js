const express = require('express');
const ToDoResources = express.Router();
const { ToDoControllers } = require('../controllers');

ToDoResources.get('/', ToDoControllers.getAll);
ToDoResources.get('/:id', ToDoControllers.getByID);
ToDoResources.post('/', ToDoControllers.createToDo);
ToDoResources.put('/:id', ToDoControllers.updateToDo);
ToDoResources.delete('/:id', ToDoControllers.deleteToDo);

module.exports = ToDoResources;