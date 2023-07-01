import Layout from "@/components/Layout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "People!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`content ${inter.className}`}>
          <Layout>{children}</Layout>
      </body>
    </html>
  );
}
