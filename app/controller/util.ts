import { Controller } from 'egg';
export default class HomeController extends Controller {
  public async imageCode() {
    const { ctx } = this;
    ctx.body = ctx.helper.createImageCode();
  }
}
