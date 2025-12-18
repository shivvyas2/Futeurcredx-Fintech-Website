import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Risk & Compliance",
    questions: [
      {
        question: "Does FuteurCredX make credit decisions?",
        answer:
          "No. FuteurCredX does not make credit decisions. Approval authority stays exactly where it belongs — with your underwriting engines and sponsor rules.",
      },
      {
        question: "Are any funds moved through the platform?",
        answer:
          "No funds are moved. FuteurCredX operates outside capital movement and approval authority.",
      },
      {
        question: "Does it override existing policies?",
        answer:
          "No policy overrides. Built for sponsors, compliance, and governance. Risk is not reduced by avoidance — it's reduced by visibility.",
      },
    ],
  },
  {
    title: "Deployment",
    questions: [
      {
        question: "How is deployment structured?",
        answer:
          "Private, scoped pilots. One platform per category. Sponsor-aligned configuration. Expansion only after proof.",
      },
      {
        question: "Where does FuteurCredX fit in our stack?",
        answer:
          "Above banking, lending, and RBF products. Below underwriting engines and sponsor rules. Outside capital movement and approval authority.",
      },
    ],
  },
  {
    title: "Capabilities",
    questions: [
      {
        question: "What is Credit Visibility at Scale?",
        answer:
          "Personal VantageScore + business credit context, normalized and explainable.",
      },
      {
        question: "What is Progression Infrastructure?",
        answer:
          "Turn binary decline into governed readiness with Measured Opportunity. SMBs see exactly what unlocks each product — no guessing.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug font-medium lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4 font-medium">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
