import * as React from "react";
import { Globe, GlobeSvg } from "@/components/ui/globe";
import { Pulse } from "@/components/ui/globe-utils/pulse";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/globe-utils/tooltip";
import { InfoIcon } from "lucide-react";

export function GlobeDemo() {
  return (
    <TooltipProvider>
      <div className="w-full flex items-center justify-center bg-black py-12">
        <Globe>
          <GlobeSvg>
            <foreignObject x={200} y={180} width={24} height={24}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="size-full flex justify-center items-center cursor-pointer">
                    <Pulse />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="pb-2 flex-col">
                  <div className="flex justify-between items-center gap-2">
                    <p className="text-muted-foreground">USA Kansas</p>
                    <p className="font-medium tabular-nums">$121,000</p>
                  </div>
                  <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-1 items-center">
                      <InfoIcon className="text-destructive" size={16} />
                      <p className="text-destructive/80 text-xs">only 8 left</p>
                    </div>
                    <div className=""></div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </foreignObject>

            <foreignObject x={600} y={80} width={24} height={24}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="size-full flex justify-center items-center cursor-pointer">
                    <Pulse />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="pb-2 flex-col">
                  <div className="flex justify-between items-center gap-2">
                    <p className="text-muted-foreground">Europe France</p>
                    <p className="font-medium tabular-nums">$121,000</p>
                  </div>
                  <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-1 items-center">
                      <InfoIcon className="text-yellow-300" size={16} />
                      <p className="text-yellow-300/80 text-xs">15 left</p>
                    </div>
                    <div className=""></div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </foreignObject>
          </GlobeSvg>
        </Globe>
      </div>
    </TooltipProvider>
  );
}

export default GlobeDemo;
