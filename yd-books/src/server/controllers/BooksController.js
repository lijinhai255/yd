import BooksModel from "../models/BooksModel"
import Controller from "./Controller"
/**
 * 首页IndexController
 */
class BooksController extends Controller {
    constructor() { 
        super()
    }
     actionBooksListPage(ctx) {
        return async (ctx, next) => {
            // ctx.body = 'hello world'
             const booksModel = new BooksModel()
        const result = await booksModel.getBooksList()
        console.log(result.data)
            // ctx.body = await ctx.render("books/list",{
            //     data: result.data
            // })
            ctx.body = await ctx.render("books/pages/list")    
        };
    }
    actionBooksCreatePage(ctx) {
        return async (ctx, next) => {
            // ctx.body = 'hello world'
             const booksModel = new BooksModel()
        const result = await booksModel.getBooksList()
        console.log(result.data)
            // ctx.body = await ctx.render("books/list",{
            //     data: result.data
            // })
            ctx.body = await ctx.render("books/pages/create")    
        };
    }
}
export default  BooksController;
