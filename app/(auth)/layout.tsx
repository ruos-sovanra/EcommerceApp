import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'CSTAD Ecommerce',
    openGraph: {
        title: 'CSTAD Ecommerce',
        description: 'An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location',
        images: "https://st.depositphotos.com/2021695/1972/i/450/depositphotos_19724845-stock-illustration-various-shoes.jpg"
    },
};

export default function AuthLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
