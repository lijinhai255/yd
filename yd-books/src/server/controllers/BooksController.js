import BooksModel from "../models/BooksModel"
import Controller from "./Controller"
import {Readable} from "stream";
import { createGzip } from "zlib";
import { load } from 'cheerio';
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
        // const result = await booksModel.getBooksList()
        // console.log(result.data)
            // ctx.body = await ctx.render("books/list",{
            //     data: result.data
            // })
            ctx.body = await ctx.render("books/pages/list")    
        };
    }
    actionBooksCreatePage(ctx) {
        return async (ctx, next) => {
            // ctx.body = 'hello world'
            //  const booksModel = new BooksModel()
        // const result = await booksModel.getBooksList()
        // console.log(result.data)
            // ctx.body = await ctx.render("books/list",{
            //     data: result.data
            // })
            const html = await ctx.render("books/pages/create")  
            console.log(ctx.request.header['x-pjax'],"ctx.request.header['x-pjax']")
            if(ctx.request.header['x-pjax']){
                console.log("栈内切")
                const $ = load(html)
                ctx.status = 200;
                ctx.type = 'html';
                $('.lazyload-js').each(function () {
                    console.log("jll1")
                    ctx.res.write(`<script  class="lazyload-js" src="${$(this).attr('src')}"></script>`);
                  });
                  $('.lazyload-css').each(function () {
                    console.log("jll2")

                    ctx.res.write(`<style  class="lazyload-css" link="${$(this).attr('link')}"></style>`);
                  }); 
                $(".pajaxcontent").each(function(){
                    // console.log($(this).html(),1)
                    ctx.res.write($(this).html())
                })
                
                ctx.res.end()
            }else{
                console.log("站外刷")
                function createSSRStreamPromise(){
                    return new Promise((resolve,reject)=>{
                        const htmlStream = new Readable();
                        htmlStream.push(html)
                        htmlStream.push(null)
                        ctx.status = 200
                        ctx.type = "html"
                        ctx.res.setHeader('content-encoding','gzip')
                        ctx.res.setHeader('Transfer-Encoding', 'chunked');
                        const gz = createGzip()
                        htmlStream.on('error',(err)=>{
                            reject(err)
                        })
                        .pipe(gz)
                        .pipe(ctx.res)
                    })

                }
                await createSSRStreamPromise()
            }  
            // ctx.body = html
        };
    }
}
export default  BooksController;
