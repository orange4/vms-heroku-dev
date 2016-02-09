var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

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

module.exports = mongoose.model('Schedule', scheduleSchema);