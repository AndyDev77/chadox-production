import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Copyright from "@/components/Copyright";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thomas Delangle",
  description:
    "Une fusion artistique et technique captivante, où chaque projet raconte une histoire immersive avec des montages fluides et une attention aux détails.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={oswald.className}>
          <Header />
          {children}
          <Footer />
          <Copyright />
        </body>
      </html>
    </ClerkProvider>
  );
}
