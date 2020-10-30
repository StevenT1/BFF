class errorHandler {
    static error(app,logger){
        app.use(async (ctx,next)=>{
            try{
                await next();
            }catch(err){
                logger.error(err);
                ctx.body = '页面出现问题，程序员正在抢救'
            }
        })
        app.use(async (ctx, next) => {
            await next();
            if(ctx.status === 404) {
                ctx.body = await ctx.render('404');
            }
        })
    }   
}
export default errorHandler;