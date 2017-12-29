const passport = require('koa-passport');

const login = async (ctx) => {
  return passport.authenticate('local',
    (err, user, info, status) => {
      ctx.body = {user, err, info, status};
      if (user) {
        return ctx.login(user);
      } else {
        ctx.throw(401);
      }
    })(ctx);
}

const loginJwt = async (ctx) => {
  return passport.authenticate('local',
    (err, user, info, status) => {
      if (user) {
        const username = user.username;
        const token = user.generateToken();
        ctx.body = {
          username,
          token,
        };
      } else {
        ctx.throw(401);
      }
    })(ctx);
}

const logout = async (ctx) => {
  ctx.logout();
  ctx.body = {
    auth: ctx.isAuthenticated()
  };
};

const checkAuth = async (ctx) => {
  ctx.body = {
    auth: ctx.isAuthenticated(), 
    userName: ctx.state.user ? ctx.state.user.username : null
  };
}

module.exports = {
  login, 
  loginJwt,
  logout, 
  checkAuth,
};