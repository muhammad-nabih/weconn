import { Poppins } from "next/font/google";
import "./globals.css";
// import All Components
import Navbar from "@/components/Navbar/Navbar";
import Lightness from "@/components/lightness/Lightness";
import LinksProvider from "@/contexts/linksContexts/LinksContext";
// Context Provider import
import AsideProvider from "@/contexts/asideContext/AsideContext";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Weconn",
  description: "The Home Page For Weconn ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LinksProvider>
        <AsideProvider>
          <body className={poppins.className}>
            <Lightness />
            <Navbar />
            {children}
            <Footer />
          </body>
        </AsideProvider>
      </LinksProvider>
    </html>
  );
}
