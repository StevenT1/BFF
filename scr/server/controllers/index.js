import Router from 'koa-router';
import IndexController from './indexController';
import ApiController from './apiController';
let router = new Router();
let indexController = new IndexController();
let apiController = new ApiController();
function initController(app){
    router.get('/', indexController.actionVue)
    router.get('/index',indexController.actionIndex);
    router.get('/api/getData',indexController.actionGetData);
    router.get('/books/list',indexController.actionList);
    app.use(router.routes()).use(router.allowedMethods());
}
export default initController;