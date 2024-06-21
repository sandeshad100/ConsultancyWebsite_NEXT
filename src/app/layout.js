import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainModal from "./components/MainModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StepStudy",
  description: "Best Consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />

        <MainModal />
      </body>
    </html>
  );
}
