import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { inter, space_grotesk } from "./fonts";

export const metadata = {
  title: "Irsyad Al Ghifary",
  description: "Personal website of Me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${space_grotesk.variable} mx-80`}
    >
      <body className="font-space">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
