"use client";
import { useState } from "react";
import { SandpackProvider } from "@codesandbox/sandpack-react";
import CodeEditor from "./CodeEditor";
import { sandpackDark } from "@codesandbox/sandpack-themes";

const Sandbox = ({
  files: { starter, solution },
}: {
  files: { starter: any; solution: any };
}) => {
  const [showSolution, setShowSolution] = useState(false);
  return (
    <div className="editor">
      <SandpackProvider
        template="react"
        files={showSolution ? solution : starter}
        theme={sandpackDark}
        customSetup={{
          dependencies: {
            "@xstate/react": "^4.1.1",
            react: "^18.2.0",
            "react-dom": "^18.2.0",
            xstate: "^5.11.0",
          },
        }}
      >
        {solution && (
          <div className="toolbar">
            <button onClick={() => setShowSolution(!showSolution)}>
              {showSolution ? "Hide Solution" : "Show Solution"}
            </button>
          </div>
        )}
        <CodeEditor />
      </SandpackProvider>
    </div>
  );
};
export default Sandbox;
