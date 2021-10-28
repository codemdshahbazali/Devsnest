const express = require('express');
const router = express.Router();

const products = [
  {
    id: 1,
    name: 'Laptop',
  },
  {
    id: 2,
    name: 'mobile Phones',
  },
];

//Route && query parameters
router.get('/', (req, res) => {
  if (req.query.admin === 'true') {
    res.send({ products, queryParamter: req.query });
  } else {
    res.sendStatus(401);
  }
});

// router.get('/shahbaz', (req, res) => {
//   const filteredProduct = products.filter(
//     (element) => element.id === Number(req.params.id)
//   );
//   res.send({ filteredProduct });
// });

//params
router.get('/:id', (req, res) => {
  const filteredProduct = products.filter(
    (element) => element.id === Number(req.params.id)
  );
  res.send({ filteredProduct });
});

module.exports = router;
