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
  console.log('REQ.USER:', req.user)
  const newReview = new Review({
    rating: req.body.rating,
    author: req.user.id,
    instructor: req.body.instructorId
  })
  newReview.save()
  .then(review => {

    // add review id to User model
    User.findById(req.user.id, function(err, user){
      if(err) return res.send(err)
      user.reviews.push(review._id)
      user.save(function(err){
        if (!err) {
          console.log("updated");
        } else {
            console.log(err);
        }
      })
    })
    
    // add review id to Instructor model
    Instructor.findById(req.body.instructorId, function(err, instructor){
      if(err) return res.send(err)
      instructor.reviews.push(review._id)
      instructor.save(function(err){
        if (!err) {
          console.log("updated");
        } else {
            console.log(err);
        }
      })
    })
    res.json(review)
  })
});

router.put('/:id', function (req, res, next) { /* etc */});

router.delete('/:id', function (req, res, next) { /* etc */});

module.exports = router;