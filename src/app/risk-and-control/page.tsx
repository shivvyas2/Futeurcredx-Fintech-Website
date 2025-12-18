import { DashedLine } from '@/components/dashed-line';
import CreamContainer from '@/components/layout/cream-container';
import RiskControlContent from '@/components/sections/risk-control-content';
import { RiskControlHero } from '@/components/sections/risk-control-hero';
import { RiskControlBottom } from '@/components/sections/risk-control-bottom';

export default function RiskAndControlPage() {
  return (
    <CreamContainer>
      <div className="py-28 lg:py-32 lg:pt-44">
        <RiskControlHero />

        <RiskControlContent />
        <div className="pt-28 lg:pt-32">
          <DashedLine className="container max-w-5xl scale-x-115" />
          <RiskControlBottom />
        </div>
      </div>
    </CreamContainer>
  );
}

