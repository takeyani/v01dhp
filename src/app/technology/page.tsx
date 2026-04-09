import Header from "../components/Header";
import DivisionPage from "../components/DivisionPage";

export const metadata = {
  title: "V01D Technology — AI・XR・インフラストラクチャ",
};

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main>
        <DivisionPage
          color="var(--prism-5)"
          label="Technology"
          tagline="構想を、現実のインフラへ変換する。"
          heroImage="/images/prism-classic.webp"
          intro="V01D Technologyは、AI・XR・クラウドインフラを軸に、ビジネスの根幹を支える技術基盤を構築します。テクノロジーは手段であり、私たちが追求するのは、それによって生まれる新しい可能性です。"
          sections={[
            {
              title: "AI / Machine Learning",
              body: "画像認識、自然言語処理、レコメンデーション。ビジネスデータを知見に変換するAIパイプラインを設計・構築します。プロトタイプから本番環境まで、スケーラブルなアーキテクチャを提供。",
            },
            {
              title: "XR / Spatial Computing",
              body: "AR・VR・MRを活用した没入型体験の開発。リアルとデジタルの境界を超え、ユーザーが情報と直感的に対話できるインターフェースを構築します。",
            },
            {
              title: "Infrastructure",
              body: "クラウドネイティブなシステム設計、DevOps、セキュリティ。ビジネスの成長に合わせてスケールするインフラストラクチャを、信頼性と効率性を両立して構築します。",
            },
          ]}
        />
      </main>
    </>
  );
}
