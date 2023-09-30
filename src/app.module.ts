import { Module } from '@nestjs/common';
import { GitDataUserModule } from './git-data-user/git-data-user.module';

@Module({
  imports: [GitDataUserModule],
})
export class AppModule {}
