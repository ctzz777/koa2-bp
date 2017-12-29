const Router = require('koa-router');
const todoRouter = require('./todo');
const router = new Router();

router.use('/todo', todoRouter.routes(), todoRouter.allowedMethods());

module.exports = router;