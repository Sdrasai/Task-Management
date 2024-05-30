import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    TaskModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest_todo'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
