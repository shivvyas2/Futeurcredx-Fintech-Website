import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "Industry Contradiction" },
            { src: "/about/2.webp", alt: "Real Cost" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="The Industry Contradiction Every Fintech Quietly Hides"
          paragraphs={[
            "Fintech sells itself as modern. But when ambiguity hits: underwriters retreat to owner FICO, product teams default to crude revenue brackets, banks lean on thin-file heuristics, RBF gates assume survival already occurred.",
            "Why? Because uncertainty scares balance sheets. So when revenue is low and business credit files don't exist, the system trusts: The founder's personal past — not the business's future.",
            "This isn't innovation — this is risk avoidance dressed in better UI. It feels modern, but it is still anchored in history — not potential.",
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
          title="The Real Cost of Current Approaches"
          paragraphs={[
            "Here's what your funnel doesn't tell you: You don't lose customers later. You lose them before they even begin.",
            "You reject: disciplined operators, early-stage LLCs, service-based ventures with contracts, founders yet to monetize. Not because they're bad risks — but because your stack lacks a way for them to earn trust incrementally.",
            "That's the moment every modern fintech misses.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/3.webp", alt: "Radical Insight" },
            { src: "/about/4.webp", alt: "Measured Opportunity" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

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
