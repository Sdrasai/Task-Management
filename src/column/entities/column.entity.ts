import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum status {
  ToDo = 'TODO',
  InProgress = 'INPROGRESS',
  Completed = 'COMPLETED',
}

@Schema()
export class Column extends Document {
  @Prop({ required: true, default: status.ToDo })
  status: status;
}

export const ColumnSchema = SchemaFactory.createForClass(Column);
