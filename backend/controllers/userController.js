// For demo: get all users (static)
exports.getUsers = (req, res) => {
  res.json([
    { email: 'admin@example.com', role: 'admin' },
    { email: 'user@example.com', role: 'user' }
  ]);
};
