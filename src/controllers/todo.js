const getTodo = async (ctx) => {
  const user = ctx.state.user;
  ctx.body = {
    user,
  };
};

module.exports = { 
    getTodo,
};