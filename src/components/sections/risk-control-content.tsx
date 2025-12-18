import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const RiskControlContent = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "Risk Philosophy" },
            { src: "/about/2.webp", alt: "Authority" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="The Risk Philosophy"
          paragraphs={[
            "Modern credit systems break at the same point: Uncertainty. When signal quality drops, most stacks default to: owner FICO, hard revenue gates, binary rejection.",
            "Those are not conservative decisions. They are blind ones.",
            '"Risk should not be avoided when uncertainty appears. It should be measured, staged, and governed." This is the role of the Pre-Credit Operating System.',
          ]}
          ctaButton={{
            href: "/contact",
            text: "Request a Private Pilot",
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          title="Authority Never Moves"
          paragraphs={[
            "LumiqAI is intentionally designed so that nothing critical changes hands. Authority Stays With You: ✓ Your institution — final approval authority ✓ Your sponsor bank / BIN sponsor — policy and constraints ✓ Your risk committee — escalation, override, kill-switch ✓ Your underwriting models — decisioning",
            "LumiqAI Does Not: ✕ Does not approve ✕ Does not decline ✕ Does not lend. It governs the space between those outcomes.",
            'What Does Not Change: Eligibility rules, Approval thresholds, Sponsor constraints, Credit policy, Capital exposure limits. What Does Change: → What happens after "not approved" → How readiness is formed → Whether uncertainty becomes data or dead ends.',
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/3.webp", alt: "Measured Opportunity" },
            { src: "/about/4.webp", alt: "Control Layer" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default RiskControlContent;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <div className="flex-1 space-y-4 text-lg font-medium md:space-y-6">
      {title && <h2 className="text-primary text-4xl font-medium">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
