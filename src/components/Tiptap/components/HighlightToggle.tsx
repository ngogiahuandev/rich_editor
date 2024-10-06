import React, { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Highlighter } from "lucide-react";
import { Editor } from "@tiptap/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HighlightToggleProps {
  editor: Editor;
}

const defaultColors = [
  "#ffff00",
  "#00ff00",
  "#ff00ff",
  "#00ffff",
  "#ff0000",
  "#0000ff",
];

const HighlightToggle: React.FC<HighlightToggleProps> = ({ editor }) => {
  const [customColor, setCustomColor] = useState("#ffff00");
  const [isOpen, setIsOpen] = useState(false);

  const applyHighlight = (color: string) => {
    setIsOpen(false);
    setCustomColor(color);
    editor.chain().focus().toggleHighlight({ color }).run();
  };

  const clearHighlight = () => {
    editor.chain().focus().unsetHighlight().run();
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger asChild>
        <Toggle
          pressed={editor.isActive("highlight")}
          aria-label="Toggle highlight"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative"
        >
          <Highlighter className="h-4 w-4" />
          {/* add the current color display here */}
          {editor.isActive("highlight") && customColor && (
            <div
              className="absolute bottom-0 w-full h-1 rounded"
              style={{ backgroundColor: customColor }}
            />
          )}
        </Toggle>
      </PopoverTrigger>
      <PopoverContent className="w-64" align={"start"}>
        <div className="space-y-2">
          <div className="grid grid-cols-6 gap-2">
            {defaultColors.map((color) => (
              <Button
                key={color}
                className="size-8"
                style={{ backgroundColor: color }}
                onClick={() => applyHighlight(color)}
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
            onClick={() => applyHighlight(customColor)}
          >
            Apply Color
          </Button>
          <Button
            className="w-full"
            onClick={() => clearHighlight()}
            variant={"outline"}
          >
            Clear
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default HighlightToggle;
