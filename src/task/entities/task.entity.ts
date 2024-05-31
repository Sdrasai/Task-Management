import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { status } from 'src/column/entities/column.entity';

@Schema()
export class Task extends Document {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  owner: string;

  @Prop({ type: Types.ObjectId, ref: 'Column' })
  columnId: string;

  @Prop({ required: true })
  order: number;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
