import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HowItWorksContent = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: '/about/1.webp', alt: 'Where LumiqAI Sits' },
            { src: '/about/2.webp', alt: 'Operating Loop' },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="Where LumiqAI Sits"
          paragraphs={[
            'LumiqAI lives between application and capital. It does not compete with your stack. It feeds it cleaner inputs.',
            'Products Layer: Banking Products, Lending Products, Revenue-Based Financing. LumiqAI: The Pre-Credit Operating Layer — sits between products and underwriting.',
            'Foundation Layer: Core Underwriting Logic, Sponsor Bank Policies, Approval Authority. LumiqAI operates above your products and below your core systems, providing the intelligence layer that connects them.',
          ]}
          ctaButton={{
            href: '/contact',
            text: 'Request a Private Pilot',
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          title="What LumiqAI Does — and Doesn't Do"
          paragraphs={[
            'What LumiqAI Observes: Consistency of behavior, Reporting discipline, Cashflow patterns (where applicable), Structural readiness indicators, Progression against defined milestones. These signals inform progression, explain decisions, and reduce uncertainty.',
            'What LumiqAI Does Not Do: ✕ Move funds ✕ Approve credit alone ✕ Override sponsor rules ✕ Replace your underwriting models ✕ Force exposure increases. LumiqAI is a control layer, not a risk engine.',
          ]}
        />
        <ImageSection
          images={[
            { src: '/about/3.webp', alt: 'What LumiqAI Does' },
            { src: '/about/4.webp', alt: 'Control Layer' },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default HowItWorksContent;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
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

