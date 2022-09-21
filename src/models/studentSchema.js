const mongoose = require("mongoose");
const validator = require("validator");
const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  age: Number,

  class: Number,

  roll_no: {
    type: Number,
    required: true,
    unique: true,
  },
  
  email: {
    trim: true,
    type: String,
    unique: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    }
  }
})

const Student = new mongoose.model('Student', StudentSchema)

module.exports = Student;