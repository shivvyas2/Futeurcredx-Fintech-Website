import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const outcomes = [
  {
    name: '03 — Retention Becomes Gravity',
    company: 'IDENTITY LOCK-IN',
    image: '/investors/1.webp',
    items: ['→ See where they stand', '→ See what unlocks next', '→ See progress move weekly', 'This is not engagement. This is identity lock-in.'],
  },
  {
    name: '04 — Revenue Appears Earlier',
    company: 'WITHOUT MORE RISK',
    image: '/investors/2.webp',
    items: ['→ Pre-credit subscriptions', '→ Readiness-linked tooling', '→ Graduated product tiers', '→ Earlier cross-sell eligibility'],
  },
  {
    name: '05 — Lending Gets Smarter',
    company: 'NOT LOOSER',
    image: '/investors/3.webp',
    items: ['→ Longitudinal behavior', '→ Documented progression', '→ Explainable readiness', '→ Reduced uncertainty'],
  },
  {
    name: '06 — Risk Committees Gain Control',
    company: 'NOT EXCEPTIONS',
    image: '/investors/4.webp',
    items: ['→ Uncertainty becomes staged', '→ Progression is documented', '→ Escalation is governed', '→ Intervention is easy'],
  },
  {
    name: '07 — Sponsor Relationships Easier',
    company: 'NOT HARDER',
    image: '/investors/5.webp',
    items: ['→ Explicit middle states', '→ Documented logic', '→ Auditable progression', '→ Fewer informal exceptions'],
  },
];

export function OutcomesBottom() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="text-primary text-4xl font-medium tracking-wide">
        The 9 Structural Outcomes
      </h2>
      <p className="text-muted-foreground mt-4 text-lg">
        The economic effect is not explosive. It is compounding.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {outcomes.map((item) => (
          <div key={item.name} className="">
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
              className="object-cover"
            />
            <p className="text-muted-foreground mt-2 text-xs uppercase tracking-wide">{item.company}</p>
            <h3 className="mt-1 font-semibold text-sm">{item.name}</h3>
            <ul className="text-muted-foreground mt-2 space-y-1 text-sm">
              {item.items.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border bg-slate-50 p-8 dark:bg-slate-900">
          <h3 className="text-xl font-semibold">08 — Stop Competing on Features</h3>
          <p className="text-muted-foreground mt-4">
            Every fintech eventually converges on similar products, UX, APIs, and pricing. LumiqAI changes what you compete on:
          </p>
          <ul className="text-muted-foreground mt-4 space-y-2">
            <li>→ When you meet businesses</li>
            <li>→ How early you retain them</li>
            <li>→ How deeply you shape them</li>
          </ul>
          <p className="mt-4 font-medium">
            Once a platform owns readiness formation, every competitor feels late.
          </p>
        </div>

        <div className="rounded-2xl border bg-slate-50 p-8 dark:bg-slate-900">
          <h3 className="text-xl font-semibold">09 — Competitive Loss Is Irreversible</h3>
          <p className="text-muted-foreground mt-4">
            The advantage LumiqAI creates does not compound through capital or pricing. It compounds through time:
          </p>
          <ul className="text-muted-foreground mt-4 space-y-2">
            <li>→ Captures early visibility</li>
            <li>→ Hosts readiness formation</li>
            <li>→ Governs progression</li>
            <li>→ Graduates customers internally</li>
          </ul>
          <p className="mt-4 font-medium">
            Waiting does not preserve optionality. It permanently narrows it.
          </p>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border bg-slate-900 p-8 text-white dark:bg-slate-800">
        <h3 className="text-2xl font-semibold">The End State</h3>
        <p className="mt-4 text-slate-300">
          18 months after installing LumiqAI, your platform is no longer asking:
        </p>
        <p className="mt-2 text-lg text-slate-400 italic">
          &ldquo;How do we approve more safely?&rdquo;
        </p>
        <p className="mt-4 text-slate-300">You&apos;re asking:</p>
        <p className="mt-2 text-xl font-medium">
          &ldquo;How early can we meet the next generation of businesses?&rdquo;
        </p>
        <p className="mt-6 text-lg font-medium text-emerald-400">
          You don&apos;t wait for readiness. You manufacture it.
        </p>
      </div>

      <div className="mt-16 rounded-2xl border bg-slate-50 p-8 dark:bg-slate-900">
        <h3 className="text-2xl font-semibold">In One Sentence</h3>
        <p className="text-muted-foreground mt-4 text-lg">
          LumiqAI doesn&apos;t help you win approvals.
        </p>
        <p className="mt-2 text-xl font-medium">
          It helps you win before approvals exist.
        </p>
        <div className="mt-8">
          <p className="font-semibold">Private Pilots</p>
          <p className="text-muted-foreground mt-2">
            We work with one platform per category. Because this is not a feature. It is an operating advantage.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact">
            <Button size="lg">Request a Private Pilot</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

