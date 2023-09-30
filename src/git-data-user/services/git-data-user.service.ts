import { Injectable } from '@nestjs/common';

@Injectable()
export class GitDataUserService {
    getHello(): string {
        return '⚡📱Backend Desafío técnico Edwar Castillo...';
      }
}
