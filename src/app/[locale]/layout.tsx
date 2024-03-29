import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitchButton from "@/components/theme-switch-button";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fadime Dogrul",
  description: "My preferred name is Faya",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-100 dark:bg-zinc-950 text-black dark:text-white max-w-screen-lg mx-auto`}
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
