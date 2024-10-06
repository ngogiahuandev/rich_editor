import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function page() {
  return (
    <ScrollArea className="h-[800px] rounded-md border">
      <div className="p-4">
        <ol className="space-y-4">
          <li>
            <p className="text-lg font-semibold">Inline Formatting:</p>
            <ul>
              <li>Bold</li>
              <li>Italic</li>
              <li>Underline</li>
              <li>Strikethrough</li>
              <li>Subscript</li>
              <li>Superscript</li>
              <li>Code (inline)</li>
              <li>Highlight</li>
              <li>Text color</li>
              <li>Background color</li>
              <li>Font family</li>
              <li>Font size</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Block-level Formatting:</p>
            <ul>
              <li>Headings (H1, H2, H3, H4, H5, H6)</li>
              <li>Paragraphs</li>
              <li>Blockquotes</li>
              <li>Code blocks</li>
              <li>Horizontal rules</li>
              <li>Text alignment (left, center, right, justify)</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Lists:</p>
            <ul>
              <li>Ordered lists (numbered)</li>
              <li>Unordered lists (bullet points)</li>
              <li>Task lists (checkboxes)</li>
              <li>Nested lists</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Links:</p>
            <ul>
              <li>Hyperlinks</li>
              <li>Custom link attributes</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Tables:</p>
            <ul>
              <li>Create and edit tables</li>
              <li>Merge cells</li>
              <li>Add/remove rows and columns</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Media:</p>
            <ul>
              <li>Images</li>
              <li>Videos</li>
              <li>Embeds (e.g., YouTube, Vimeo)</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Advanced Formatting:</p>
            <ul>
              <li>Subscript and superscript</li>
              <li>Small caps</li>
              <li>Text direction (LTR, RTL)</li>
              <li>Custom inline styles</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Special Characters:</p>
            <ul>
              <li>Emojis</li>
              <li>Special symbols</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Indentation:</p>
            <ul>
              <li>Increase/decrease indent</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Comments and Suggestions:</p>
            <ul>
              <li>Add comments to text</li>
              <li>Track changes</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Markdown Support:</p>
            <ul>
              <li>Parse and render Markdown syntax</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Custom Elements:</p>
            <ul>
              <li>Create custom nodes for specialized content</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Text Transformation:</p>
            <ul>
              <li>
                Automatic text replacement (e.g., smart quotes, fractions)
              </li>
              <li>Case transformation (uppercase, lowercase, title case)</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Collaboration Features:</p>
            <ul>
              <li>Real-time collaboration</li>
              <li>Mentions (@username)</li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Accessibility:</p>
            <ul>
              <li>ARIA attributes for better screen reader support</li>
            </ul>
          </li>
        </ol>
      </div>
    </ScrollArea>
  );
}
