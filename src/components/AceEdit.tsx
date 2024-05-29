"use client";
import { useActiveCode } from "@codesandbox/sandpack-react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-textmate";
import { useEffect } from "react";

export const AceEdit = () => {
  const { code, updateCode } = useActiveCode();

  useEffect(() => {
    localStorage.setItem("code", code);
  }, [code]);

  return (
    <AceEditor
      mode="typescript"
      defaultValue={code}
      onChange={updateCode}
      fontSize={14}
      height="300px"
      width="100%"
    />
  );
};
