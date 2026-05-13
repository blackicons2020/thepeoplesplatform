import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import connectDB from '@/lib/db';
import Ad from '@/models/Ad';

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectDB();
    const data = await request.json();
    
    const advert = await Ad.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    if (!advert) {
      return NextResponse.json({ success: false, error: 'Advert not found' }, { status: 404 });
    }
    
    try { revalidatePath('/'); } catch (e) { console.error(e); }
    return NextResponse.json({ success: true, advert });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectDB();
    const advert = await Ad.findByIdAndDelete(id);
    if (!advert) {
      return NextResponse.json({ success: false, error: 'Advert not found' }, { status: 404 });
    }
    
    try { revalidatePath('/'); } catch (e) { console.error(e); }
    return NextResponse.json({ success: true, message: 'Advert deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
