var express = require('express');
var router = express.Router();
const createTodo = require('./../controllers/todos');

/**
 * Gets all the todos
 */
router.get('/', function (req, res, next) {
  res.status(200).send('Gets all todos');
});

/**
 * Creates a todo
 */
router.post('/', createTodo, function (req, res, next) {
  res.status(201).send(res.locals.createdTodo);
});

/**
 * Gets an individual Todo
 */
router.get('/:id', function (req, res, next) {
  res.status(200).send(req.params);
});

/**
 * Updates an exisiting todo
 */
router.put('/:id', function (req, res, next) {
  res.status(200).send(req.params);
});

/**
 * Deletes an existing todo
 */
router.delete('/:id', function (req, res, next) {
  res.status(204).send(req.params);
});

module.exports = router;
