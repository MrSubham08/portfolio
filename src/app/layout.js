import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";

const pjs = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"] });

export const metadata = {
  title: "Subham Kumar | Software Developer",
  description: "Portfolio of Subham Kumar, an Electronics & Communication Engineering student exploring ML, AI, and SAP ABAP development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pjs.variable} font-sans antialiased bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-50 transition-colors duration-300 relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />

          {/* Global unified ambient backdrop spanning whole site */}
          <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
            {/* Top left light source */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px]"></div>
            {/* Middle right soft glow */}
            <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[120px]"></div>
            {/* Bottom center glow */}
            <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[500px] rounded-full bg-fuchsia-500/10 dark:bg-fuchsia-500/5 blur-[140px]"></div>
          </div>

          <main className="relative z-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
