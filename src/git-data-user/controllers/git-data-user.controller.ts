import { Controller, Get } from '@nestjs/common';
import { GitDataUserService } from '../services/git-data-user.service';

@Controller()
export class GitDataUserController {
    constructor(private readonly GitDataUserService: GitDataUserService) {}

    @Get()
    getHello(): string {
      return this.GitDataUserService.getHello();
    }
}
