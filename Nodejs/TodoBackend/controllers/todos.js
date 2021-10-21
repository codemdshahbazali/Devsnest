const Todo = require('./../models/Todo');
var jwt = require('jsonwebtoken');

/**
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {calls the next function in middleware chain} next
 * @returns - creates a todo and returns the created todo on success. Also returns a failure message on failure
 */
const createTodo = async (req, res, next) => {
  try {
    const { item } = req.body;
    const token = req.headers['authorization'].split(' ')[1];

    // verify a token symmetric - synchronous
    var decoded = jwt.verify(token, 'secret');

    const createdTodo = await Todo.create({
      item,
      UserId: decoded.id,
    });

    res.locals.createdTodo = createdTodo;
    next();
  } catch (e) {
    return res.status(401).send({ message: e.message });
  }
};

/**
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {calls the next function in middleware chain} next
 * @returns - Updates a todo and returns the updated todo on success. Also returns a failure message on failure
 */
const updateTodo = async (req, res, next) => {
  try {
    const { item, isCompleted } = req.body;
    const token = req.headers['authorization'].split(' ')[1];
    const todoId = req.params.id;

    // verify a token symmetric - synchronous
    var decoded = jwt.verify(token, 'secret');

    let updatedTodo = await Todo.update(
      { item, isCompleted },
      {
        where: {
          id: todoId,
          UserId: decoded.id,
        },
      }
    );

    if (updatedTodo[0] === 0) {
      updatedTodo = {
        message: 'User not found. Update failed !!!',
      };
    } else {
      const todo = await Todo.findOne({
        where: {
          id: todoId,
          UserId: decoded.id,
        },
      });

      updatedTodo = todo;
    }

    res.locals.updatedTodo = updatedTodo;
    next();
  } catch (e) {
    return res.status(401).send({ message: e.message });
  }
};

/**
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {calls the next function in middleware chain} next
 * @returns - returns all the todos on success. Returns a failure message on failure
 */
const getAllTodos = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];

    // verify a token symmetric - synchronous
    var decoded = jwt.verify(token, 'secret');

    const { count, rows } = await Todo.findAndCountAll({
      where: {
        UserId: decoded.id,
      },
    });

    res.locals.allTodos = { count, todos: rows };
    next();
  } catch (e) {
    return res.status(401).send({ message: e.message });
  }
};

/**
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {calls the next function in middleware chain} next
 * @returns - returns a single todo on success based on passed id using params. Returns a failure message on failure
 */
const getSingleTodo = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    const todoId = req.params.id;

    // verify a token symmetric - synchronous
    var decoded = jwt.verify(token, 'secret');

    const todo = await Todo.findOne({
      where: {
        id: todoId,
        UserId: decoded.id,
      },
    });

    if (todo === null) {
      throw new Error('Todo Not found!');
    }

    res.locals.individualTodo = todo;
    next();
  } catch (e) {
    return res.status(401).send({ message: e.message });
  }
};

/**
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {calls the next function in middleware chain} next
 * @returns - returns 204 on success based on passed id using params. Returns a failure message on failure
 */
const deleteTodo = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    const todoId = req.params.id;

    // verify a token symmetric - synchronous
    var decoded = jwt.verify(token, 'secret');
    const destroyedRowNumber = await Todo.destroy({
      where: {
        id: todoId,
        UserId: decoded.id,
      },
    });

    if (destroyedRowNumber == 0) {
      throw new Error("Todo doesn't exists!");
    }
    next();
  } catch (e) {
    return res.status(401).send({ message: e.message });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getSingleTodo,
  deleteTodo,
  updateTodo,
};
