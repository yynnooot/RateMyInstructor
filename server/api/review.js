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
  console.log('POST___________req.session',req.session)
  const newReview = new Review({
    rating: req.body.rating,
    author: req.session.userId,
    instructor: req.body.instructor
  })
  newReview.save()
  .then(review => {
    res.json(review)
  })
});

router.put('/:id', function (req, res, next) { /* etc */});

router.delete('/:id', function (req, res, next) { /* etc */});

module.exports = router;