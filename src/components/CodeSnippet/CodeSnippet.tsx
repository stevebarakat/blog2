import { Code } from "bright";
import theme from "./theme";

function CodeSnippet(props: any) {
  return <Code {...props} theme={theme} />;
}

export default CodeSnippet;
