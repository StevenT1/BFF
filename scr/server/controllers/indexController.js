import Controller from './Controller'
import IndexModel from '../models/indexModel';
class indexController extends Controller {
    constructor(){
        super();
    }
    async actionIndex(ctx) {
        ctx.body = await ctx.render('index2',{
            data:123
        });
    }
    async actionVue(ctx) {
        ctx.body = await ctx.render('index',{

        })
    }
    async actionList(ctx) {
        ctx.body = await ctx.render('books/pages/list',{
           
        });
    }
    async actionGetData(ctx) {
        let indexModel = new IndexModel();
        let data = await indexModel.getData('http://localhost:8000/getData');
        console.log(data);
        ctx.body = await ctx.render('books/pages/list',{
            data:data,
        });
    }
}
export default indexController;