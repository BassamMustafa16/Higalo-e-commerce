import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Work_Sans } from "next/font/google"; // Add this line
import "./globals.css";
import "@/lib/fontawseome";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { AuthProvider } from "@/contexts/AuthContext";
import { CategoryProvider } from "@/contexts/dataContext";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HIgalo",
  description: "E-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} font-sans `}
      >
        <AuthProvider>
          <CategoryProvider>
            <Header />
            {children}
            <Footer />
          </CategoryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
