import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AdminLayout({ children }) {
  return (
    <html>
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}