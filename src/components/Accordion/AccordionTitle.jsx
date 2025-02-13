import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({ children, className }) {
  const { toggleFunction } = useAccordionContext();
  const id = useAccordionItemContext();
  return <h3 className={className} onClick={() => toggleFunction(id)}>{children}</h3>;
}
