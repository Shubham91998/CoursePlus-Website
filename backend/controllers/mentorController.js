const Mentor = require('../models/Mentor');

// Get all mentors
exports.getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch mentors' });
  }
};
