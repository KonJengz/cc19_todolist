const notFound = (req, res, next) => {
  res.status(404).json({
    message: `request URL: ${req.method} ${req.url} not found on this server`,
  });
};

module.exports = notFound;
