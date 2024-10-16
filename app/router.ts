import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.index);
  router.get('/imagecode', controller.util.imageCode);
  router.get('/emailcode', controller.util.emailCode);
  router.post('/register', controller.user.create);
};
