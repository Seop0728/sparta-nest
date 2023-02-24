import { Controller, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login') // 강의영상엔 @Get으로 되어있는데 @Post가 맞습니다!
  async login() {
    return await this.userService.login('userId', 'password');
  }

  @Post('/signup')
  async createUser() {
    return await this.userService.createUser('asdf', 'qwer', '1234');
  }

  @Put('/update')
  updateUser() {
    this.userService.updateUser('userId', 'new_name', 'new_password');
  }
}
