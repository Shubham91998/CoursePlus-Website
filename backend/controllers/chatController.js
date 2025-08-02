exports.getMessages = (req, res) => {
  res.json([{ sender: 'system', text: 'Welcome to chat!' }]);
};

exports.sendMessage = (req, res) => {
  res.json({ status: 'sent', ...req.body });
};
