import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "V01DHP CAPITAL — Built on insight. Driven by discipline.",
  description:
    "An independent investment house combining seasoned market intelligence with disciplined capital allocation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-ink text-bone min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
