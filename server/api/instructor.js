// api/instructor

const router = require('express').Router();
const { Instructor } = require('../models');

router.get('/', function (req, res, next){
  Instructor.find({}, function(err, instructors){
    if(err){
      console.log(err)
    }else{
      res.json(instructors)
    }
  })
})

router.get('/:id', function (req, res, next) { 
  Instructor.
    findById(req.params.id).
    populate('reviews').
    exec(function(err, instructor){
      if(err){
        console.log(err)
      }else{
        console.log('instructor in API:', instructor)
        res.json(instructor)
      }
    })
});

router.post('/', function (req, res, next) { 
  
  const newInstructor = new Instructor({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    school: req.body.school
  })
  newInstructor.save()
  .then(instructor => {
    res.json(instructor)
  })
});

router.put('/:id', function (req, res, next) { /* etc */});

router.delete('/:id', function (req, res, next) { /* etc */});

module.exports = router;