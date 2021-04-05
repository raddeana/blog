/**
 * 角色
 * @author Philip
 */
import { Provide, Inject, Func } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import RoleEntity from '@/entity/role';
import { RoleType, RoleQueryType } from '@/type/role';
import { queryResult } from '@/type/queryResult';

@Provide()
export class RoleService {
  @InjectEntityModel(RoleEntity)
  roleEntity: Repository<RoleEntity>;

  /**
   * 新建用户
   * @param {RoleType} 
   * @return {void}
   */
  async create (role: RoleType) {
    return await this.roleEntity.save(new RoleEntity(role));
  }

  /**
   * 新建用户
   * @param {RoleQueryType}
   * @return {void}
   */
  async query (query: RoleQueryType): queryResult {
    let [data, total] = await this.roleEntity.findAndCount(query);

    return [data, total];
  }

  /**
   * 新建用户
   * @param {RoleType}
   * @return {void}
   */
  async update (role: RoleType) {
    return await this.roleEntity.updateById(role.id, role);
  }

  /**
   * 新建用户
   * @param {id}
   * @return {void}
   */
  async get (id: number) {
    return await this.roleEntity.findOne({ id });
  }

  /**
   * 新建用户
   * @param {number[]}
   * @return {void}
   */
  async removeByIds (ids: number[]) {
    return await this.roleEntity.removeByIds(ids);
  }
}