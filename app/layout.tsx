import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer, Navbar } from "@/components";
import 'animate.css';
import "./globals.css";
import "@/components/style.css";
import Providers from "@/config/react_query/providers";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EMA Logistics",
  description: "EMA Logistika servisida 7 yillik tajriba Xitoydan O'zbekistonga: Avto, Avia, Temiryo'l kargosi. Xitoyning naqd 5 ta shahrida omborlarimiz mavjud: Yivu Urumchi Guangzhou Shengjin Va eng asosiy qulaylik esa bojxona ishlari va door to door",
  openGraph: {
    title: 'EMA Logistika',
    description: "EMA Logistika servisida 7 yillik tajriba Xitoydan O'zbekistonga: Avto, Avia, Temiryo'l kargosi. Xitoyning naqd 5 ta shahrida omborlarimiz mavjud: Yivu Urumchi Guangzhou Shengjin Va eng asosiy qulaylik esa bojxona ishlari va door to door",
    type: 'website',
    locale: 'uz_UZ',
    url: 'https://emalogistics.uz',
    siteName: 'EMA Logistics',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="# 000000" />
        <link rel="icon" href="./favicon.ico" />

        <title>EMA Logistics</title>
        <meta name="title" content="EMA Logistics" />
        <meta name="description" content="EMA Logistika servisida 7 yillik tajriba Xitoydan O'zbekistonga: Avto, Avia, Temiryo'l kargosi. Xitoyning naqd 5 ta shahrida omborlarimiz mavjud: Yivu Urumchi Guangzhou Shengjin Va eng asosiy qulaylik esa bojxona ishlari va door to door" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://emalogistics.uz" />
        <meta property="og:title" content="EMA Logistics" />
        <meta property="og:description" content="EMA Logistika servisida 7 yillik tajriba Xitoydan O'zbekistonga: Avto, Avia, Temiryo'l kargosi. Xitoyning naqd 5 ta shahrida omborlarimiz mavjud: Yivu Urumchi Guangzhou Shengjin Va eng asosiy qulaylik esa bojxona ishlari va door to door" />
        <meta property="og:image" content="/logo3.png" />


        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=SUSE:wght@100..800&display=swap" rel="stylesheet" />


        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
