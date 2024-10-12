import { Controller } from 'egg';
import svgCaptcha = require('svg-captcha');
export default class HomeController extends Controller {
  public async imageCode() {
    const { ctx } = this;
    const captcha = svgCaptcha.create({
      size: 4,
      width: 160,
      height: 60,
      fontSize: 50,
      ignoreChars: 'Oo01ilI',
      noise: 4,
      color: true,
      background: '#eee',
    });
    ctx.body = captcha.data;
  }
}
