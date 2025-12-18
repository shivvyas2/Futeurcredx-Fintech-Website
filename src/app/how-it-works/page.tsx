import { DashedLine } from "@/components/dashed-line";
import CreamContainer from "@/components/layout/cream-container";
import { HowItWorksBottom } from "@/components/sections/how-it-works-bottom";
import HowItWorksContent from "@/components/sections/how-it-works-content";
import { HowItWorksHero } from "@/components/sections/how-it-works-hero";

export default function HowItWorksPage() {
  return (
    <CreamContainer>
      <div className="py-28 lg:py-32 lg:pt-44">
        <HowItWorksHero />

        <HowItWorksContent />
        <div className="pt-28 lg:pt-32">
          <DashedLine className="container max-w-5xl scale-x-115" />
          <HowItWorksBottom />
        </div>
      </div>
    </CreamContainer>
  );
}
