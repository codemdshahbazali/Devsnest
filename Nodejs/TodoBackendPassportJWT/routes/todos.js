var express = require('express');
var router = express.Router();
const {
  createTodo,
  getAllTodos,
  getSingleTodo,
  deleteTodo,
  updateTodo,
  authenticateToken,
} = require('./../controllers/todos');

const passport = require('passport');

/**
 * Gets all the todos
 */
// router.get('/', authenticateToken, getAllTodos, function (req, res) {
//   res.status(200).send(res.locals.allTodos);
// });
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  getAllTodos,
  function (req, res) {
    res.status(200).send(res.locals.allTodos);
  }
);

/**
 * Creates a todo
 */
// router.post('/', authenticateToken, createTodo, function (req, res) {
//   res.status(201).send(res.locals.createdTodo);
// });
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createTodo,
  function (req, res) {
    res.status(201).send(res.locals.createdTodo);
  }
);

/**
 * Gets an individual Todo
 */
// router.get('/:id', authenticateToken, getSingleTodo, function (req, res) {
//   res.status(200).send(res.locals.individualTodo);
// });
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  getSingleTodo,
  function (req, res) {
    res.status(200).send(res.locals.individualTodo);
  }
);

/**
 * Updates an exisiting todo
 */
// router.put('/:id', authenticateToken, updateTodo, function (req, res) {
//   res.status(200).send(res.locals.updatedTodo);
// });
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  updateTodo,
  function (req, res) {
    res.status(200).send(res.locals.updatedTodo);
  }
);

/**
 * Deletes an existing todo
 */
// router.delete('/:id', authenticateToken, deleteTodo, function (req, res) {
//   res.sendStatus(204);
// });
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  deleteTodo,
  function (req, res) {
    res.sendStatus(204);
  }
);

module.exports = router;
