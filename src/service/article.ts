/**
 * 文章
 * @author Philip
 */
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository, getManager, UpdateResult } from 'typeorm';
import Article from '@/entity/article';
import { ArticleType, ArticleQueryType } from '@/type/article';
import { QueryResult } from '@/type/queryResult';

@Provide()
export class ArticleService {
  @InjectEntityModel(Article)
  articleEntity: Repository<Article>;

  /**
   * 新建用户
   * @param {ArticleType} 
   * @return {void}
   */
  async create (article: ArticleType) : Promise<Article> {
    return await this.articleEntity.save(new Article(article));
  }

  /**
   * 新建用户
   * @param {ArticleQueryType}
   * @return {void}
   */
  async query (query: ArticleQueryType) : Promise<QueryResult<Article>> {
    let [data, total] = await this.articleEntity.findAndCount(query);

    return [data, total];
  }

  /**
   * 新建用户
   * @param {ArticleType}
   * @return {void}
   */
  async update (article: ArticleType) : Promise<UpdateResult> {
    return await this.articleEntity.update(article.id, article);
  }

  /**
   * 新建用户
   * @param {id}
   * @return {void}
   */
  async get (id: number) : Promise<Article> {
    return await this.articleEntity.findOne({ id });
  }

  /**
   * 新建用户
   * @param {number[]}
   * @return {void}
   */
  async removeByIds (ids: number[]) : Promise<void>  {
    let entities = [];

    ids.forEach(async (id) => {
      entities.push(await this.articleEntity.findOne({ id }));
    });
  
    await getManager().transaction(async transactionalEntityManager => {
      await transactionalEntityManager.remove(Article, entities);
    });
  }
}