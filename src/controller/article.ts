/**
 * 文章管理
 * @author Philip
 */
import {
    Provide,
    Inject,
    Controller,
    Post,
    Get,
    Del,
    Put,
    Param,
    Query,
    Body
} from "@midwayjs/decorator";
import { CreateApiDoc } from "@midwayjs/swagger";
import { Context } from "egg";
import { ArticleService } from "@/service/article";
import { ArticleType, ArticleQueryType } from "@/type/article";
import ArticleEntity from '@/entity/article';

@Provide()
@Controller('/api')
export class ArticleController {
  @Inject()
  ctx: Context;

  @Inject()
  ArticleService: ArticleService;

  @CreateApiDoc()
    .summary('新建文章')
    .build()
  @Post('/article')
  async create (@Body() article: ArticleType) {
    await this.ArticleService.create(article);
  }

  @CreateApiDoc()
    .summary('更新文章')
    .build()
  @Put('/article')
  async update (@Body() article: ArticleType) {
    await this.ArticleService.update(article);
  }

  @CreateApiDoc()
    .summary('获取文章实例数据')
    .build()
  @Get('/article/:id')
  async get(@Param() id: number): Promise<ArticleEntity> {
    return await this.ArticleService.get(id);
  }

  @CreateApiDoc()
    .summary('获取文章列表数据')
    .build()
  @Get('/articles')
  async query(@Query() query: ArticleQueryType) {
    return await this.ArticleService.query(query);
  }

  @CreateApiDoc()
    .summary('批量删除文章')
    .build()
  @Del('/articles')
  async delete (@Query() ids: string) {
    await this.ArticleService.removeByIds(ids.split(',').map(id => parseInt(id)));
  }
}
