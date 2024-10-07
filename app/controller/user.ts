import { Controller } from 'egg';
import NormalUserRule from '../validate/normalUserRule';
export default class UserController extends Controller {
  public async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    const res = ctx.validate(NormalUserRule, data);
    console.log(res);
    ctx.body = '注册';
  }
}
