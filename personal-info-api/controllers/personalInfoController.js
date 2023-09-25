const PersonalInfo = require('../models/PersonalInfo');

// Create a new personal info entry
async function createPersonalInfo(req, res) {
    const { name, age, email } = req.body;
    try {
        const newInfo = new PersonalInfo({ name, age, email });
        await newInfo.save();
        res.status(201).json(newInfo);
    } catch (error) {
        res.status(500).json({ error: 'Could not create personal info entry' });
    }
}

// Get all personal info entries
async function getPersonalInfo(req, res) {
    try {
        const infoEntries = await PersonalInfo.find();
        res.json(infoEntries);
    } catch (error) {
        res.status(500).json({ error: 'Could not retrieve personal info entries' });
    }
}

// Update a personal info entry
async function updatePersonalInfo(req, res) {
    const { name, age, email } = req.body;
    try {
        const updatedInfo = await PersonalInfo.findByIdAndUpdate(
            req.params.id,
            { name, age, email },
            { new: true }
        );
        res.json(updatedInfo);
    } catch (error) {
        res.status(500).json({ error: 'Could not update personal info entry' });
    }
}

// Delete a personal info entry
async function deletePersonalInfo(req, res) {
    try {
        const deletedInfo = await PersonalInfo.findByIdAndRemove(req.params.id);
        res.json(deletedInfo);
    } catch (error) {
        res.status(500).json({ error: 'Could not delete personal info entry' });
    }
}

module.exports = {
    createPersonalInfo,
    getPersonalInfo,
    updatePersonalInfo,
    deletePersonalInfo,
};
