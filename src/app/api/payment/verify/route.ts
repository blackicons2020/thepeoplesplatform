import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Ad from '@/models/Ad';

export async function POST(req: Request) {
  try {
    const { transaction_id, tx_ref, clientName, email, plan, amount, adImage, adHeadline, adContent, adUrl } = await req.json();

    if (!transaction_id) {
      return NextResponse.json({ message: 'Transaction ID is required' }, { status: 400 });
    }

    // Verify with Flutterwave
    const response = await fetch(`https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.status === 'success' && data.data.status === 'successful' && data.data.amount >= amount) {
      await connectDB();
      
      // Check if reference already exists
      const existing = await Ad.findOne({ paymentReference: tx_ref });
      if (existing) {
        return NextResponse.json({ message: 'Payment reference already used' }, { status: 409 });
      }

      // Save Ad
      const newAd = new Ad({
        clientName,
        email,
        plan,
        amount,
        adImage,
        adHeadline,
        adContent,
        adUrl,
        paymentReference: tx_ref,
        status: 'pending' // Editorial review needed
      });

      await newAd.save();

      return NextResponse.json({ message: 'Payment verified and Ad submitted' }, { status: 201 });
    } else {
      return NextResponse.json({ message: 'Payment verification failed' }, { status: 402 });
    }
  } catch (error: any) {
    console.error('Flutterwave verification error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
