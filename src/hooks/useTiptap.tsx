"use client";
import Placeholder from "@tiptap/extension-placeholder";
import Strike from "@tiptap/extension-strike";
import Underline from "@tiptap/extension-underline";
import Subscript from "@tiptap/extension-subscript";
import Highlight from "@tiptap/extension-highlight";
import Superscript from "@tiptap/extension-superscript";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import { Content, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

export default function useTiptap() {
  const [content, setContent] = useState<Content>("");
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Strike,
      Subscript,
      Superscript,
      Highlight.configure({
        multicolor: true,
      }),
      TextStyle,
      Color,
      Placeholder.configure({
        placeholder: "Start typing here...",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none text-primary",
      },
    },
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });
  return {
    content,
    editor,
  };
}
