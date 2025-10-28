import { Header } from "@/components/Header";
import { IncorporationHero } from "@/components/services/IncorporationHero";
import { IncorporationFeaturedTitle } from "@/components/services/IncorporationFeaturedTitle";
import { IncorporationHowItWorks } from "@/components/services/IncorporationHowItWorks";
import { IncorporationJurisdiction } from "@/components/services/IncorporationJurisdiction";
import { IncorporationBenefits } from "@/components/services/IncorporationBenefits";
import { IncorporationFAQ } from "@/components/services/IncorporationFAQ";
import { IncorporationReadyToIncorporate } from "@/components/services/IncorporationReadyToIncorporate";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Incorporation Services | Incorpify",
  description:
    "Set up your company powered by AI. Company formation in the UAE, KSA, Kuwait, Qatar and more. Seamless, digital, and fast.",
};

export default function IncorporationPage() {
  return (
        <div className="min-h-screen w-full bg-[#1d1834]">
          <Header />
          <main className="w-full">
            <IncorporationHero />
            <IncorporationFeaturedTitle />
            <IncorporationHowItWorks />
            <IncorporationJurisdiction />
            <IncorporationBenefits />
            <IncorporationFAQ />
            <IncorporationReadyToIncorporate />
          </main>
          <Footer />
        </div>
  );
}

