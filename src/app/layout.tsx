import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kana Game",
  description: "Best app to learn Kanas",
  generator: "Next.js",
  manifest: "/manifest.webmanifest",
  keywords: ["nextjs", "nextjs13", "kanas", "japanese"],
  authors: [{ name: "Shubham Agrawal" }],

  icons: [
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "icon", url: "/icons/icon-512x512.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-screen min-h-screen flex items-center justify-center ">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
