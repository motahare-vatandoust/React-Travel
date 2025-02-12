import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, title, children, className }) {
  const { openItemId, toggleFunction } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <li className={className}>
      <h3 onClick={() => toggleFunction(id)}>{title}</h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
}


