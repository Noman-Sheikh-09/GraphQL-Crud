const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    trim: true, 
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    // rollNo: {
    //   type: String,
    // },
    class: {
      type: String,
    },
  },
});

const studentCollection = mongoose.model("students", StudentSchema);

module.exports = studentCollection;
