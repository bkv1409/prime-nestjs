import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';
import { LoggerService } from 'src/logger/logger.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    // private readonly logger: LoggerService = new Logger(TasksService.name),
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
    private readonly logger: LoggerService = new Logger(TasksService.name),
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    this.logger.debug('Called when the current second is 10');
  }

  @Interval(10000)
  handleInterval() {
    this.logger.debug('Called every 10 seconds');
  }

  @Timeout(5000)
  handleTimeout() {
    this.logger.debug('Called once after 5 seconds');
  }

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    // return 'This action adds a new task';
    const task = new Task(createTaskDto);
    return this.tasksRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    // return 'This action returns all tasks';
    return this.tasksRepository.find();
  }

  findOne(id: number): Promise<Task> {
    // return `This action returns a #${id} task`;
    return this.tasksRepository.findOne({
      id,
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto): Promise<UpdateResult> {
    // return `This action updates a #${id} task`;
    return this.tasksRepository.update(id, { ...updateTaskDto });
  }

  remove(id: number): Promise<DeleteResult> {
    // return `This action removes a #${id} task`;
    return this.tasksRepository.delete(id);
  }
}
