/**
 * 接口
 * @author Philip
 */
import { UserType } from '@/type/user';
import { QueryType } from '@/type/query';

export type ArticleType = {
    id: number;
    title: string;
    description: string;
    content: string;
    author: UserType;
}

export type ArticleQueryType = QueryType & {
    title: ''
}