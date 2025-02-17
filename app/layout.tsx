import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "../Redux/StoreProvider";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orders issue manager",
  description: "Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          {/* Redux state provider wrapping the whole application to pass the state across it  */}
      <StoreProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fcfcfc]`}
      >
       
         
       <div className="flex gap-10  w-full">
        <Sidebar/>
       {children}
       {/* Toast container to be available across the application */}
       <ToastContainer  />
       </div>
      
      </body>
      </StoreProvider>
    </html>
  );
}
