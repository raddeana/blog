import { Inject, Controller, Post, Provide, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @CreateApiDoc()
    .summary('get user')
    .description('This is a open api for get user')
    .build()

  @Post('/get_user')
  async getUser(@Query() uid) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @CreateApiDoc()
    .summary('get user')
    .description('This is a open api for get user')
    .param('user id', {
      required: true,
      example: '123456'
    })
    .param({
      description: 'This is a user name'
    })
    .build()

    @CreateApiDoc()
    .summary('get user')
    .description('This is a open api for get user')
    .respond(200)
    .respond(302, 'redirect to another URL')
    .respond(201, 'response a text data', 'text', {
      headers: {
        'x-schema': {
          description: 'set a schema header',
          type: 'string'
        }
      },
      example: 'this is a reponse data'
    })
    .respond(500, 'error in response', 'json', {
      example: {
        a: 1
      }
    })
}
