import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { status } from 'src/column/entities/column.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEmail()
  owner: string;

  @IsNotEmpty()
  @IsString()
  status: status;
}
