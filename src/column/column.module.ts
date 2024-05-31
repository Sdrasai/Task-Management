import { Module } from '@nestjs/common';
import { ColumnsService } from './column.service';
import { ColumnController } from './column.controller';

@Module({
  controllers: [ColumnController],
  providers: [ColumnsService],
})
export class ColumnModule {}
