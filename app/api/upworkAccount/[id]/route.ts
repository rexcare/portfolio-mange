import { NextResponse } from 'next/server';
import { getUpworkAccountById } from '../service';
import UpworkAccount from '../model';
import dbConnect from '@/app/api/db-connect';

export async function GET(request: Request, { params }: any) {
  const { id } = params;
  const data = await getUpworkAccountById(id);

  return NextResponse.json(data);
}
export async function PUT(request: Request, { params }: any) {
  const { id } = params;
  const updateData = await request.json();
  await dbConnect();

  try {
    const taskUpdated = await UpworkAccount.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!taskUpdated)
      return NextResponse.json(
        {
          message: 'Account not found',
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(taskUpdated);
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request: Request, { params }: any) {
  const { id } = params;
  dbConnect();

  try {
    const accountDeleted = await UpworkAccount.findByIdAndDelete(id);

    if (!accountDeleted)
      return NextResponse.json(
        {
          message: 'Account not found',
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(accountDeleted);
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
