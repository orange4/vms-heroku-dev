var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// Mongoose Schema definition
usersSchema = new mongoose.Schema({
  username: String,
  password: String
},{ collection : 'users' , timestamps: true});

scheduleSchema = new mongoose.Schema({
  firstname : String, 
  lastname : String,
  datefrom : Date,
  dateto: Date,
  time: String,
  duration: Number,
  visitorType: String,
  employeeId: Number,
  purpose: String,
  specialRequirements: String,
  specialComments: String,

  isCheckedIn : Boolean,
  isCheckedOut : Boolean,
  checkedInTime: Date,
  checkedOutTime: Date,
  imgUrl: String,
},{ collection : 'schedule' , timestamps: true});

Schedule = mongoose.model('Schedule', scheduleSchema);
Users = mongoose.model('Users', usersSchema);

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
