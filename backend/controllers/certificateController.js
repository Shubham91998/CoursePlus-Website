const Certificate = require('../models/Certificate');

// Verify certificate by code
exports.verifyCertificate = async (req, res) => {
  const { code } = req.body;
  try {
    const cert = await Certificate.findOne({ code });
    if (cert) {
      return res.json({ valid: true, name: cert.name, course: cert.course, date: cert.date });
    }
    res.json({ valid: false, message: 'Certificate not found' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
