import { Inter } from "next/font/google";
import "./globals.css";
// import All Components
import Navbar from "@/components/Navbar/Navbar";
import Lightness from "@/components/lightness/Lightness";
import LinksProvider from "@/contexts/linksContexts/LinksContext";
// Context Provider import
import AsideProvider from "@/contexts/asideContext/AsideContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weconn",
  description: "The Home Page For Weconn ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LinksProvider>
        <AsideProvider>
          <body className={inter.className}>
            <Lightness />
            <Navbar />
            {children}
          </body>
        </AsideProvider>
      </LinksProvider>
    </html>
  );
}
