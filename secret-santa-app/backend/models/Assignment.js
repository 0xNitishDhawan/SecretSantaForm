// models/Assignment.js
const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  giverName: {
    type: String,
    required: true,
  },
  giverSecretName: {
    type: String,
    required: true,
  },
  giverEmail: {
    type: String,
    required: true,
  },
  recieverName: {
    type: String,
    required: true,
  },
  recieverHobbies: {
    type: String,
    required: true,
  },
  receiverNoGift: {
    type: String,
    required: true,
  },
  receiverSuperpower: {
    type: String,
    required: true,
  }
});

const Assignment = mongoose.model("Assignment", assignmentSchema);
module.exports = Assignment;
