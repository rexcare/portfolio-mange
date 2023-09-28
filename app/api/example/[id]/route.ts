import { NextResponse } from 'next/server';
import { getExample, getExampleById } from '../service';

export async function GET(request: Request, { params }: any) {
  const { id } = params;
  const data = await getExampleById(id);

  return NextResponse.json(data);
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
