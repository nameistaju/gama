import React from "react";
import TextHighlight from "@/components/ui/text-highlight";

export default function TextHighlightDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-8">
      <p className="text-3xl font-semibold text-center text-foreground">
        Make your headline{" "}
        <TextHighlight color="#fde047">stand out</TextHighlight> with a marker
        highlight.
      </p>
    </div>
  );
}
