import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "V01D — 光の7原則をこの世界を照らす",
  description:
    "光の分解と再構築をコンセプトに、クリエイティブ・テクノロジー・空間体験・プラットフォームを横断し価値を拡張する。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-sans bg-[#050507] text-[#f0f0ec] min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
