/**
 * 角色
 * @author Philip
 */
import { QueryType } from '@/type/query';
import { MenuType } from '@/type/menus';

export type RoleType = {
    id: number;
    name: string;
    menus: Array<MenuType>;
}

export type RoleQueryType = QueryType & {
    name: ''
}