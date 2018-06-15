// api/review
const router = require('express').Router();
const { Review, Instructor, User } = require('../models');

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
  const newReview = new Review({
    rating: req.body.rating,
    author: req.session.userId,
    instructor: req.body.instructorId
  })
  newReview.save(function(err){
    if(err) console.log(err);
    // add review id to User model
    User.findById(req.session.userId, function(err, user){
      if(err) return res.send(err)
      user.reviews.push(newReview._id)
      user.save()
    })

    // add review id to Instructor model
    Instructor.findById(req.body.instructorId, function(err, instructor){
      if(err) return res.send(err)
      instructor.reviews.push(newReview._id)
      instructor.save()
    })
   
  })
  .then(review => {
     
    res.json(review)
  })
});

router.put('/:id', function (req, res, next) { /* etc */});

router.delete('/:id', function (req, res, next) { /* etc */});

module.exports = router;