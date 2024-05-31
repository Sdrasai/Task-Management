import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Column } from 'src/column/entities/column.entity';
import { ColumnsService } from 'src/column/column.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private taskModel: Model<Task>,
    private readonly columnService: ColumnsService,
  ) {}
  async create(createTaskDto) {
    const task = await this.taskModel.create(createTaskDto);
    await this.columnService.pushTasks(createTaskDto.columnId, task._id);
    return task;
  }

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find();
  }

  async findOne(id: string): Promise<Task> {
    return await this.taskModel.findById(id);
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return await this.taskModel.findByIdAndUpdate(
      id,
      { updateTaskDto },
      { new: true },
    );
  }

  async delete(id: string): Promise<Task> {
    return await this.taskModel.findByIdAndDelete(id);
  }
}
