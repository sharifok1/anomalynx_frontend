import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./share/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anomalynx",
  description: "IT || Germents Solutions || International Trading",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
       
      </body>

    </html>
  );
}
