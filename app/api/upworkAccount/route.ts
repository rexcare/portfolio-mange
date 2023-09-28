import { NextResponse } from 'next/server';
import { getUpworkAccount, createUpworkAccount } from './service';

export async function GET(request: Request) {
  const data = await getUpworkAccount();
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const newUpworkAccount = {
    email: 'hello',
    google_label: 'thanks',
    full_name: 'thanks',
    address: 'thanks',
    title: 'thanks',
    resume: 'thanks',
    category: '64da1476cf1b4a4b7f462aab',
    connections: 50,
    isDeleted: false,
  };
  const data = await createUpworkAccount(newUpworkAccount);
  return NextResponse.json({ data });
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
