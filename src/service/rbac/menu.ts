/**
 * 角色
 * @author Philip
 */
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository, getManager, UpdateResult } from 'typeorm';
import Menu from '@/entity/rbac/menu';
import { MenuType, MenuQueryType } from '@/type/menu';
import { QueryResult } from '@/type/queryResult';

@Provide()
export class MenuService {
  @InjectEntityModel(Menu)
  menuEntity: Repository<Menu>;

  /**
   * 新建用户
   * @param {MenuType} 
   * @return {void}
   */
  async create (menu: MenuType) : Promise<Menu> {
    return await this.menuEntity.save(new Menu(menu));
  }

  /**
   * 新建用户
   * @param {MenuQueryType}
   * @return {void}
   */
  async query (query: MenuQueryType) : Promise<QueryResult<Menu>> {
    let [data, total] = await this.menuEntity.findAndCount(query);

    return [data, total];
  }

  /**
   * 新建用户
   * @param {MenuType}
   * @return {void}
   */
  async update (menu: MenuType) : Promise<UpdateResult> {
    return await this.menuEntity.update(menu.id, menu);
  }

  /**
   * 新建用户
   * @param {id}
   * @return {void}
   */
  async get (id: number) : Promise<Menu>  {
    return await this.menuEntity.findOne({ id });
  }

  /**
   * 新建用户
   * @param {number[]}
   * @return {void}
   */
  async removeByIds (ids: number[]) : Promise<void>  {
    let entities = [];

    ids.forEach(async (id) => {
      entities.push(await this.menuEntity.findOne({ id }));
    });
  
    await getManager().transaction(async transactionalEntityManager => {
      await transactionalEntityManager.remove(Menu, entities);
    });
  }
}