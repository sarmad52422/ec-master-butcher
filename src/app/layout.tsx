import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Providers } from "@/redux/provider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresh Meat House",
  description: "The best place to buy fresh meat online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  currentPath: string;
}>) {
  return (
    <html lang="en" data-theme={"cupcake"}>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
