/**
 * 角色
 * @author Philip
 */
import { Provide, Inject, Func } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import MenuEntity from '@/entity/menu';
import { MenuType, MenuQueryType } from '@/type/menu';
import { queryResult } from '@/type/queryResult';

@Provide()
export class MenuService {
  @InjectEntityModel(MenuEntity)
  menuEntity: Repository<MenuEntity>;

  /**
   * 新建用户
   * @param {MenuType} 
   * @return {void}
   */
  async create (menu: MenuType) {
    return await this.menuEntity.save(new MenuEntity(menu));
  }

  /**
   * 新建用户
   * @param {MenuQueryType}
   * @return {void}
   */
  async query (query: MenuQueryType): queryResult {
    let [data, total] = await this.menuEntity.findAndCount(query);

    return [data, total];
  }

  /**
   * 新建用户
   * @param {MenuType}
   * @return {void}
   */
  async update (menu: MenuType) {
    return await this.menuEntity.updateById(menu.id, menu);
  }

  /**
   * 新建用户
   * @param {id}
   * @return {void}
   */
  async get (id: number) {
    return await this.menuEntity.findOne({ id });
  }

  /**
   * 新建用户
   * @param {number[]}
   * @return {void}
   */
  async removeByIds (ids: number[]) {
    return await this.menuEntity.removeByIds(ids);
  }
}