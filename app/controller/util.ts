import { Controller } from 'egg';
import nodemailer = require('nodemailer');
export default class HomeController extends Controller {
  public async imageCode() {
    const { ctx } = this;
    ctx.body = ctx.helper.createImageCode();
  }

  public async emailCode() {
    // 1.创建发送者对象
    const transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      port: 465,
      secure: true,
      auth: {
        user: 'cooper1996@qq.com',
        pass: 'tshyldqjvzgpdgeb',
      },
    });
    // 2.创建需要发送的内容
    const code = Math.random().toString(16).slice(2, 6)
      .toUpperCase();
    const info = {
      from: 'cooper1996@qq.com',
      to: '2250480127@qq.com',
      subject: 'Cooper Code',
      text: `验证码:${code}`,
    };
    // 3.发送邮件
    transporter.sendMail(info, (err, data) => {
      if (err) {
        console.log('发送邮件失败:', err);
      } else {
        console.log('发送邮件成功:', data);
      }
    });
  }
}
