const express = require('express');
const router = express.Router();
const courseController = require('../controller/courseController');

router.post('/create', courseController.createCourse);
router.get('/view/:id', courseController.viewCourse);

module.exports = router;
