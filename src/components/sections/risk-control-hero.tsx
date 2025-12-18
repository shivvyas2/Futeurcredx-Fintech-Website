import Link from "next/link";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const stats = [
  {
    value: "Authority",
    label: "Stays with your institution",
  },
  {
    value: "Sponsor",
    label: "Policy and constraints preserved",
  },
  {
    value: "Risk Committee",
    label: "Escalation, override, kill-switch",
  },
  {
    value: "Underwriting",
    label: "Your models, your decisioning",
  },
];

export function RiskControlHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <p className="text-muted-foreground mb-4 text-sm font-semibold uppercase tracking-widest">
            Control Layer Documentation
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Risk, Control, and Sponsor Alignment
          </h1>

          <p className="text-muted-foreground mt-5 font-sans text-2xl font-medium md:text-3xl lg:text-4xl">
            This Is How Uncertainty Is Governed — Not Avoided
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg font-medium text-balance md:block lg:mt-12">
            LumiqAI is not a lending product. It is not an underwriting
            shortcut. It is not a workaround for policy.
            <br />
            <br />
            LumiqAI is a Pre-Credit Operating System — a control layer that
            governs how uncertainty is handled before capital is ever placed at
            risk.
            <br />
            <br />
            Its purpose is not to loosen standards. Its purpose is to replace
            blind rejection with observable readiness — without moving
            authority, policy ownership, or sponsor control.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <Button size="lg">Request a Private Pilot</Button>
            </Link>
            <Link href="#risk-philosophy">
              <Button variant="outline" size="lg">
                Start Here
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
