// api/review
const router = require('express').Router();
const { Review } = require('../models');

router.get('/', function (req, res, next) { 
  Review.find({}, function(err, reviews){
    if(err){
      console.log(err)
    }else{
      res.json(reviews)
    }
  })
});

router.post('/', function (req, res, next) { 
  const newReview = new Review(req.body)
  newReview.save()
  .then(review => {
    res.json(review)
  })
});

router.put('/:id', function (req, res, next) { /* etc */});

router.delete('/:id', function (req, res, next) { /* etc */});

module.exports = router;