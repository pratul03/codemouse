"use client";

import { X } from "lucide-react";
import { Button } from "../ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { Editor, OnMount } from "@monaco-editor/react";
import { useRef } from "react";
import monaco from "monaco-editor";

export default function CodeEditor() {
  const editorRef = useRef<null | monaco.editor.IStandaloneCodeEditor>(null);
  const handleEditorMount: OnMount = (editor, moncao) => {
    editorRef.current = editor;
  };
  return (
    <>
      <div className="h-full w-52"></div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          maxSize={75}
          minSize={30}
          defaultSize={60}
          className="flex flex-col p-2"
        >
          <div className="h-10 w-full flex gap-2">
            <Button
              variant={"secondary"}
              size={"sm"}
              className="min-w-20 justify-between"
            >
              index.html <X />
            </Button>
            <Button
              variant={"secondary"}
              size={"sm"}
              className="min-w-20 justify-between"
            >
              style.css <X />
            </Button>
          </div>
          <div className="grow w-full overflow-hidden rounded-lg">
            <Editor
              height={"100%"}
              defaultLanguage="typescript"
              theme="vs-dark"
              onMount={handleEditorMount}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={40}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel
              defaultSize={50}
              minSize={20}
              className="p-2 flex flex-col"
            >
              <div className="h-10 w-full flex gap-2">
                <Button
                  variant={"secondary"}
                  size={"sm"}
                  className="min-w-20 justify-between"
                >
                  localhost:3000 <X />
                </Button>
              </div>
              <div className="w-full grow rounded-lg bg-foreground"></div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel
              defaultSize={50}
              minSize={20}
              className="p-2 flex flex-col"
            >
              <div className="h-10 w-full flex gap-2">
                <Button
                  variant={"secondary"}
                  size={"sm"}
                  className="min-w-20 justify-between"
                >
                  Node
                  <X />
                </Button>
              </div>
              <div className="w-full grow rounded-lg bg-foreground"></div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
