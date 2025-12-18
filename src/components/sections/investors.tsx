import Image from "next/image";

const perspectives = [
  {
    name: "Neo-Bank CEO",
    company: "THE CATEGORY WINNER",
    image: "/investors/1.webp",
    quote:
      "If we rely on owner FICO when revenue is low, we're just another bank with better UX.",
    benefit:
      "Sequence trust — not deny it. Give SMBs reasons to log in weekly.",
  },
  {
    name: "Lender / RBF Operator",
    company: "THE PIPELINE TRANSFORMER",
    image: "/investors/2.webp",
    quote:
      "We decline too many people who would pay us back — if we had let them start smaller.",
    benefit: "Turn rejected applicants into proof pipelines.",
  },
  {
    name: "BIN Sponsor",
    company: "THE CONTROL LAYER",
    image: "/investors/3.webp",
    quote: "We need defensibility, not inspiration.",
    benefit:
      "Explainable decisions, documented progression logic, auditable limit escalation.",
  },
  {
    name: "Risk Committee",
    company: "RISK TEAMS SLEEP BETTER",
    image: "/investors/4.webp",
    quote: "Behavior is harder to fake than history — and now it's observable.",
    benefit: "Measurable milestones and observable readiness.",
  },
  {
    name: "Platform Owner",
    company: "THE BREAKTHROUGH",
    image: "/investors/5.webp",
    quote: "Whoever owns a business's self-image owns the long-term customer.",
    benefit: "Retention as identity — not product utility.",
  },
];

export function Investors() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="text-primary text-4xl font-medium tracking-wide">
        Read This From Every Fintech Perspective
      </h2>
      <p className="text-muted-foreground mt-4 text-lg">
        We work with one platform per category. No exceptions.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {perspectives.map((perspective) => (
          <div key={perspective.name} className="">
            <Image
              src={perspective.image}
              alt={perspective.name}
              width={120}
              height={120}
              className="object-cover"
            />
            <p className="text-muted-foreground mt-2 text-xs uppercase tracking-wide">
              {perspective.company}
            </p>
            <h3 className="mt-1 font-semibold">{perspective.name}</h3>
            <p className="text-muted-foreground mt-2 text-sm italic">
              &ldquo;{perspective.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border bg-slate-50 p-8 dark:bg-slate-900">
        <h3 className="text-2xl font-semibold">
          The Bigger Vision — The Mark You Leave on Finance
        </h3>
        <p className="text-muted-foreground mt-4">
          If finance only funds what already works, we don&apos;t build
          economies — we freeze them.
        </p>
        <ul className="text-muted-foreground mt-6 space-y-2">
          <li>🔹 Replace inherited fear with observable progress</li>
          <li>🔹 Replace binary rejection with earned trust</li>
          <li>🔹 Replace blind underwriting with deep visibility</li>
          <li>🔹 Expand access without expanding risk</li>
          <li>🔹 Grow revenue without harvesting only survivors</li>
          <li>🔹 Build future revenue streams before they exist</li>
        </ul>
        <p className="mt-6 font-medium">
          Every fintech will eventually arrive here. The only question is: Who
          installs it first — and who has to explain later why they didn&apos;t?
        </p>
      </div>
    </section>
  );
}
