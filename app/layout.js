import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intentional - Anti distractions app",
  description:
    "Intentional is an anti-distraction app that helps you focus on your work by blocking distracting websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" dark:bg-black">
      <body className="dark:bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
