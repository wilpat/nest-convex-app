import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConvexService } from './convex/convex.service';
import { api } from '../convex/_generated/api';
import { Id } from '../convex/_generated/dataModel';
@Controller()
export class AppController {
  constructor(private readonly convexService: ConvexService) { }
  @Post('users')
  async createUser(@Body() body: { name: string; email: string }) {
    const client = this.convexService.client;
    return await client.mutation(api.users.createUser, body);
  }
  @Post('posts')
  async createPost(
    @Body() body: { title: string; content: string; authorId: Id<'users'> },
  ) {
    const client = this.convexService.client;
    return await client.mutation(api.posts.createPost, body);
  }
  @Get('posts')
  async getPosts() {
    const client = this.convexService.client;
    return await client.query(api.posts.getPosts);
  }
}
