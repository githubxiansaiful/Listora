import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header-footer/Header";
import { Footer } from "@/components/header-footer/Footer";


export const metadata: Metadata = {
  title: "Listora BD",
  description: "Business Directory of Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className="page-container">
          <Header></Header>
          <div className="main-area">
            {children}
          </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
