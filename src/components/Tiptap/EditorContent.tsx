import { Editor, EditorContent as TiptapEditorContent } from "@tiptap/react";

interface EditorContentProps {
  editor: Editor;
}

const EditorContent: React.FC<EditorContentProps> = ({ editor }) => {
  return (
    <TiptapEditorContent
      editor={editor}
      className="prose max-w-none p-4 border rounded-lg focus:outline-none max-h-[800px] overflow-y-auto"
    />
  );
};

export default EditorContent;
