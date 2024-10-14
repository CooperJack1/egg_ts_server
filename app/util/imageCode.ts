import svgCaptcha = require('svg-captcha');

export default {
  createImageCode(ctx) {
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
    console.log(c.text);
    ctx.session.captcha = {
      code: c.text,
      expire: Date.now() + 60 * 1000, // 有效期1min
    };
    // 3.返回验证码
    return c.data;
  },
  verifyImageCode(ctx, clientCode) {
    // 1.取出服务端中保存的验证码和过期时间
    const serverCaptcha = ctx.session.captcha;
    let serverCode;
    let serverExpire;
    try {
      serverCode = serverCaptcha.code;
      serverExpire = serverCaptcha.expire;
    } catch (e) {
      ctx.session.captcha = null;
      throw new Error('请重新获取验证码');
    }
    if (Date.now() > serverExpire) {
      ctx.session.captcha = null;
      throw new Error('验证码已过期');
    } else if (serverCode !== clientCode) {
      ctx.session.captcha = null;
      throw new Error('验证码不正确');
    }
    // 验证码无论验证成功还是失败都只能使用一次
    ctx.session.captcha = null;
  },
};
