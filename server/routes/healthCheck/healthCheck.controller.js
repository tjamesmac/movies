const controller = module.exports = {
  getHealthCheck: (req, res) => {
    const status = { "status": "UP" };
    res.send(status)
  },
};
