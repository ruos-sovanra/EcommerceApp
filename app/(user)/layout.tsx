
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavbarComponent from "@/Components/navbar/NavbarComponent";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import {Suspense} from "react";
import Loading from "@/app/(user)/loading";
import Error from "@/app/(user)/error";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSTAD Ecommerce",
  description: 'An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
        <NavbarComponent />
      </header>
      <ErrorBoundary errorComponent={Error}>
          <Suspense fallback={<Loading/>}>{children}</Suspense>
      </ErrorBoundary></body>
    </html>
  );
}
