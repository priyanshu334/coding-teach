import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Topbar";
import { Toaster } from "sonner"; // Modern 2026 toast preference

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Systems & Computing",
    default: "Systems & Computing | Engineering Blog",
  },
  description: "Deep dives into computing foundations and modern AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is required for next-themes
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} font-sans antialiased selection:bg-cyan-500/30`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <Navbar />
            {/* We use a dedicated container wrapper to ensure consistent 
                spacing across the app 
            */}
            <main className="flex-1 transition-all duration-300">
              {children}
            </main>
          </div>
          
          <Toaster 
            richColors 
            closeButton 
            position="bottom-right"
            theme="dark" // or "light" based on your preference
          />
        </ThemeProvider>
      </body>
    </html>
  );
}