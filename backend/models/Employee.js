const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  fullName : {
    type : String,
  },
  email : {
    type : String,
  },
  birthDate :{
    type : Date,
  },
  addresse :{
    type : String,
  },
  nationality:{
    type : String
  },
  religion : {
    type : String,
  },
  martialStatus : {
    type : String,
  },
  passportNumber : {
    type : String,
  },
  emergencyContact :{
    type : String,
  },
  bankName: {
    type : String,
  },
  accountNumber:{
    type : String,
  },
  IFSC:{
    type: String,
  },
  PAN:{
    type: String,
  },
  UPI:{
    type: String,
  },
  phone :{
    type : String,
  },
  job :{
    type : String,
  },
  description :{
    type: String,
  }
});

module.exports = mongoose.model('Employee', employeeSchema);