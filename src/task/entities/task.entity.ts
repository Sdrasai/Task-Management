// src/schemas/task.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true, unique: true })
  owner: string;

  @Prop({ type: [Types.ObjectId], ref: 'Column' })
  columnId: String;

  @Prop({ required: true })
  order: number;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
