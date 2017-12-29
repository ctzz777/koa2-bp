const Router = require('koa-router');
const authController = require('../controllers/auth');
const router = new Router();

router.post('/login', authController.login);
router.post('/loginJwt', authController.loginJwt);
router.get('/logout', authController.logout);
router.get('/checkAuth', authController.checkAuth);


module.exports = router;