import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from 'lucide-react';

import { DashedLine } from '../dashed-line';

import { Button } from '@/components/ui/button';

const features = [
  {
    title: 'Not a dashboard',
    description: 'No surface-level reporting or consumer tooling.',
    icon: CircleDot,
  },
  {
    title: 'Not a credit decision engine',
    description: 'Approval authority stays exactly where it belongs.',
    icon: Blend,
  },
  {
    title: 'Not a workaround',
    description: 'Built for sponsors, compliance, and governance.',
    icon: Diamond,
  },
  {
    title: 'Enterprise Infrastructure',
    description: 'Above products, below policy, outside the money path.',
    icon: ChartNoAxesColumn,
  },
];

export default function Hero() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            The Infrastructure Layer for SMB Readiness
          </h1>

          <p className="text-muted-foreground mt-5 font-sans text-2xl font-medium md:text-3xl lg:text-4xl">
            Credit Visibility and Progression — Before Revenue, Before Approval, Before Competitors.
          </p>

          <p className="text-muted-foreground mt-4 text-lg">
            Built for banks, fintech platforms, sponsor institutions, and embedded finance operators.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button>Request Enterprise Briefing</Button>
            <Link href="#">
              <Button
                variant="outline"
                className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              >
                <span className="max-w-56 truncate text-start md:max-w-none">
                  Request Enterprise Briefing
                </span>
                <ArrowRight className="stroke-3" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:ps-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-inter font-semibold">{feature.title}</h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <Image
            src="/hero.webp"
            alt="hero"
            fill
            className="rounded-3xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
}
