/**
 * 菜单类型声明
 * @author Philip
 */
import { RoleType } from '@/type/role';
import { QueryType } from '@/type/query';

export type MenuType = {
    id: number;
    name: string;
    code: string;
    content: string;
    roles: Array<RoleType>;
}

export type MenuQueryType = QueryType & {
    name: '',
    code: ''
}