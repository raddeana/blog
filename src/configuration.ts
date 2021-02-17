import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import * as orm from '@midwayjs/orm';
import { Application } from 'egg';
import * as swagger from '@midwayjs/swagger';

@Configuration({
  imports: [
    orm,
    swagger
  ]
})
export class ContainerLifeCycle implements ILifeCycle {

  @App()
  app: Application;

  async onReady() {
  }
}