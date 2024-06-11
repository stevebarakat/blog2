"use client";
import { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { sandpackDark } from "@codesandbox/sandpack-themes";

function CodeEditor({
  files: { starter, solution },
}: {
  files: { starter: any; solution: any };
}) {
  const [showSolution, setShowSolution] = useState(false);
  return (
    <div className="editor">
      {solution && (
        <div className="toolbar">
          <button onClick={() => setShowSolution(!showSolution)}>
            {showSolution ? "Hide Solution" : "Show Solution"}
          </button>
        </div>
      )}
      <Sandpack
        template="react"
        files={showSolution ? solution : starter}
        theme={sandpackDark}
        options={{
          showLineNumbers: true, // default - true
          showInlineErrors: false, // default - false
          wrapContent: false, // default - false
          editorHeight: 500, // default - 300
        }}
        customSetup={{
          dependencies: {
            "@xstate/react": "^4.1.1",
            react: "^18.2.0",
            "react-dom": "^18.2.0",
            xstate: "^5.11.0",
          },
        }}
      />
    </div>
  );
}
export default CodeEditor;
