import {
  SandpackThemeProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { sandpackDark } from "@codesandbox/sandpack-themes";

const CodeEditor = () => {
  return (
    <SandpackThemeProvider
      theme={{
        ...sandpackDark,
        colors: {
          surface1: "#15161E",
        },
      }}
    >
      <SandpackLayout>
        <SandpackCodeEditor style={{ height: "500px" }} />
        <SandpackPreview style={{ height: "500px" }} />
      </SandpackLayout>
    </SandpackThemeProvider>
  );
};

export default CodeEditor;
