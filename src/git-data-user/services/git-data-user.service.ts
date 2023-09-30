import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GitDataUserInterface } from '../interfaces/git-data-user.interface';

@Injectable()
export class GitDataUserService {
  getHello(): string {
    return '⚡📱Backend Desafío técnico Edwar Castillo...';
  }

  async getCommitsFromGitHub(): Promise<any[]> {
    try {
      const response = await axios.get(
        'https://api.github.com/repos/edcastillob/FULLTIMEFORCE-EDCASTILLO/commits',
      );

      const selectedCommits: GitDataUserInterface[] = response.data.map(
        (commit: GitDataUserInterface) => ({
          sha: commit.sha,
          commit: {
            message: commit.commit.message,
            author: {
              date: commit.commit.author.date,
            },
          },
        })
      );     
      return selectedCommits;
    } catch (error) {
      throw error;
    }
  }
}
