import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Article from '@/models/Article';

export async function GET() {
  try {
    await connectDB();
    const articles = await Article.find({}).sort({ date: -1 });
    return NextResponse.json({ success: true, articles });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Auto-generate slug if not provided
    if (!data.slug && data.title) {
      const baseSlug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      data.slug = `${baseSlug}-${Date.now()}`;
    }
    
    // Ensure category exists
    if (!data.category) {
      data.category = 'General';
    }

    const article = new Article(data);
    await article.save();
    return NextResponse.json({ success: true, article });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
