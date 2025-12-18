import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const comparisons = [
  {
    name: "Status Quo Defaults",
    company: "BLIND DECISIONS",
    image: "/investors/1.webp",
    items: ["→ Owner FICO", "→ Hard revenue thresholds", "→ Binary rejection"],
  },
  {
    name: "LumiqAI Replaces With",
    company: "OBSERVABLE PROGRESS",
    image: "/investors/2.webp",
    items: [
      "→ Visibility",
      "→ Staged exposure",
      "→ Documented progression",
      "→ Explainable outcomes",
    ],
  },
  {
    name: "Without LumiqAI",
    company: "LOST REVENUE",
    image: "/investors/3.webp",
    items: [
      "• Declined applicants disappear",
      "• Future revenue is lost upstream",
      "• Platforms compete downstream for survivors",
    ],
  },
  {
    name: "With LumiqAI",
    company: "CREATED REVENUE",
    image: "/investors/4.webp",
    items: [
      "• Declined applicants become progression pipelines",
      "• Readiness is cultivated, not guessed",
      "• Future revenue is created inside your platform",
    ],
  },
  {
    name: "Designed for Sponsors",
    company: "NOT A LOOPHOLE",
    image: "/investors/5.webp",
    items: [
      "• Respect sponsor bank constraints",
      "• Align with compliance frameworks",
      "• Produce auditable decision trails",
      "• Allow immediate intervention",
    ],
  },
];

export function HowItWorksBottom() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="text-primary text-4xl font-medium tracking-wide">
        Why This Is Safer Than the Status Quo
      </h2>
      <p className="text-muted-foreground mt-4 text-lg">
        When uncertainty appears, most systems default to blind decisions. Risk
        does not increase. It becomes observable.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {comparisons.map((item) => (
          <div key={item.name} className="">
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
              className="object-cover"
            />
            <p className="text-muted-foreground mt-2 text-xs uppercase tracking-wide">
              {item.company}
            </p>
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
        <h3 className="text-2xl font-semibold">In One Sentence</h3>
        <p className="text-muted-foreground mt-4 text-lg">
          LumiqAI does not decide who gets credit.
        </p>
        <p className="mt-2 text-xl font-medium">
          It decides how readiness is earned — safely, visibly, and inside your
          ecosystem.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact">
            <Button size="lg">Request a Private Pilot</Button>
          </Link>
        </div>
        <p className="text-muted-foreground mt-4 text-sm">
          We work with one platform per category.
        </p>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground text-sm">
          LumiqAI — The Intelligence Layer That Turns &ldquo;Unbankable&rdquo;
          Into &ldquo;Proven&rdquo;
        </p>
        <p className="text-muted-foreground mt-2 text-xs">
          © 2025 LumiqAI. All rights reserved.
        </p>
      </div>
    </section>
  );
}
