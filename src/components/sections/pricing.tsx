'use client';

import { useState } from 'react';

import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Risk & Compliance',
    monthlyPrice: '',
    yearlyPrice: '',
    description: 'Designed for Risk Teams',
    features: [
      'No credit decisions made',
      'No funds moved',
      'No policy overrides',
      'No pre-approval language',
    ],
  },
  {
    name: 'Enterprise Deployment',
    monthlyPrice: '',
    yearlyPrice: '',
    features: [
      'Private, scoped pilots',
      'One platform per category',
      'Sponsor-aligned configuration',
      'Expansion only after proof',
    ],
  },
  {
    name: 'Where FuteurCredX Fits',
    monthlyPrice: '',
    yearlyPrice: '',
    features: [
      'Above banking, lending, and RBF products',
      'Below underwriting engines and sponsor rules',
      'Outside capital movement and approval authority',
      'Feeds cleaner, richer, longitudinal context',
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn('py-28 lg:py-32', className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Enterprise Deployment Model
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug font-medium text-balance">
            Risk is not reduced by avoidance. It&apos;s reduced by visibility.
            FuteurCredX Enterprise operates above products, below policy, and outside the money path.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === 'Enterprise Deployment'
                  ? 'outline-primary origin-top outline-4'
                  : ''
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-primary font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{' '}
                      {plan.name !== 'Free' && (
                        <span className="text-muted-foreground">
                          per user/
                          {isAnnual ? 'year' : 'month'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.name !== 'Free' ? (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                    />
                    <span className="text-sm font-medium">Billed annually</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.name === 'Enterprise Deployment' ? 'default' : 'outline'}
                >
                  Request Enterprise Briefing
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
