import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { LoggerModule } from 'src/logger/logger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

@Module({
  // imports: [LoggerModule, TypeOrmModule.forFeature([Task])],
  imports: [TypeOrmModule.forFeature([Task]), LoggerModule],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
