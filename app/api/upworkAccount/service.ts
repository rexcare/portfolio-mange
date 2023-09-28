import dbConnect from '@/app/api/db-connect';
import type { IUpworkAccount } from '@/interfaces/upworkAccount';

import UpworkAccount from './model';

export const createUpworkAccount = async (newUpworkAccount: IUpworkAccount) => {
  await dbConnect();
  //   const {email, google_label, full_name, address, title, resume, category} =newUpworkAccount
  const data = await UpworkAccount.create(newUpworkAccount);

  return data;
};

export const getUpworkAccount = async () => {
  await dbConnect();
  const data = await UpworkAccount.find({});

  return data;
};

export const getUpworkAccountById = async (id: string) => {
  await dbConnect();
  const data = await UpworkAccount.find({ _id: id });

  return data;
};

export const deleteUpworkAccount = async (id: string) => {
  await dbConnect();
  await UpworkAccount.findByIdAndDelete(id);
};
