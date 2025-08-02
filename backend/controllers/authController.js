
const User = require('../models/User');
const bcrypt = require('bcryptjs');


exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    // TODO: Replace with JWT token in production
    res.json({ email: user.email, role: user.role || 'user', token: 'demo-token' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, role: 'user' });
    await user.save();
    // TODO: Replace with JWT token in production
    res.json({ email: user.email, role: user.role, token: 'demo-signup-token' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
