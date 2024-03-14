import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Provider from "./Provider";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piro",
  description: "Mordern Posting App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${inter.className} dark text-foreground bg-background`}>
        <Provider session={session}>
          <Toaster position="top-right" />
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
