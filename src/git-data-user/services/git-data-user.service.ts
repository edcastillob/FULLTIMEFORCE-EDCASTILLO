import { Injectable } from '@nestjs/common';
import axios from 'axios';

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
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
