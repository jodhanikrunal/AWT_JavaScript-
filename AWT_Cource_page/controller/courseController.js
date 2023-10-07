const Course = require('../models/Course');

const createCourse = async (req, res) => {
  try {
    const {
      universityName,
      instituteName,
      departmentName,
      courseName,
      courseCode,
      semester
    } = req.body;

    const course = new Course({
      universityName,
      instituteName,
      departmentName,
      courseName,
      courseCode,
      semester
    });

    await course.save();
    res.status(201).send('Course created successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const viewCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);
    res.render('viewCourse', { course });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createCourse,
  viewCourse
};
