"use client";

import { Label } from "@/components/ui/label";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, List, ListOrdered } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = {
  label: string;
  deafultValue: string;
  updateFn: (value: string) => void;
};

export default function TextEditor({ label, updateFn, deafultValue }: Props) {
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const editor = useEditor({
    extensions: [StarterKit],
    content: deafultValue,
    editorProps: {
      attributes: {
        class: "h-50 overflow-y-auto p-2 px-3",
      },
    },

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();

      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        updateFn(html);
      }, 400);
    },
  });

  if (!editor) return null;

  return (
    <div className="w-full space-y-2 ">
      <Label className="text-sm font-medium capitalize">{label}</Label>

      <div className="overflow-hidden rounded-md border bg-white">
        <div className="flex items-center gap-2 border-b p-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`rounded p-2 transition cursor-pointer ${
              editor.isActive("bold")
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}>
            <Bold className="size-3.5" />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`rounded p-2 transition cursor-pointer ${
              editor.isActive("italic")
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}>
            <Italic className="size-3.5" />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`rounded p-2 transition cursor-pointer ${
              editor.isActive("bulletList")
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}>
            <List className="size-3.5" />
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`rounded p-2 transition cursor-pointer ${
              editor.isActive("orderedList")
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}>
            <ListOrdered className="size-3.5" />
          </button>
        </div>

        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
