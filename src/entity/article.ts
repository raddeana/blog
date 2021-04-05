/**
 * 用户实体
 * @author Philip
 */
import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import UserEntity from '@/entity/rbac/user';
import BaseEntity from "@/entity/BaseEntity";
import { ArticleType } from '@/type/article';

@EntityModel('article')
export default class Article extends BaseEntity<ArticleType> {
  constructor (entity?: ArticleType) {
    if (entity) {
      super(entity);
    }
  }

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({
    length: 64
  })
  title: string;
  
  @Column('text')
  description: string;
  
  @Column('text')
  content: string;

  @OneToMany(type => UserEntity, user => user.articles)
  author: UserEntity;
}