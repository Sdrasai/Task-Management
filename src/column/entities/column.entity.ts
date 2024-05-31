import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum status {
  ToDo = 'TODO',
  InProgress = 'INPROGRESS',
  Completed = 'COMPLETED',
}

@Schema()
export class Column extends Document {
  @Prop({ required: true, enum: status })
  status: status;

  @Prop({ type: [Types.ObjectId], ref: 'Task' })
  tasks?: string[];
}

export const ColumnSchema = SchemaFactory.createForClass(Column);
