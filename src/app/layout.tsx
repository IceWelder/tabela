
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head'; // Importar o Head do Next.js
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tabela de preços",
  description: "Tabela de preços",
};

export default function RootLayout({
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
