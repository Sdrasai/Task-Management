// src/schemas/task.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  owner: string;

  @Prop({ required: true })
  columnId: string;

  @Prop({ required: true })
  order: number;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
