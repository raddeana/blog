/**
 * 菜单管理
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
import { MenuService } from "@/service/rbac/menu";
import { MenuType, MenuQueryType } from "@/type/menu";
import { CreateApiDoc } from "@midwayjs/swagger";

@Provide()
@Controller('/api')
export class MenuController {
  @Inject()
  ctx: Context;

  @Inject()
  MenuService: MenuService;

  @CreateApiDoc()
    .summary('新建角色')
    .build()
  @Post('/menu')
  async create (@Body() menu: string) : void {
    await this.MenuService.create(menu);
  }

  @CreateApiDoc()
    .summary('编辑更新角色')
    .build()
  @Put('/menu')
  async update (@Body() menu: string) : void {
    await this.MenuService.update(menu);
  }

  @CreateApiDoc()
    .summary('获取角色实例数据')
    .build()
  @Get('/menu/:id')
  async get(@Param() id: string): Promise<MenuType> {
    return await this.MenuService.get(id);
  }

  @CreateApiDoc()
    .summary('获取角色列表数据')
    .build()
  @Get('/menus')
  async query(@Query() query: string): Promise<MenuQueryType> {
    return await this.MenuService.query(query);
  }

  @CreateApiDoc()
    .summary('批量删除角色')
    .build()
  @Del('/menus')
  async delete (@Query() ids: string) : void {
    ids = ids.split(',');
    await this.MenuService.del(ids);
  }
}
