exports.getStats = (req, res) => {
  res.json({
    users: 1200,
    coursesSold: 340,
    revenue: 12000,
    mentors: 15,
  });
};
