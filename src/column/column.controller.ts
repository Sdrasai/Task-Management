import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ColumnsService } from './column.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { status } from './entities/column.entity';
import sendEmailNotification from 'src/utils/emailSender';
import { CreateTaskDto } from 'src/task/dto/create-task.dto';

@Controller('column')
export class ColumnController {
  constructor(private readonly columnService: ColumnsService) {}

  @Post()
  create(@Body() createColumnDto: CreateColumnDto) {
    console.log(createColumnDto);
    return this.columnService.create(createColumnDto);
  }

  @Get()
  findAll() {
    return this.columnService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.columnService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateColumnDto: UpdateColumnDto,
    createTaskDto: CreateTaskDto,
  ) {
    const updatedStatus = updateColumnDto.status;
    if (updatedStatus === status.Completed) {
      sendEmailNotification(createTaskDto);
    }
    return this.columnService.update(id, updateColumnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnService.delete(id);
  }
}
