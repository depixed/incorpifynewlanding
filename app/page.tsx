import { Header } from "@/components/Header";
import { HeroNoGradient } from "@/components/HeroNoGradient";
import { WhyIncorpify } from "@/components/WhyIncorpify";
import { OurFeatures } from "@/components/OurFeatures";
import { OurUsers } from "@/components/OurUsers";
import { FAQ } from "@/components/FAQ";
import { ReadyToLaunch } from "@/components/ReadyToLaunch";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#1d1834]">
      <Header />
      <main className="w-full">
        <HeroNoGradient />
        <WhyIncorpify />
        <OurFeatures />
        <OurUsers />
        <FAQ />
        <ReadyToLaunch />
      </main>
      <Footer />
    </div>
  );
}






