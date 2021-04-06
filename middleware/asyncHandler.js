const asyncHanlder = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next); // wait untill the function is finished
  } catch (error) {
    console.log("this is very bad ");
    next(error); // send the error to the next middleware
  }
  // here you can also write the following erasing everything up:
  // Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHanlder; 