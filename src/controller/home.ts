import { Controller, Get, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/', { tagName: 'Custom Group', description: 'Home Router'})
export class HomeController {
  @Get('/', {summary: 'Main Page', description: 'This is a home router'})
  async home() {
    return 'Hello Midwayjs!';
  }
}
