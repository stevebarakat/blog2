"use client";
import {
  SandpackProvider,
  SandpackThemeProvider,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackStack,
  SandpackLayout,
  Sandpack,
} from "@codesandbox/sandpack-react";
import { AceEdit } from "./AceEdit";
import { useState } from "react";
import { sandpackDark } from "@codesandbox/sandpack-themes";

function Sandbox({ files: { starter, solution } }) {
  const [showSolution, setShowSolution] = useState(false);
  return (
    <>
      <button onClick={() => setShowSolution(!showSolution)}>
        Show Solution
      </button>
      <SandpackProvider
        template="react-ts"
        files={showSolution ? solution : starter}
        customSetup={{
          dependencies: {
            "@xstate/react": "^4.1.1",
            react: "^18.2.0",
            "react-dom": "^18.2.0",
            xstate: "^5.11.0",
          },
        }}
      >
        <SandpackThemeProvider
          theme={
            (sandpackDark,
            {
              colors: {
                surface1: "#15161E",
              },
            })
          }
        >
          <SandpackLayout>
            <SandpackCodeEditor showTabs showLineNumbers />
            <AceEdit />
            <SandpackPreview />
          </SandpackLayout>
        </SandpackThemeProvider>
      </SandpackProvider>
      {/* <Sandpack
        template="react-ts"
        theme={
          (sandpackDark,
          {
            colors: {
              surface1: "#15161E",
            },
          })
        }
        files={showSolution ? solution : starter}
        customSetup={{
          dependencies: {
            "@xstate/react": "^4.1.1",
            react: "^18.2.0",
            "react-dom": "^18.2.0",
            xstate: "^5.11.0",
          },
        }}
        options={{
          showLineNumbers: true, // default - true
          wrapContent: true, // default - false
          editorHeight: 600, // default - 300
        }}
      /> */}
    </>
  );
}

export default Sandbox;
