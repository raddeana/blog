/**
 * 菜单实体
 * @author Philip
 */
import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import RoleEntity from "@/entity/rbac/role";
import BaseEntity from "@/entity/BaseEntity";
import { MenuType } from '@/type/menu';


@EntityModel('menu')
export default class Menu extends BaseEntity<MenuType> {
  constructor (entity?: MenuType) {
      if (entity) {
          super(entity);
      }
  }
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 16
  })
  name: string;

  @Column({
    length: 8
  })
  code: string;

  @ManyToMany(type => RoleEntity, role => role.menus)
  roles: RoleEntity[];
}