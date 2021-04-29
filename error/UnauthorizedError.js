class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    //Setting the this.name property to the constructor’s name will reference UnauthorizedError in stack traces instead of the generic Error name.
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = UnauthorizedError;
