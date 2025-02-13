const createError = (statusCode, message, field) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.field = field;
  throw error;
};

module.exports = createError;
