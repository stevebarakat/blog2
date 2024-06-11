"use client";
import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronUp, ChevronDown } from "lucide-react";

const Info = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={open}
      onOpenChange={setOpen}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Collapsible.Trigger asChild>
          <button className="reveal-button">
            What is a statechart?
            {open ? <ChevronUp /> : <ChevronDown />}
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content>
        Statecharts extend traditional finite state machines to model more
        complex logic. Statecharts are a visual extension to state machines that
        use boxes and arrows, much like flowcharts and sequence diagrams.
        Statecharts add extra features not available in ordinary state machines,
        including hierarchy, concurrency and communication.
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default Info;
