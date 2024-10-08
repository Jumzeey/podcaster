import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConvexClerkProvider from "./Provider/ConvexClerkProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcaster",
  description: "App built by Jumzeey, courtesy of JSM. Generate your podcast using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClerkProvider> {children}</ConvexClerkProvider>
      </body>
    </html>
  );
}
