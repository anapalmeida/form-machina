import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Form Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR">
        <head>
          <link rel="shortcut icon" href="#" />
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster/>
          </ThemeProvider>
        </body>
      </html>
  );
}
