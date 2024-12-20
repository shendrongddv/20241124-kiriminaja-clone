import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/constant";

export const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="grid w-full gap-4">
      {faq.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="overflow-hidden rounded-2xl border"
        >
          <AccordionTrigger className="font-body items-start gap-4 px-6 py-4 text-start text-base font-semibold hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="border-t px-6 py-4 text-base text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
