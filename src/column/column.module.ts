import { Module } from '@nestjs/common';
import { ColumnsService } from './column.service';
import { ColumnController } from './column.controller';
import { Column, ColumnSchema } from './entities/column.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Column.name, schema: ColumnSchema }]),
  ],
  controllers: [ColumnController],
  providers: [ColumnsService],
  exports: [ColumnsService],
})
export class ColumnModule {}
