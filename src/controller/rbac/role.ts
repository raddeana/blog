/**
 * 角色管理
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
import { RoleService } from "@/service/rbac/role";
import { RoleType, RoleQueryType } from "@/type/role";
import { CreateApiDoc } from "@midwayjs/swagger";

@Provide()
@Controller('/api')
export class RoleController {
  @Inject()
  ctx: Context;

  @Inject()
  RoleService: RoleService;

  @CreateApiDoc()
    .summary('新建角色')
    .build()
  @Post('/role')
  async create (@Body() role: string) : void {
    await this.RoleService.create(role);
  }

  @CreateApiDoc()
    .summary('编辑更新角色')
    .build()
  @Put('/role')
  async update (@Body() role: string) : void {
    await this.RoleService.update(role);
  }

  @CreateApiDoc()
    .summary('获取角色实例数据')
    .build()
  @Get('/role/:id')
  async get(@Param() id: string): Promise<RoleType> {
    return await this.RoleService.get(id);
  }

  @CreateApiDoc()
    .summary('获取角色列表数据')
    .build()
  @Get('/roles')
  async query(@Query() query: string): Promise<RoleQueryType> {
    return await this.RoleService.query(query);
  }

  @CreateApiDoc()
    .summary('批量删除角色')
    .build()
  @Del('/roles')
  async delete (@Query() ids: string) : void {
    ids = ids.split(',');
    await this.RoleService.del(ids);
  }
}
