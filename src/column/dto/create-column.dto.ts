import { IsNotEmpty, IsString } from 'class-validator';
import { status } from '../entities/column.entity';

export class CreateColumnDto {
  @IsString()
  @IsNotEmpty()
  status: status;
}
