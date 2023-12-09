import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionDemo = () => (
  <Accordion.Root
    className="mt-12"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item value="item-1">
      <Accordion.Trigger className="w-full uppercase text-start py-6 border-t-[1px] border-accent">
        Digital Marketing
      </Accordion.Trigger>
      <Accordion.Content className="pb-6 px-4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ea ex
        dicta dolorem itaque voluptas dolores quasi eius debitis voluptatem?
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-2">
      <Accordion.Trigger className="w-full uppercase text-start py-6 border-t-[1px] border-accent">
        Marketing Planning
      </Accordion.Trigger>
      <Accordion.Content className="pb-6 px-4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        doloremque perspiciatis! Ullam modi sapiente ducimus deserunt mollitia
        ipsa in possimus.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-3">
      <Accordion.Trigger className="w-full uppercase text-start py-6 border-t-[1px] border-b-[1px] border-accent">
        Website Development
      </Accordion.Trigger>
      <Accordion.Content className="pb-6 px-4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, repellat
        accusamus. Ab praesentium eligendi at optio sunt alias repellendus
        asperiores.
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

export default AccordionDemo;
