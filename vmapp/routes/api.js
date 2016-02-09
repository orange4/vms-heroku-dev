var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// load up the user model
var Schedule  = require('../models/schedule');

mongoose.connect(process.env.MONGOLAB_URI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

/* Api Specification */
router.get('/schedules', function (req, res) {
	Schedule.find( function ( err, schedules ){
	  res.status(200).json(schedules);
	});
})

router.get('/schedules/:schedule_id',function(req, res) {
    Bear.findById(req.params.schedule_id, function(err, bear) {
        if (err)
            res.send(err);
        res.json(bear);
    });
});

router.post('/schedules',function(req, res) {

  var schedule = new Schedule();

  schedule.firstname = req.body.firstname;
  schedule.lastname = req.body.lastname;
  schedule.datefrom = req.body.datefrom;
  schedule.dateto = req.body.dateto;
  schedule.time = req.body.time;
  schedule.duration = req.body.duration;
  schedule.visitorType = req.body.visitorType;
  schedule.employeeId = req.body.employeeId;
  schedule.purpose = req.body.purpose;
  schedule.specialRequirements = req.body.specialRequirements;
  schedule.specialComments = req.body.specialComments;
  
  schedule.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Schedule added to the database!', data: schedule });
  });
});


router.put('/schedules/:schedule_id',function(req, res) {
    // use our schedule model to find the schedule we want
    Schedule.findById(req.params.schedule_id, function(err, schedule) {

        if (err)
            res.send(err);

        schedule.firstname = req.body.firstname;
        schedule.lastname = req.body.lastname;
        schedule.datefrom = req.body.datefrom;
        schedule.dateto = req.body.dateto;
        schedule.time = req.body.time;
        schedule.duration = req.body.duration;
        schedule.visitorType = req.body.visitorType;
        schedule.employeeId = req.body.employeeId;
        schedule.purpose = req.body.purpose;
        schedule.specialRequirements = req.body.specialRequirements;
        schedule.specialComments = req.body.specialComments;
        
        // save the schedule
        schedule.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Schedule updated!' });
        });

    });
});


 router.delete('/schedules/:schedule_id',function(req, res) {
        Schedule.remove({
            _id: req.params.schedule_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


router.post('/login', function (req, res) {
  Users.findOne( function ( err, user ){
    if( err ){
      res.status(200).json('failed');  
    }else{
      res.status(200).json('success');
    }
  });
})


module.exports = router;
