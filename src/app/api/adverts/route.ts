import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import connectDB from '@/lib/db';
import Ad from '@/models/Ad';

export async function GET() {
  try {
    await connectDB();
    const adverts = await Ad.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, adverts });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Direct admin post defaults to active if not provided
    if (!data.status) {
      data.status = 'active';
    }

    const advert = new Ad(data);
    await advert.save();
    
    try { revalidatePath('/'); } catch (e) { console.error(e); }
    return NextResponse.json({ success: true, advert });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
