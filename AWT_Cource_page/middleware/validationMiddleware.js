const { body, validationResult } = require('express-validator');

const validateAndSanitize = [
  body('universityName').trim().isLength({ min: 5 }).escape(),
  body('instituteName').trim().isLength({ min: 5 }).escape(),
  body('departmentName').trim().isLength({ min: 5 }).escape(),
  body('courseName').trim().isLength({ min: 5 }).escape(),
  body('courseCode').trim().isLength({ min: 2}).escape(),
  body('semester').isInt({ min: 1 })
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateAndSanitize,
  handleValidationErrors
};
