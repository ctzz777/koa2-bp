const Router = require('koa-router');
const todoController = require('../../controllers/todo');
const router = new Router();

router.get('/', todoController.getTodo);

module.exports = router;