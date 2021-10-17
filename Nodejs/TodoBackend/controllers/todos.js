const Todo = require('./../models/Todo');
var jwt = require('jsonwebtoken');

const createTodo = async (req, res, next) => {
  try {
    const { item } = req.body;
    const token = req.headers['authorization'].split(' ')[1];

    // verify a token symmetric - synchronous
    var decoded = jwt.verify(token, 'secret');
    // console.log(decoded.password); // bar
    console.log(decoded); // bar

    const createdTodo = await Todo.create({
      item,
      UserId: decoded.id,
    });

    res.locals.createdTodo = createdTodo;
    next();
  } catch (e) {
    return res.status(401).send('Something went wrong => ' + e.message);
  }
};

const getAllTodos = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];

    // verify a token symmetric - synchronous
    var decoded = jwt.verify(token, 'secret');
    // console.log(decoded.password); // bar
    console.log(decoded); // bar

    // const createdTodo = await Todo.create({
    //   item,
    //   UserId: decoded.id,
    // });

    const { count, rows } = await Todo.findAndCountAll({
      where: {
        UserId: decoded.id,
      },
    });

    res.locals.allTodos = rows;
    next();
  } catch (e) {
    return res.status(401).send('Something went wrong => ' + e.message);
  }
};

module.exports = { createTodo, getAllTodos };
