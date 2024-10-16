import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  // 添加sequelize配置
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'root',
    port: 3306,
    database: 'it666',
  };
  // Redis相关配置
  config.redis = {
    client: {
      host: '127.0.0.1',
      port: 6379,
      password: '',
      db: 0,
    },
  };
  // 邮箱相关配置
  config.smtp = {
    host: 'smtp.qq.com',
    port: 465,
    user: 'cooper1996@qq.com',
    pass: 'tshyldqjvzgpdgeb',
  };
  // 短信相关配置
  config.sms = {
    accessKeyId: 'LTAI4GHcxJrqW3gi2rUxhurB',
    secretAccessKey: '1231312',
  };
  // 禁用CSRF的安全校验
  config.security = {
    csrf: {
      enable: false,
    },
  };
  return config;
};
