import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "./recoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "재드래곤 몰래 쇼핑하기",
  description:
    "재드래곤의 카드가 우리 집 앞에 배송왔다고? 쇼핑을 한 번 즐겨볼까요? ",
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
    <html lang="en">
      <body className={inter.className}>
        <RecoilContextProvider>{children}</RecoilContextProvider>
      </body>
    </html>
  );
}
