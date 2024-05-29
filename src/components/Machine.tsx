export const machine = `import { createActorContext } from "@xstate/react";
import { setup, assign, assertEvent } from "xstate";

export const DEFAULT_CIRCLE_RADIUS = 25;
export const DEFAULT_CIRCLE_COLOR = "#D27979";

export const machine = setup({
  types: {
    context: {} as {
      circles: Circles;
      undos: (Circles | undefined)[];
      redos: (Circles | undefined)[];
      selectedCircleId: string | undefined;
    },
    events: {} as {
      type: "stage.touched";
      position: Position;
      circleUnderPointer: Circle;
    },
  },
  actions: {
    handleAddCircle: assign(({ context, event }) => {
      assertEvent(event, "stage.touched");

      const circle = {
        id: crypto.randomUUID(),
        radius: DEFAULT_CIRCLE_RADIUS,
        color: DEFAULT_CIRCLE_COLOR,
        position: event.position,
      };

      return {
        selectedCircleId: circle.id,
        circles: [...context.circles, circle],
      };
    }),
    handleSelectCircle: assign(({ context, event }) => {
      assertEvent(event, "stage.touched");
      const circle = event.circleUnderPointer;
      const circleCopy = { ...circle, position: event.position };
      const index = context.circles.indexOf(circle);
      const circles = context.circles.toSpliced(index, 1, circleCopy);
      return {
        selectedCircleId: event.circleUnderPointer?.id,
        circles,
        undos: [...context.undos, context.circles],
      };
    }),
  },
  guards: {
    "isCircleUnderPointer?": ({ event }) => {
      assertEvent(event, "stage.touched");
      return !!event.circleUnderPointer;
    },
  },
}).createMachine({
  context: {
    circles: [],
    undos: [],
    redos: [],
    selectedCircleId: undefined,
  },
  id: "CircleDragger (v2)",
  initial: "ready",
  states: {
    ready: {
      on: {
        "stage.touched": [
          {
            actions: {
              type: "handleSelectCircle",
            },
            guard: {
              type: "isCircleUnderPointer?",
            },
          },
          {
            actions: {
              type: "handleAddCircle",
            },
          },
        ],
      },
    },
  },
});

export const MachineContext = createActorContext(machine);
`;
