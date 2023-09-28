import { NextResponse } from 'next/server';
import { getUpworkAccount, createUpworkAccount } from './service';

export async function GET(request: Request) {
  const data = await getUpworkAccount();
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const newUpworkAccount = await request.json();
  const data = await createUpworkAccount(newUpworkAccount);
  return NextResponse.json({ data });
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
