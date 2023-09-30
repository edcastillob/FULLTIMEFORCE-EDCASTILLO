import { Controller, Get } from '@nestjs/common';
import { GitDataUserService } from '../services/git-data-user.service';
import { GitDataUserInterface } from '../interfaces/git-data-user.interface';

@Controller()
export class GitDataUserController {
  constructor(private readonly GitDataUserService: GitDataUserService) {}

  @Get()
  getHello(): string {
    return this.GitDataUserService.getHello();
  }

  @Get('commits')
  async getCommits(): Promise<GitDataUserInterface[]> {
    try {
      const commits = await this.GitDataUserService.getCommitsFromGitHub();
      return commits;
    } catch (error) {
      throw error;
    }
  }
}