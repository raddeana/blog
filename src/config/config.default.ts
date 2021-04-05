import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import 'tsconfig-paths/register';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // add your config here
  config.middleware = [];

  config.orm = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'blog',
    username: 'root',
    password: 'admin1234',
    synchronize: false,
    logging: false
  };

  config.swagger = {
    title: 'midway-swagger',
    description: 'blog api',
    version: '0.0.1',
    termsOfService: '',
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html"
    }
  }

  return config;
};
