import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

import "@/assets/styles/globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Betting App",
  description: "Website for betting and live results",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="grid h-screen w-screen grid-cols-1 grid-rows-[auto_minmax(600px,_1fr)_100px_0px] items-center justify-items-center bg-neutral-950 pt-6">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
}
