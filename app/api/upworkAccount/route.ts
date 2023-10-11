import { NextResponse } from 'next/server';
import dbConnect from '@/app/api/db-connect';
import UpworkAccount from './model';

// get all account
export async function GET(request: Request) {
  const url = new URL(request.url);
  const search_keywords = url.searchParams.get('search_keywords');
  const start = url.searchParams.get('start');
  const count = url.searchParams.get('count');
  const sortby = url.searchParams.get('sortby');
  const sort_direction = url.searchParams.get('sort_direction');
  const fields = url.searchParams.get('fields');

  console.log('fields :>> ', fields);
  console.log('search_keywords :>> ', search_keywords);

  await dbConnect();
  const data = await UpworkAccount.find({}, fields, { skip: 1 });
  return NextResponse.json({ data });
}

// create a new account
export async function POST(request: Request) {
  await dbConnect();
  const newUpworkAccount = await request.json();
  try {
    const data = await UpworkAccount.create(newUpworkAccount);
    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

// update several accounts info byc _id
export async function PUT(request: Request) {
  const { ids, updateData } = await request.json();
  dbConnect();
  try {
    const taskUpdated = await UpworkAccount.updateMany(
      { _id: { $in: ids } },
      updateData
    );

    if (!taskUpdated)
      return NextResponse.json(
        {
          message: 'Task not found',
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

// delete several accounts by _id
export async function DELETE(request: Request) {
  dbConnect();
  const { ids } = await request.json();
  console.log('ids :>> ', ids);
  try {
    const accountDeleted = await UpworkAccount.deleteMany({
      _id: { $in: ids },
    });

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

export async function PATCH(request: Request) {}
