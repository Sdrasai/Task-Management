import { Mongoose, Schema, Types, model } from 'mongoose';

export const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    tasks: { type: Types.ObjectId, ref: 'Task', default: [] },
  },
  {
    timestamps: true,
  },
);

const userModel = model('User', userSchema);

export default userModel;
