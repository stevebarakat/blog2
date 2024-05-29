export const files = {
  "/App.tsx": {
    code: `import { useMachine } from "@xstate/react";
  import { machine } from "./machine";

  function App() {
    const [state, send] = useMachine(machine);

    return (
      <button
        onClick={() => {
          send({ type: "next" });
        }}
      >
        {state.value}
      </button>
    );
  }

  export default App;`,
  },
  "/machine.ts": {
    active: true,
    code: `import { setup } from "xstate";

  export const machine = setup({
    types: {
      context: {} as {},
      events: {} as { type: "next" },
    },
  }).createMachine({
    context: {},
    initial: "First State",
    states: {
      "First State": {
        on: {
          next: {
            target: "Second State",
          },
        },
      },
      "Second State": {
        on: {
          next: {
            target: "First State",
          },
        },
      },
    },
  });
  `,
  },
};
