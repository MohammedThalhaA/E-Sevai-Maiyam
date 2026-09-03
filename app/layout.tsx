import type { Metadata } from "next";
import { Inter, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import { business } from "../data/site-content";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContactBar from "../components/FloatingContactBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansTamil = Noto_Sans_Tamil({
  variable: "--font-noto-sans-tamil",
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${business.name} | Government & Digital Services in Villivakkam, Chennai`,
  description: `Your one-stop center for Government Certificates, Aadhaar/PAN, Bill Payments, and Printing Services in Villivakkam. Fast, reliable, and Govt authorized CSC.`,
  openGraph: {
    title: `${business.name} | Villivakkam`,
    description: `Government & Digital Services Center in Villivakkam. Certificates, Identity Cards, Bill Payments & more.`,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "alternateName": business.nameTa,
    "image": "",
    "@id": "",
    "url": "",
    "telephone": business.phonePrimary,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address,
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600049",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00", // Placeholder until confirmed
      "closes": "21:00"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${notoSansTamil.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContactBar />
      </body>
    </html>
  );
}
