import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Column } from './entities/column.entity';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';

@Injectable()
export class ColumnsService {
  constructor(@InjectModel(Column.name) private columnModel: Model<Column>) {}

  async create(createColumnDto: CreateColumnDto): Promise<Column> {
    return await this.columnModel.create(createColumnDto);
  }

  async findAll(): Promise<Column[]> {
    return await this.columnModel.find().exec();
  }

  async findOne(id: string): Promise<Column> {
    return await this.columnModel.findById(id).exec();
  }

  async update(id: string, updateColumnDto: UpdateColumnDto): Promise<Column> {
    return await this.columnModel.findByIdAndUpdate(
      id,
      { updateColumnDto },
      { new: true },
    );
  }

  async delete(id: string): Promise<Column> {
    return await this.columnModel.findByIdAndDelete(id);
  }

  async findOneByStatus(status: string) {
    return await this.columnModel.find({ status });
  }

  async pushTasks(columnId: string, taskId: any) {
    return await this.columnModel.updateOne(
      { _id: columnId },
      { $push: { tasks: taskId } },
    );
  }
}
