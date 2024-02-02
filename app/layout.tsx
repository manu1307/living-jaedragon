import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "./recoilContextProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID!;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shopping-jaedragon.vercel.app/"),
  title: "재드래곤 몰래 쇼핑하기",
  description: "재드래곤의 카드가 우리 집 앞에 배송왔다고?",
  openGraph: {
    siteName: "재드래곤 몰래 쇼핑하기",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1692473753010401280/60Ney4Gu_400x400.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://pbs.twimg.com/profile_images/1692473753010401280/60Ney4Gu_400x400.jpg",
        width: 1800,
        height: 1600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <RecoilContextProvider>{children}</RecoilContextProvider>
        <GoogleAnalytics ga_id={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
