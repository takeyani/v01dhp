import Header from "../components/Header";
import DivisionPage from "../components/DivisionPage";

export const metadata = {
  title: "V01D Space — 空間体験・インスタレーション",
};

export default function SpacePage() {
  return (
    <>
      <Header />
      <main>
        <DivisionPage
          color="var(--prism-3)"
          label="Space"
          tagline="空間と時間を設計し、記憶を創る。"
          heroImage="/images/prism-beam.webp"
          intro="V01D Spaceは、物理空間とデジタル空間を融合したインスタレーション・イベント・展示を手がけます。五感に訴える空間設計で、訪れた人の記憶に深く刻まれる体験を創出します。"
          sections={[
            {
              title: "インスタレーション",
              body: "光・音・映像・インタラクションを組み合わせたインスタレーション作品。テクノロジーとアートの交差点で、概念を体感できる空間を設計します。",
            },
            {
              title: "イベントプロデュース",
              body: "カンファレンス、展示会、ブランドイベントの企画・演出。空間の動線設計から演出プランまで、来場者のジャーニー全体をデザインします。",
            },
            {
              title: "空間デザイン",
              body: "オフィス、商業施設、パブリックスペース。場所の持つポテンシャルを最大化し、そこに集まる人々の行動と感情を設計します。",
            },
          ]}
        />
      </main>
    </>
  );
}
