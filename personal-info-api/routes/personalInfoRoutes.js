const express = require('express');
const router = express.Router();
const {
    createPersonalInfo,
    getPersonalInfo,
    updatePersonalInfo,
    deletePersonalInfo,
} = require('../controllers/personalInfoController');

// Define routes
router.post('/', createPersonalInfo);
router.get('/', getPersonalInfo);
router.put('/:id', updatePersonalInfo);
router.delete('/:id', deletePersonalInfo);

module.exports = router;
