import FeatureSection from "@/components/FeatureSection";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomePage />
      <FeatureSection />
    </main>
  );
}
