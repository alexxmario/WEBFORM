import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "What happens if I cancel?",
    answer:
      "Hosting and management stop; your site goes offline. You can export content anytime. A full site export is available as a paid service.",
  },
  {
    question: "Do I need meetings?",
    answer:
      "No meetings required. The Website Blueprint covers everything. Optional async checkpoints are included if you want review loops.",
  },
  {
    question: "Turnaround?",
    answer:
      "First build in 7 days after we receive a complete Blueprint. Changes are delivered in 3 days on a queue basis.",
  },
  {
    question: "What counts as a change?",
    answer:
      "Small updates under ~1 hour (copy swaps, image changes, new sections). Larger work may need a plan upgrade or scoped add-on.",
  },
  {
    question: "Who owns the domain?",
    answer:
      "We include domain + SSL. Want to use an existing domain? We’ll connect it and keep credentials documented.",
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {faqs.map((item, idx) => (
        <AccordionItem key={item.question} value={`item-${idx}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
