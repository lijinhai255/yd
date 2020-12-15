import Koa from 'koa';
import { createContainer, Lifetime } from 'awilix';
import { loadControllers, scopePerRequest } from 'awilix-koa';


import render from "koa-swig"
import {join} from "path"
import co  from  'co';


const app = new Koa();
app.context.render =co.wrap( render({
  root: join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));
const container = createContainer();
container.loadModules([`${__dirname}/services/*.ts`], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SCOPED,
  },
});
app.use(scopePerRequest(container));
app.use(loadControllers(`${__dirname}/routers/*.ts`));
app.listen(3000, () => {
  console.log('TS AOP Node框架启动成功');
});
