import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQKitchen() {
  const faqs = [
    {
      q: "How long does a remodel take?",
      a: "[Placeholder: Typically, a full kitchen remodel takes 6-10 weeks depending on scope and materials.]",
    },
    {
      q: "Do you offer free consultations?",
      a: "[Placeholder: Yes, we offer complimentary consultations and estimates.]",
    },
    {
      q: "What’s the average cost?",
      a: "[Placeholder: Costs vary by size and finishes. We provide detailed, transparent quotes.]",
    },
  ]

  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#0a2540] sm:text-4xl">Common Questions About Kitchen Remodeling</h2>
        <Accordion type="single" collapsible className="mt-8 w-full">
          {faqs.map((f, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-[#0a2540]">{f.q}</AccordionTrigger>
              <AccordionContent className="text-slate-600">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}