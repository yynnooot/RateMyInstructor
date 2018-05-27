const router = require('express').Router();

// api/

router.use('/review', require('./review'))

router.use('/auth', require('./auth'))

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;