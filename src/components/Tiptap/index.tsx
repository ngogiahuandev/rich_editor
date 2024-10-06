"use client";

import { Button } from "@/components/ui/button";
import useTiptap from "@/hooks/useTiptap";
import TextStyleGroup from "./InlineFormatting";
import dynamic from "next/dynamic";
import { RichTextEditorProps } from "@/types/tiptap";

const EditorContent = dynamic(() => import("./EditorContent"), {
  ssr: false,
});

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  inlineFormatting = true,
}) => {
  const { content, editor } = useTiptap();

  if (!editor) {
    return null;
  }

  return (
    <div className="space-y-4 ">
      <div className="flex space-x-4 p-2 rounded-lg border bg-background">
        {inlineFormatting && <TextStyleGroup editor={editor} />}
      </div>
      <EditorContent editor={editor} />
      <Button onClick={() => console.log(content)}>Log Content</Button>
    </div>
  );
};

export default RichTextEditor;
