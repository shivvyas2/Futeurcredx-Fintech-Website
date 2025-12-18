import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const OutcomesContent = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "Funnel Transformation" },
            { src: "/about/2.webp", alt: "Ownership Moment" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="01 — Your Funnel Stops Leaking"
          paragraphs={[
            "BEFORE: Applications spike, Approvals look clean, Declines disappear, CAC resets every cycle.",
            'AFTER: Declines become states, not exits. 70–90% of "not approved" applicants remain. Readiness is formed instead of deferred. Value creation starts before capital is deployed.',
            "Your funnel stops ending early. It starts compounding upstream.",
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
          title="02 — You Own the Moment Businesses Become Real"
          paragraphs={[
            'There is a single moment every SMB remembers: "This is when we became legitimate." With LumiqAI, that moment happens inside your platform — before anyone else ever touches them.',
            "→ The first financial mirror → The first place progress is visible → The system that taught them how readiness is earned",
            "That ownership never resets.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/3.webp", alt: "Retention Gravity" },
            { src: "/about/4.webp", alt: "Revenue Earlier" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default OutcomesContent;

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
