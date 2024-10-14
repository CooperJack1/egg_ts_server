import { Controller } from 'egg';
// const nodemailer = require('nodemailer');
export default class HomeController extends Controller {
  public async imageCode() {
    const { ctx } = this;
    ctx.body = ctx.helper.createImageCode();
  }
  public async emailCode() {
    // const { ctx } = this;
  }
}
