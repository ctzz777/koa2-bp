const authenticateUser = () => {
  return async (ctx, next) => {
    if(ctx.isAuthenticated()) {
      next();
    } else {
      ctx.status = 401
      ctx.body = {
        msg: 'auth fail'
      }
    }
  };
};

module.exports = {
  authenticateUser,
};