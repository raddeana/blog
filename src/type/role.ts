/**
 * 角色
 * @author Philip
 */
import { QueryType } from '@/type/query';

export type RoleType {
    id: number;
    name: string,
    menus: Array;
}

export type RoleQueryType = QueryType & {
    name: ''
}