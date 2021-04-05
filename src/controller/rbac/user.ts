/**
 * 用户管理
 * @author Philip
 */
import {
    Provide,
    Inject,
    Controller,
    Post,
    Get,
    Del,
    Put,
    Param,
    Query,
    Body
} from "@midwayjs/decorator";

import { Context } from "egg";
import { UserService } from "@/service/rbac/user";
import { UserType, UserQueryType } from "@/type/user";
import { CreateApiDoc } from "@midwayjs/swagger";
import UserEntity from '@/entity/user';

@Provide()
@Controller('/api')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  UserService: UserService;

  @CreateApiDoc()
    .summary('新建用户')
    .build()
  @Post('/user')
  async create (@Body() user: string) : Promise<UserEntity> {
    await this.UserService.create(user);
  }

  @CreateApiDoc()
    .summary('编辑更新用户')
    .build()
  @Put('/user')
  async update (@Body() user: string) : void {
    return await this.UserService.update(user);
  }

  @CreateApiDoc()
    .summary('获取用户实例数据')
    .build()
  @Get('/user/:uid')
  async get(@Param() id: number): Promise<UserEntity> {
    return await this.UserService.get(uid);
  }

  @CreateApiDoc()
    .summary('获取用户列表数据')
    .build()
  @Get('/users')
  async query(@Query() query: UserQueryType): Promise<queryResult<ArticleEntity>> {
    return await this.UserService.query(query);
  }

  @CreateApiDoc()
    .summary('批量删除用户')
    .build()
  @Del('/users')
  async delete (@Query() ids: string) : void {
    ids = ids.split(',');
    await this.UserService.del(ids);
  }
}
