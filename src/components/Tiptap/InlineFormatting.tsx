import { Toggle } from "@/components/ui/toggle";
import {
  Bold,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from "lucide-react";
import { Editor } from "@tiptap/react";
import HighlightToggle from "@/components/Tiptap/components/HighlightToggle";
import TextColorToggle from "@/components/Tiptap/components/TextColorToggle";

interface TextStyleGroupProps {
  editor: Editor;
}

const InlineFormatting: React.FC<TextStyleGroupProps> = ({ editor }) => {
  return (
    <div className="flex space-x-2">
      <Toggle
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        aria-label="Toggle bold"
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        aria-label="Toggle italic"
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("underline")}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
        aria-label="Toggle underline"
      >
        <Underline className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        aria-label="Toggle Strike"
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("subscript")}
        onPressedChange={() => editor.chain().focus().toggleSubscript().run()}
        aria-label="Toggle subscript"
      >
        <Subscript className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("superscript")}
        onPressedChange={() => editor.chain().focus().toggleSuperscript().run()}
        aria-label="Toggle superscript"
      >
        <Superscript className="h-4 w-4" />
      </Toggle>
      <HighlightToggle editor={editor} />
      <TextColorToggle editor={editor} />
    </div>
  );
};

export default InlineFormatting;
