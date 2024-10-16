import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async imageCode() {
    const { ctx } = this;
    ctx.body = ctx.helper.createImageCode();
  }

  public async emailCode() {
    const { ctx } = this;
    try {
      const { email } = ctx.query;
      const data = await ctx.helper.sendEmailCode(email);
      ctx.success(data);
    } catch (e) {
      ctx.error(400, e.message);
    }
  }
}
