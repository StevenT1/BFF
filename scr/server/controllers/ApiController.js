import Controller from './Controller';
import IndexModel from '../models/indexModel';
class ApiController extends Controller {
    constructor(){
        super();
    }
    async actionGetData(ctx){
        let indexModel  = new IndexModel();
        let data = await indexModel.getData('http://localhost:8080/api');
        ctx.body = data;
    }
}
export default ApiController;