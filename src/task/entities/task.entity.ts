import { Mongoose, Schema, Types, model } from 'mongoose';

enum status {
  ToDo = 'TODO',
  InProgress = 'INPROGRESS',
  Completed = 'COMPLETED',
}

export const taskSchema = new Schema(
  {
    owner: { type: Types.ObjectId, ref: 'User' },
    description: { type: String },
    status: { type: status, default: status.ToDo },
  },
  {
    timestamps: true,
  },
);

const taskModel = model('Task', taskSchema);

export default taskModel;
