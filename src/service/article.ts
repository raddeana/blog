/**
 * 文章
 * @author Philip
 */
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository, getManager } from 'typeorm';
import ArticleEntity from '@/entity/article';
import { ArticleType, ArticleQueryType } from '@/type/article';

@Provide()
export class ArticleService {
  @InjectEntityModel(ArticleEntity)
  articleEntity: Repository<ArticleEntity>;

  /**
   * 新建用户
   * @param {ArticleType} 
   * @return {void}
   */
  async create (article: ArticleType) {
    return await this.articleEntity.save(new ArticleEntity(article));
  }

  /**
   * 新建用户
   * @param {ArticleQueryType}
   * @return {void}
   */
  async query (query: ArticleQueryType) {
    let [data, total] = await this.articleEntity.findAndCount(query);

    return [data, total];
  }

  /**
   * 新建用户
   * @param {ArticleType}
   * @return {void}
   */
  async update (article: ArticleType) {
    return await this.articleEntity.update(article.id, article);
  }

  /**
   * 新建用户
   * @param {id}
   * @return {void}
   */
  async get (id: number) {
    return await this.articleEntity.findOne({ id });
  }

  /**
   * 新建用户
   * @param {number[]}
   * @return {void}
   */
  async removeByIds (ids: number[]) {
    let entities = [];

    ids.forEach(async (id) => {
      entities.push(await this.articleEntity.findOne({ id }));
    });
  
    await getManager().transaction(async transactionalEntityManager => {
      await transactionalEntityManager.remove(ArticleEntity, entities);
    });
  }
}