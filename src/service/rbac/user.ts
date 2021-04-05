/**
 * 用户
 * @author Philip
 */
import { Provide, Inject, Func } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import UserEntity from '@/entity/user';
import { UserType, UserQueryType } from '@/type/user';
import { queryResult } from '@/type/queryResult';

@Provide()
export class UserService {
  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;

  /**
   * 新建用户
   * @param {UserType} 
   * @return {void}
   */
  async create (user: UserType) {
    return await this.userEntity.save(new UserEntity(user));
  }

  /**
   * 新建用户
   * @param {UserQueryType}
   * @return {void}
   */
  async query (query: UserQueryType): queryResult {
    let [data, total] = await this.userEntity.findAndCount(query);

    return [data, total];
  }

  /**
   * 新建用户
   * @param {UserType}
   * @return {void}
   */
  async update (user: UserType) {
    return await this.userEntity.updateById(user.id, user);
  }

  /**
   * 新建用户
   * @param {id}
   * @return {void}
   */
  async get (id: number) {
    return await this.userEntity.findOne({ id });
  }

  /**
   * 新建用户
   * @param {number[]}
   * @return {void}
   */
  async removeByIds (ids: number[]) {
    return await this.userEntity.removeByIds(ids);
  }
}