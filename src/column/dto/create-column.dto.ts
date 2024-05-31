import { Prop } from '@nestjs/mongoose';

export class CreateColumnDto {
  @Prop()
  status: String;
}
