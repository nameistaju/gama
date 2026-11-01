import * as React from "react";
import { cn } from "@/lib/utils";

export function Pulse({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span className={cn("relative flex size-3 items-center justify-center", className)} {...props}>
      <span className="animate-ping absolute inline-flex size-full rounded-full bg-cyan-400 opacity-75" />
      <span className="relative inline-flex size-2 rounded-full bg-white shadow-[0_0_10px_#38bdf8]" />
    </span>
  );
}

export default Pulse;
