/**
 * 用户实体
 * @author Philip
 */
import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Role from "@/entity/rbac/role";
import ArticleEntity from "@/entity/article";
import BaseEntity from "@/entity/BaseEntity";
import { UserType } from '@/type/user';

@EntityModel('user')
export default class User extends BaseEntity<UserType> {
  constructor (entity?: UserType) {
      if (entity) {
          super(entity);
      }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 16
  })
  username: string;
  
  @Column({
    length: 16
  })
  password: string;
  
  @Column({
    length: 16
  })
  nickname: string;
  
  @Column({
    length: 256
  })
  avatar: string;

  @ManyToOne(type => Role, role => role.users)
  role: Role;

  @ManyToOne(type => ArticleEntity, article => article.author)
  articles: ArticleEntity[];
}