// import svgCaptcha = require('svg-captcha');
import nodemailer = require('nodemailer');
let transporter;
export default {
  // 创建发送邮件对象
  createTransporterInstance() {
    if (transporter) {
      return transporter;
    }
    transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      port: 465,
      secure: true,
      auth: {
        user: 'cooper1996@qq.com',
        pass: 'tshyldqjvzgpdgeb',
      },
    });
    return transporter;
  },
  // 创建需要发送的内容
  createEmailInfo(ctx, to:string) {
    // 1.生成验证码
    const code = Math.random().toString(16).slice(2, 6)
      .toUpperCase();
    // 2.生成发送内容
    const info = {
      from: 'cooper1996@qq.com',
      to,
      subject: 'Cooper Code',
      text: `验证码:${code}`,
    };
    // 3.保存验证码
    ctx.session.email = {
      code,
      expire: Date.now() + 60 * 1000,
    };
    return info;
  },
  sendEmailCode(ctx, to:string) {
    const transporter = this.createTransporterInstance();
    const info = this.createEmailInfo(ctx, to);
    return new Promise((resolve, reject) => {
      transporter.sendMail(info, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  /* verifyEmailCode(ctx, clientCode) {
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
  }, */
};
