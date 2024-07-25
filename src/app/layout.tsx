// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import ClientLayout from "../components/ClientLayout"; // Ensure path is correct
import { Providers } from "../context/LanguageProvider";
import { Navbar } from "@/components/common/navbar/Navbar";
import { Footer } from "@/components/common/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ClientLayout>
            <Navbar />
            {children}
            <Footer />
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
