"use client";

import { useTheme } from "next-themes";
import CommandBar from "./components/navigation/commandbar";
import router from "next/router";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set to true after client-side mounting
  }, []);

  const { theme, setTheme } = useTheme();

  const actions = [
    {
      id: "home",
      name: "Home",
      section: "Website",
      shortcut: ["h"],
      keywords: "home",
      perform: () => router.push("/"),
    },
    {
      id: "contact",
      name: "Contact",
      section: "Website",
      shortcut: ["c"],
      keywords: "contact",
      perform: () => router.push("/contact"),
    },
    {
      id: "theme",
      name: "Change theme",
      section: "Configurations",
      shortcut: ["t"],
      keywords: "theme",
      perform: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
  ];

  if (!mounted) return null;

  return (
    <html lang="en">
      <head>
        {/* Add metadata or other head elements here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextThemesProvider attribute="class" defaultTheme="light">
          <NextUIProvider>{children}</NextUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}

// <CommandBar actions={actions}>{children}</CommandBar>