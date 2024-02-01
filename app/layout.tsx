import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import RecoilContextProvider from "./recoilContextProvider";
import Head from "next/head";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

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
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>
      <body className={inter.className}>
        <RecoilContextProvider>{children}</RecoilContextProvider>
      </body>
    </html>
  );
}
