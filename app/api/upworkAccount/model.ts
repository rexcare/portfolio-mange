import type { IUpworkAccount } from '@/interfaces/upworkAccount';
import type { Model } from 'mongoose';
import mongoose, { model } from 'mongoose';

const UpworkAccountSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide a email'],
    },
    google_label: {
      type: String,
      required: [true, 'Please provide a google_label'],
    },
    full_name: {
      type: String,
      required: [true, 'Please provide a full_name'],
    },
    address: {
      type: String,
      required: [true, 'Please provide a address'],
    },
    title: {
      type: String,
      maxlength: [70, 'Title cannot be more than 70 characters'],
    },
    resume: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please provide a category'],
    },
    connections: {
      type: Number,
      default: 50,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default (mongoose.models.UpworkAccount ||
  model<IUpworkAccount>(
    'UpworkAccount',
    UpworkAccountSchema
  )) as Model<IUpworkAccount>;
