/**
 * 用户
 * @author Philip
 */
import { RoleType } from '@/type/role';
import { QueryType } from '@/type/query';

export type UserType = {
    id?: number;
    name: string,
    email: string;
    birthday: string;
    username: string;
    password: string;
    role: RoleType;
    articles: ArticleType[];
}

export type UserQueryType = QueryType & {
    name: string,
    email: string
}