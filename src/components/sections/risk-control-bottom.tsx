import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const features = [
  {
    name: 'Measured Opportunity',
    company: 'THE MISSING CONTROL STATE',
    image: '/investors/1.webp',
    items: ['✓ non-credit by default', '✓ capped if any instrument attached', '✓ milestone-gated', '✓ reversible', '✓ fully documented', '✓ sponsor-aligned'],
  },
  {
    name: 'Why This Is Safer',
    company: 'THAN DEFAULTS',
    image: '/investors/2.webp',
    items: ['→ staged exposure (or none)', '→ longitudinal behavior observation', '→ explicit readiness milestones', '→ explainable progression logic', '→ human-governed escalation'],
  },
  {
    name: 'Gaming & Fair Lending',
    company: 'TRANSPARENCY',
    image: '/investors/3.webp',
    items: ['✕ No protected-class inference', '✕ No opaque scoring', '✕ No hidden weighting', '✕ No automatic escalation', 'Behavior is harder to game than history'],
  },
  {
    name: 'Kill Switches',
    company: 'INTERVENTION',
    image: '/investors/4.webp',
    items: ['• progression caps', '• stage freezing', '• manual escalation approval', '• instant rollback', '• sponsor-governed constraints'],
  },
  {
    name: 'Auditability',
    company: 'DOCUMENTATION',
    image: '/investors/5.webp',
    items: ['• progression state logs', '• milestone completion records', '• escalation rationales', '• override trails', '• sponsor-ready summaries'],
  },
];

export function RiskControlBottom() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="text-primary text-4xl font-medium tracking-wide">
        Control Features
      </h2>
      <p className="text-muted-foreground mt-4 text-lg">
        Risk does not increase. It becomes legible. Control is designed in — not layered on later.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {features.map((item) => (
          <div key={item.name} className="">
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
              className="object-cover"
            />
            <p className="text-muted-foreground mt-2 text-xs uppercase tracking-wide">{item.company}</p>
            <h3 className="mt-1 font-semibold">{item.name}</h3>
            <ul className="text-muted-foreground mt-2 space-y-1 text-sm">
              {item.items.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border bg-slate-50 p-8 dark:bg-slate-900">
        <h3 className="text-2xl font-semibold">The Strategic Risk of Waiting</h3>
        <p className="text-muted-foreground mt-4">
          Waiting does not reduce risk. It shifts it downstream.
        </p>
        <ul className="text-muted-foreground mt-4 space-y-2">
          <li>• Platforms without a progression layer only see businesses after readiness exists</li>
          <li>• Compete for the same survivors</li>
          <li>• Lose visibility into formation</li>
          <li>• Inherit customers shaped elsewhere</li>
        </ul>
        <p className="mt-4 font-medium">
          Once a business earns readiness inside another system, switching becomes costly — operationally and psychologically. That loss is permanent.
        </p>
      </div>

      <div className="mt-16 rounded-2xl border bg-slate-50 p-8 dark:bg-slate-900">
        <h3 className="text-2xl font-semibold">In One Sentence</h3>
        <p className="text-muted-foreground mt-4 text-lg">
          LumiqAI does not decide who gets credit.
        </p>
        <p className="mt-2 text-xl font-medium">
          It decides whether uncertainty becomes a blind rejection — or a governed process.
        </p>
        <p className="text-muted-foreground mt-4">
          If your institution values control over comfort,
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact">
            <Button size="lg">Request a Private Pilot</Button>
          </Link>
        </div>
        <p className="text-muted-foreground mt-4 text-sm">
          One platform per category.
        </p>
      </div>
    </section>
  );
}

