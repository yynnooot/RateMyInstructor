const router = require('express').Router();
const User = require('../models/user');
router.use('/auth', require('./auth'));

router.use('/review', require('./review'));

router.use('/instructor', require('./instructor'));


router.get('/test', async (req, res) => {
  const users = await User.find().populate({ path: 'reviews' });
  res.json(users)
})

router.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
