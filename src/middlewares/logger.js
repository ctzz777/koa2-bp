const simpleLogger = () => {
  return async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.status} ${ctx.url} - ${ms} ms`);
  };
};

module.exports = {
  simpleLogger,
};