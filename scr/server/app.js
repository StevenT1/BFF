import Koa from 'koa';
import config from './config/index';
import initController from './controllers/index';
import render from 'koa-swig';
import co from 'co';
import staticD from 'koa-static';
import log4js from 'log4js';
import errorHnadler from './middlewares/errorHandler'
log4js.configure({
    appenders: { globalError: { type: "file", filename: "./logs/error.log" } },
    categories: { default: { appenders: ["globalError"], level: "error" } }
  });
let app = new Koa();
let logger = log4js.getLogger('globalError');
//配置路由配置
app.context.render = co.wrap(render({
    root: config.viewsDir,
    cache: config.cache,
    varControls: ['[[', ']]']
}));

// app.use(ctx=>{
//     ctx.body = 'hello world'
// })
//配置静态文件路径
app.use(staticD(config.staticDir));
//错误抓取
errorHnadler.error(app,logger);
//初始化中间件
initController(app);
app.listen(config.port, () => {
    console.log(`监听端口${config.port}`)
})