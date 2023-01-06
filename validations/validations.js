const validateURL = (req, res, next) => {
    console.log("This function runs on the POST route");
    next();
  };
  
  module.exports = { validateURL };