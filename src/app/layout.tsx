import type { Metadata } from "next";
import { Work_Sans } from "next/font/google"
import "./globals.css";

const work = Work_Sans({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "B-Care",
  description: "B-Care es un proyecto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${work.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
