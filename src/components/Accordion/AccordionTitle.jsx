import { useAccordionContext } from "./Accordion";

export default function AccordionTitle({ id, children, className }) {
  const { toggleFunction } = useAccordionContext();
  return <h3 className={className} onClick={() => toggleFunction(id)}>{children}</h3>;
}
