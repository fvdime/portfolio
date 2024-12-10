import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "merelyui/dist/style.css";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitchButton from "@/components/theme-switch-button";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fadime - Web Developer",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-100 dark:bg-zinc-950 text-black dark:text-white w-full h-full`}
      >
        <ThemeContextProvider>
          {children}
          <Toaster position="top-right" />
          <ThemeSwitchButton />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
