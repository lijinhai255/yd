import * as Koa from 'koa';
import { createContainer, Lifetime } from 'awilix';
import { loadControllers, scopePerRequest } from 'awilix-koa';
const app = new Koa();
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
