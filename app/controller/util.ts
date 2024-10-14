import { Controller } from 'egg';
import svgCaptcha = require('svg-captcha');
export default class HomeController extends Controller {
  public async verifyImageCode() {
    const { ctx } = this;
    // 1.取出服务端中保存的验证码和过期时间
    const serverCaptcha = ctx.session.captcha;
    const serverCode = serverCaptcha.code;
    const serverExpire = serverCaptcha.expire;
    // 2.获取客户端传过来的验证码
    const { clientCode } = ctx.query;
    if (Date.now() > serverExpire) {
      ctx.body = '验证码已过期';
    } else if (serverCode !== clientCode) {
      ctx.body = '验证码不正确';
    } else {
      ctx.body = '验证通过';
    }
  }
  public async imageCode() {
    const { ctx } = this;
    // 1.生成验证码
    const c = svgCaptcha.create({
      size: 4,
      width: 160,
      height: 60,
      fontSize: 50,
      ignoreChars: 'Oo01ilI',
      noise: 4,
      color: true,
      background: '#eee',
    });
    // 2.保存验证码
    ctx.session.captcha = {
      code: c.text,
      expire: Date.now() + 60 * 1000, // 有效期1min
    };
    // 3.将验证码发送到客户端
    ctx.body = c.data;
  }
}
