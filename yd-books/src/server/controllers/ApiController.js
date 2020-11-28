import BooksModel from "../models/BooksModel"
import Controller from "./Controller"
/**
 * 首页IndexController
 */
class IndexController extends Controller {
    constructor() { 
        super()
    }
     actionBooksList(ctx) {
        return async (ctx, next) => {
            // ctx.body = 'hello world'
             const booksModel = new BooksModel()
        const result = await booksModel.getBooksList()
            ctx.body = [
                {
                    data:result.data
                }
            ]
        };
    }
}
export default  IndexController;
