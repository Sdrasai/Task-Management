import { Test, TestingModule } from '@nestjs/testing';
import { ColumnController } from './column.controller';
import { ColumnsService } from './column.service';

describe('ColumnController', () => {
  let controller: ColumnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColumnController],
      providers: [ColumnsService],
    }).compile();

    controller = module.get<ColumnController>(ColumnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
