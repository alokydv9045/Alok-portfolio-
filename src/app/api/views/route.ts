import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const pageView = await prisma.pageView.findUnique({
      where: { slug: 'global' },
    });
    
    return NextResponse.json({ count: pageView?.count || 0, status: 'success' });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch view count', status: 'error' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const updatedView = await prisma.pageView.upsert({
      where: { slug: 'global' },
      update: { count: { increment: 1 } },
      create: { slug: 'global', count: 1 },
    });
    
    return NextResponse.json({ count: updatedView.count, status: 'success' });
  } catch {
    return NextResponse.json(
      { error: 'Failed to update view count', status: 'error' },
      { status: 500 }
    );
  }
}
