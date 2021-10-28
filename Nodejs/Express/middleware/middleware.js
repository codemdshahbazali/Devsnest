const checkAdmin = (req, res, next) => {
  if (req.query.admin !== 'true') {
    res.sendStatus(401);
  } else {
    next();
  }
};

module.exports = checkAdmin;
