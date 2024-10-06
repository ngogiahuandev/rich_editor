import React, { useState, useEffect } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Palette } from "lucide-react";
import { Editor } from "@tiptap/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TextColorToggleProps {
  editor: Editor;
}

const defaultColors = [
  "#000000",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
];

const TextColorToggle: React.FC<TextColorToggleProps> = ({ editor }) => {
  const [customColor, setCustomColor] = useState("#000000");
  const [isOpen, setIsOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {
    const updateCurrentColor = () => {
      const color = editor.getAttributes("textStyle").color;
      setCurrentColor(color || "");
    };

    editor.on("selectionUpdate", updateCurrentColor);
    editor.on("update", updateCurrentColor);

    return () => {
      editor.off("selectionUpdate", updateCurrentColor);
      editor.off("update", updateCurrentColor);
    };
  }, [editor]);

  const applyTextColor = (color: string) => {
    setCustomColor(color);
    editor.chain().focus().setColor(color).run();
  };

  const clearTextColor = () => {
    editor.chain().focus().unsetColor().run();
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Toggle
          pressed={editor.isActive("textStyle")}
          aria-label="Toggle text color"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative"
        >
          <Palette className="h-4 w-4" />
          <div
            className="absolute bottom-0 w-full h-1 rounded"
            style={{ backgroundColor: currentColor }}
          />
        </Toggle>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <div className="space-y-2">
          <div className="grid grid-cols-6 gap-2">
            {defaultColors.map((color) => (
              <Button
                key={color}
                className="size-8 p-0"
                style={{ backgroundColor: color }}
                onClick={() => applyTextColor(color)}
              />
            ))}
          </div>
          <div className="flex space-x-2 items-center">
            <Input
              type="color"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              className="w-10 h-10 p-0 border-none rounded-lg"
            />
            <Input
              type="text"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              className="flex-grow"
            />
          </div>
          <Button
            className="w-full"
            onClick={() => applyTextColor(customColor)}
          >
            Apply Color
          </Button>
          <Button className="w-full" onClick={clearTextColor} variant="outline">
            Clear
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TextColorToggle;
