import { Inter } from "next/font/google";
import './style.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Love Calculator",
  description: "Calculate your love compatibility with your partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://shorturl.at/q2tkR" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
