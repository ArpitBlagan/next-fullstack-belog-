"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Question() {
  return (
    <Accordion variant="splitted">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="Never self doubt !"
      >
        Self-doubt can be a formidable obstacle on the path to success, clouding
        our judgment and stalling our progress. However, embracing unwavering
        self-belief can be the key to unlocking our full potential. When we
        refuse to succumb to self-doubt, we pave the way for growth and
        achievement.
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="Discipline and consistency is successfull combination !"
      >
        Discipline and consistency are the cornerstones of success, anchoring
        our efforts and guiding us toward our goals. With discipline, we
        cultivate the strength to stay focused and committed, even when faced
        with distractions or difficulties. Consistency, on the other hand, turns
        our actions into habits, ensuring that we make steady progress over
        time.
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="100% efforts and no fascination !"
      >
        Giving your 100% effort without fixating on the outcome is a profound
        act of liberation. When we release ourselves from the burden of
        constantly worrying about results, we can fully immerse ourselves in the
        present moment and focus wholeheartedly on the task at hand. By pouring
        our energy and passion into our endeavors without being shackled by
        expectations, we not only unleash our true potential but also experience
        a sense of freedom and joy in the process.
      </AccordionItem>
    </Accordion>
  );
}
