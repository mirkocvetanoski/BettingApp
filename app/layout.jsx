import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/assets/styles/globals.css";

import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Betting App",
  description: "Website for betting and live results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen w-screen flex-col items-center bg-neutral-950 py-6">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
