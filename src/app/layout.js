import { Inter } from "next/font/google";
import "./globals.css";
// import All Components
import Navbar from "./(staticPages)/navbar/Navbar";
import Lightness from "@/components/lightness/Lightness";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weconn",
  description: "The Home Page For Weconn ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Lightness />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
