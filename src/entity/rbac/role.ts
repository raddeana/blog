/**
 * 用户实体
 * @author Philip
 */
import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinTable } from "typeorm";
import Menu from "@/entity/rbac/menu";
import User from "@/entity/rbac/user";
import BaseEntity from "@/entity/BaseEntity";
import { RoleType } from '@/type/role';

@EntityModel('author')
export default class Role extends BaseEntity<RoleType> {
    constructor (entity?: RoleType) {
        if (entity) {
            super(entity);
        }
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Menu, menu => menu.roles)
    @JoinTable()
    menus: Menu[];

    @OneToMany(type => User, user => user.role)
    users: User[];
}