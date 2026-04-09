import Header from "../components/Header";
import DivisionPage from "../components/DivisionPage";

export const metadata = {
  title: "V01D Creative — 映像・ビジュアル・アート",
};

export default function CreativePage() {
  return (
    <>
      <Header />
      <main>
        <DivisionPage
          color="var(--prism-1)"
          label="Creative"
          tagline="表現の力で、世界の見え方を変える。"
          heroImage="/images/prism-hero.webp"
          intro="V01D Creativeは、映像制作・ビジュアルデザイン・アートディレクションを通じて、ブランドの本質を可視化します。私たちが生み出すのは単なるコンテンツではなく、人の記憶に残り、行動を変える体験です。"
          sections={[
            {
              title: "映像制作",
              body: "ブランドフィルム、プロモーション映像、ドキュメンタリー。ストーリーテリングの力で、複雑なメッセージを直感的に伝えます。企画から撮影、ポストプロダクションまで一貫して対応。",
            },
            {
              title: "ビジュアルデザイン",
              body: "ブランドアイデンティティ、UI/UX設計、グラフィック。デジタルとフィジカルの両面で、一貫した世界観を構築します。美しさと機能性を両立するデザインシステムを提供。",
            },
            {
              title: "アートディレクション",
              body: "プロジェクト全体のビジュアル戦略を統括。クリエイティブチームの方向性を定め、すべてのアウトプットが同じ温度感を持つよう設計します。",
            },
          ]}
        />
      </main>
    </>
  );
}
