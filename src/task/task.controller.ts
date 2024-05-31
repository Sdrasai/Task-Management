import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ColumnsService } from 'src/column/column.service';

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly columnService: ColumnsService,
  ) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    let columnId = await this.columnService.findOneByStatus(
      createTaskDto.status,
    );

    let order = columnId[0].tasks.length + 1;
    let createTaskDto2 = { ...createTaskDto, columnId: columnId[0], order };
    return await this.taskService.create(createTaskDto2);
  }

  @Get()
  async findAll() {
    return await this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.taskService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return await this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.taskService.delete(id);
  }
}
