import { NextResponse } from 'next/server';
import { getExample, createExample } from './service';

export async function GET(request: Request) {
  const data = await getExample();
  const url = new URL(request.url);
  const skip = url.searchParams.get('skip');
  return NextResponse.json({ data, req: skip });
}

export async function POST(request: Request) {
  const data = await createExample({
    title: 'hello',
    description: 'thanks',
  });
  return NextResponse.json({ data });
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
