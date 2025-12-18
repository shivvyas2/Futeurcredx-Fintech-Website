import Link from "next/link";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const stats = [
  {
    value: "Visibility",
    label: "Credit & Readiness Awareness",
  },
  {
    value: "Progression",
    label: "Earned Trust, Not Binary Gates",
  },
  {
    value: "Control",
    label: "Risk Teams Sleep Better",
  },
  {
    value: "Retention",
    label: "Revenue Created Inside Your Platform",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <p className="text-muted-foreground mb-4 text-sm font-semibold uppercase tracking-widest">
            Private Pilot — Invite Only
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            The Pre-Credit Operating System That Makes SMBs Bankable
          </h1>

          <p className="text-muted-foreground mt-5 font-sans text-2xl font-medium md:text-3xl lg:text-4xl">
            — Before They Earn a Dollar
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg font-medium text-balance md:block lg:mt-12">
            Most fintechs say they support small business. The truth is: they
            only support them after revenue already exists.
            <br />
            <br />
            LumiqAI fixes the broken middle — the moment where capable,
            disciplined businesses are filtered out by blunt rules, lazy
            proxies, and inherited fear.
            <br />
            <br />
            Not because they&apos;re bad risks — but because no system exists to
            let them prove themselves safely.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <Button size="lg">Request a Private Pilot</Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
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
              <div className="font-sans text-4xl font-medium tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
