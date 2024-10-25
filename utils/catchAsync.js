module.exports =  (asyncFunction) => {
  return (asyncHandler = (req, res, next) => {
    asyncFunction(req, res, next).catch(next);
  });
};
