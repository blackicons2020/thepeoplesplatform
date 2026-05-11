import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The People's Platform | Trustworthy News & Analysis",
    template: "%s | The People's Platform"
  },
  description: "A production-grade news platform delivering unbiased reporting and deep analysis on politics, business, and technology.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thepeoplesplatform.online"),
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://thepeoplesplatform.online',
    siteName: "The People's Platform",
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thepeoplesplatform',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
