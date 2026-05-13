'use client';

import { useState } from 'react';
import Script from 'next/script';

const PLANS = [
  { name: 'Article Page Ad', price: 20000, desc: 'Shown on all article reading pages.' },
  { name: 'Sponsored Article', price: 70000, desc: 'Full feature story in article feed.' },
  { name: 'Homepage Banner', price: 150000, desc: 'Bold banner on the homepage.' },
];

export default function AdvertisePage() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    adHeadline: '',
    adContent: '',
    adUrl: '',
    adImage: ''
  });
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round((height * MAX_WIDTH) / width);
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round((width * MAX_HEIGHT) / height);
              height = MAX_HEIGHT;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const compressedBase64 = canvas.toDataURL('image/webp', 0.75);
            setFormData(prev => ({ ...prev, adImage: compressedBase64 }));
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePayment = () => {
    if (!formData.clientName || !formData.email || !selectedPlan) {
      alert('Please fill in required fields.');
      return;
    }

    const config = {
      public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
      tx_ref: `TPP-${Date.now()}`,
      amount: selectedPlan.price,
      currency: 'NGN',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email: formData.email,
        name: formData.clientName,
      },
      customizations: {
        title: "The People's Platform Ad",
        description: `Payment for ${selectedPlan.name}`,
        logo: "https://thepeoplesplatform.online/logo.png",
      },
      callback: async (response: any) => {
        setLoading(true);
        try {
          const res = await fetch('/api/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              transaction_id: response.transaction_id,
              tx_ref: response.tx_ref,
              ...formData,
              plan: selectedPlan.name,
              amount: selectedPlan.price
            })
          });
          
          if (res.ok) {
            alert('Payment successful! Your ad is pending review.');
            window.location.href = '/';
          } else {
            alert('Verification failed. Please contact support.');
          }
        } catch (err) {
          alert('Network error. Contact support.');
        }
        setLoading(false);
      },
    };

    (window as any).FlutterwaveCheckout(config);
  };

  return (
    <div className="container py-12 max-w-4xl">
      <Script src="https://checkout.flutterwave.com/v3.js" strategy="lazyOnload" />
      
      <div className="text-center mb-12">
        <h1 className="mb-4">Advertise with Us</h1>
        <p className="text-muted">Reach millions of engaged readers across Nigeria and beyond.</p>
      </div>

      <div className="plans-grid mb-12">
        {PLANS.map(plan => (
          <div 
            key={plan.name} 
            className={`premium-card plan-card ${selectedPlan?.name === plan.name ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(plan)}
          >
            <h3>{plan.name}</h3>
            <p className="price">₦{plan.price.toLocaleString()}</p>
            <p className="desc">{plan.desc}</p>
            <button className="btn w-full mt-4">{selectedPlan?.name === plan.name ? 'Selected' : 'Choose'}</button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="ad-form premium-card animate-fade">
          <h2 className="mb-6">Ad Details for {selectedPlan.name}</h2>
          <div className="form-grid-2">
            <div className="field">
              <label>Business Name *</label>
              <input type="text" value={formData.clientName} onChange={e => setFormData({...formData, clientName: e.target.value})} />
            </div>
            <div className="field">
              <label>Contact Email *</label>
              <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
          </div>
          <div className="field mt-4">
            <label>Ad Headline</label>
            <input type="text" value={formData.adHeadline} onChange={e => setFormData({...formData, adHeadline: e.target.value})} />
          </div>
          <div className="field mt-4">
            <label>Ad Content</label>
            <textarea value={formData.adContent} onChange={e => setFormData({...formData, adContent: e.target.value})}></textarea>
          </div>
          <div className="field mt-4">
            <label>Target Link / URL</label>
            <input type="text" placeholder="https://example.com" value={formData.adUrl} onChange={e => setFormData({...formData, adUrl: e.target.value})} />
          </div>
          <div className="field mt-4">
            <label>Upload Ad Image / Material</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'block', width: '100%', padding: '0.75rem', border: '1px dashed var(--border)', borderRadius: '0.5rem', background: 'var(--bg-offset)', cursor: 'pointer' }} />
            {formData.adImage && (
              <div style={{ marginTop: '1rem', width: '100%', height: '150px', position: 'relative', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <img src={formData.adImage} alt="Ad Preview" style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }} />
              </div>
            )}
          </div>
          <button 
            className="btn btn-primary w-full mt-8" 
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? 'Processing...' : `Pay ₦${selectedPlan.price.toLocaleString()} Now`}
          </button>
        </div>
      )}

    </div>
  );
}
