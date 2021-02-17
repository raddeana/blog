import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611369415188_2939';

  // add your config here
  config.middleware = [];

  config.orm = {
    type: 'mysql',
    host: '',
    port: 3306,
    username: '',
    password: '',
    database: undefined,
    synchronize: false,
    logging: false
  };

  config.swagger = {
    title: 'midway-swagger',
    description: 'swagger-ui for midway api',
    version: '1.0.0',
    termsOfService: '',
    contact: {
      name: "API Support",
      url: "http://www.example.com/support",
      email: "support@example.com"
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html"
    }
  }

  return config;
};
