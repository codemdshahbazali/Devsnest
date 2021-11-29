const express = require('express');
const router = express.Router();

const products = require('./../models/Products');
const createProd = require('./../utils/init');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    const query = req.query;
    const count = parseInt(query.count) || 10;
    let page = parseInt(query.page) || 1;
    const after = parseInt(query.after);
    let sql = {};

    if (after) {
      sql = {
        where: {
          id: {
            [Op.gt]: after,
          },
        },
      };

      //   page = parseInt(after / count) + 1;
    } else {
      sql = {
        offset: count * (page - 1),
      };
    }

    const productsData = await products.findAll({
      ...sql,
      limit: count,
    });

    res.status(200).send({
      count: productsData.length,
      //   page: page,
      items: productsData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: err,
      message: 'Cannot fetch products list',
    });
  }
});

router.get('/createProducts', async (req, res) => {
  try {
    const list = await createProd();
    res.status(200).send({
      items: list,
    });
  } catch (err) {
    res.status(500).send({
      message: 'Error while creating products',
      error: err,
    });
  }
});

module.exports = router;
