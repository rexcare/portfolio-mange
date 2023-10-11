import type { IFakeAddress } from '@/interfaces/fakeAddress';
import type { Model } from 'mongoose';
import mongoose, { model } from 'mongoose';

const FakeAddressSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      required: [true, 'Please provide a title'],
      maxlength: [60, 'Title cannot be more than 60 characters'],
    },
    city: {
      type: String,
      required: [true, 'Please provide a city'],
    },
    state: {
      type: String,
      required: [true, 'Please provide a state'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide a phone'],
    },
    country_calling_code: {
      type: Number,
      required: [true, 'Please provide a country_calling_code'],
    },

    country: {
      type: String,
      required: [true, 'Please provide a country'],
    },
  },
  {
    timestamps: true,
  }
);

export default (mongoose.models.FakeAddress ||
  model<IFakeAddress>('FakeAddress', FakeAddressSchema)) as Model<IFakeAddress>;
