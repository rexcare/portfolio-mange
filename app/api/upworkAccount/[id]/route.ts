import { NextResponse } from 'next/server';
import { getUpworkAccountById } from '../service';

export async function GET(request: Request, { params }: any) {
  const { id } = params;
  const data = await getUpworkAccountById(id);

  return NextResponse.json(data);
}
export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}
