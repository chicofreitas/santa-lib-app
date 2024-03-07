import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Application from "./application";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santa Lib App",
  description: "Create pretty biblical studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
		<body className={inter.className}>
			<Application>
				{children}
			</Application>
		</body>
    </html>
  );
}
