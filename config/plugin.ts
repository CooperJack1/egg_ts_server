import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // 开启sequelize-typescript
  sequelize: {
    enable: true,
    package: 'egg-sequelize-ts',
  },
};

export default plugin;
