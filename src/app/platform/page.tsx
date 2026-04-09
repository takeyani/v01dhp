import Header from "../components/Header";
import DivisionPage from "../components/DivisionPage";

export const metadata = {
  title: "V01D Platform — SaaS・エコシステム構築",
};

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main>
        <DivisionPage
          color="var(--prism-6)"
          label="Platform"
          tagline="つながりを構造化し、価値を循環させる。"
          heroImage="/images/prism-hero.webp"
          intro="V01D Platformは、SaaSプロダクト開発からエコシステム設計まで、デジタルプラットフォームの構築を通じて持続的な価値の循環を実現します。単発のプロダクトではなく、成長し続ける基盤を。"
          sections={[
            {
              title: "SaaS開発",
              body: "業界固有の課題を解決するSaaSプロダクトの企画・設計・開発。PMF（Product-Market Fit）の検証から本番ローンチ、グロースまで伴走します。",
            },
            {
              title: "エコシステム設計",
              body: "ステークホルダー間の価値交換を構造化し、ネットワーク効果が働くエコシステムを設計。プラットフォーム戦略の立案から技術実装までを一貫して支援。",
            },
            {
              title: "データ基盤",
              body: "プラットフォーム上のデータを資産化し、意思決定の精度を高めるデータパイプラインを構築。リアルタイム分析からインサイト抽出までをカバー。",
            },
          ]}
        />
      </main>
    </>
  );
}
