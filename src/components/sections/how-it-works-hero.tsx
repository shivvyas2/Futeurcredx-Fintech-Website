import Link from 'next/link';

import { DashedLine } from '@/components/dashed-line';
import { Button } from '@/components/ui/button';

const stats = [
  {
    value: '1. Visibility',
    label: 'Reality made visible, not judged',
  },
  {
    value: '2. Understanding',
    label: 'Contextual truth, not blind rejection',
  },
  {
    value: '3. Opportunity',
    label: 'Measured, sponsor-safe middle state',
  },
  {
    value: '4. Progression',
    label: 'Observable, auditable, reversible',
  },
  {
    value: '5. Escalation',
    label: 'Earned access, rule-based',
  },
  {
    value: '6. Graduation',
    label: 'Revenue created, not harvested',
  },
];

export function HowItWorksHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <p className="text-muted-foreground mb-4 text-sm font-semibold uppercase tracking-widest">
            A Pre-Credit Operating Loop
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            — Not a Product Feature
          </h1>

          <p className="text-muted-foreground mt-5 font-sans text-2xl font-medium md:text-3xl lg:text-4xl">
            Turn uncertainty into observable progress.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg font-medium text-balance md:block lg:mt-12">
            LumiqAI operates upstream of credit — in the phase where uncertainty is highest and traditional systems collapse into binary outcomes.
            <br />
            <br />
            Its job is simple and precise: Turn uncertainty into observable progress.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <Button size="lg">Request a Private Pilot</Button>
            </Link>
            <Link href="#operating-loop">
              <Button variant="outline" size="lg">See the Loop</Button>
            </Link>
          </div>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:ps-10 lg:pt-0`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-sans text-2xl font-medium tracking-wide md:text-3xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

