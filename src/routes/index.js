const Router = require('koa-router');
const passport = require('koa-passport');
const authRouter = require('./auth');
const apiRouter = require('./api/index');
const router = new Router();

router.use('/auth', authRouter.routes(), authRouter.allowedMethods());
router.use('/api', passport.authenticate('jwt', { session: false }), apiRouter.routes(), apiRouter.allowedMethods());

module.exports = router;