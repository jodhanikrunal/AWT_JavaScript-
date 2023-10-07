const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  universityName: String,
  instituteName: String,
  departmentName: String,
  courseName: String,
  courseCode: String,
  semester: Number
});

module.exports = mongoose.model('Course', courseSchema);
