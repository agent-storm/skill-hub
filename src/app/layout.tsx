import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from 'next-auth'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "skill-hub",
  description: "A one stop to know it all",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getServerSession();
  console.log(data);
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <h5>Data: {JSON.stringify(data)}</h5>
      </body>
    </html>
  );
}
