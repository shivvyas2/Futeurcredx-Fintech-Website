import { DashedLine } from "@/components/dashed-line";
import CreamContainer from "@/components/layout/cream-container";
import OutcomesContent from "@/components/sections/outcomes-content";
import { OutcomesHero } from "@/components/sections/outcomes-hero";
import { OutcomesBottom } from "@/components/sections/outcomes-bottom";

export default function OutcomesPage() {
  return (
    <CreamContainer>
      <div className="py-28 lg:py-32 lg:pt-44">
        <OutcomesHero />

        <OutcomesContent />
        <div className="pt-28 lg:pt-32">
          <DashedLine className="container max-w-5xl scale-x-115" />
          <OutcomesBottom />
        </div>
      </div>
    </CreamContainer>
  );
}
