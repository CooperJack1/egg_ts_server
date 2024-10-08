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
  // 禁用CSRF的安全校验
  config.security = {
    csrf: {
      enable: false,
    },
  };
  return config;
};
