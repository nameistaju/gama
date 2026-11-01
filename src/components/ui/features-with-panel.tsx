"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Sparkles, Maximize2, Volume2, VolumeX } from "lucide-react";
import TextHighlight from "@/components/ui/text-highlight";

interface StepItem {
  id: number;
  number: string;
  label: string;
  video: string;
  caption: string;
}

const steps: StepItem[] = [
  {
    id: 1,
    number: "01",
    label: "Ideas start with conversations.",
    video: "/videos/brainstorm.mp4",
    caption: "Big ideas start with great conversations.",
  },
  {
    id: 2,
    number: "02",
    label: "Every product begins with a spark.",
    video: "/videos/spark.mp4",
    caption: "Every great product starts with a question.",
  },
  {
    id: 3,
    number: "03",
    label: "Designed before it's built.",
    video: "/videos/blueprint.mp4",
    caption: "Turning ideas into experiences.",
  },
  {
    id: 4,
    number: "04",
    label: "Built, tested, perfected.",
    video: "/videos/build.mp4",
    caption: "Designed with purpose. Built with precision.",
  },
  {
    id: 5,
    number: "05",
    label: "Launched into the real world.",
    video: "/videos/launch.mp4",
    caption: "From an idea to something real.",
  },
];

export default function FeaturesWithPanel() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [progress, setProgress] = React.useState<number>(0);
  const [isMuted, setIsMuted] = React.useState<boolean>(true);

  const videoRef = React.useRef<HTMLVideoElement>(null);
  const sectionRef = React.useRef<HTMLElement>(null);
  const isIntersectingRef = React.useRef<boolean>(true);

  // Play video with try/catch to gracefully handle autoplay policy
  const playCurrentVideo = React.useCallback(async () => {
    if (videoRef.current && isIntersectingRef.current) {
      try {
        await videoRef.current.play();
      } catch {
        // Autoplay rejection safely handled
      }
    }
  }, []);

  // When active step changes, reset progress and trigger playback
  React.useEffect(() => {
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      playCurrentVideo();
    }
  }, [activeStep, playCurrentVideo]);

  // Pause video when section is out of view, resume when in view
  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting;
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          playCurrentVideo();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [playCurrentVideo]);

  // Update playback progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);
    }
  };

  // Auto-advance to next step when video ends
  const handleEnded = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  // Toggle mute / unmute
  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (videoRef.current) {
        videoRef.current.muted = next;
      }
      return next;
    });
  };

  // Request fullscreen on video
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ("webkitRequestFullscreen" in videoRef.current) {
        (videoRef.current as HTMLVideoElement & { webkitRequestFullscreen: () => void }).webkitRequestFullscreen();
      }
    }
  };

  const currentItem = steps[activeStep];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 bg-white text-[#0F172A] overflow-hidden"
    >
      {/* Hidden preloads for metadata to prevent layout shifts */}
      <div className="hidden" aria-hidden="true">
        {steps.map(
          (step, idx) =>
            idx !== activeStep && (
              <video key={step.video} src={step.video} preload="metadata" />
            )
        )}
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 lg:gap-16 md:items-start">
          {/* Section Heading */}
          <div className="order-1 md:col-start-1 md:row-start-1">
            <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl lg:text-6xl mb-6 md:mb-10">
              How We <TextHighlight color="#fde047">Build.</TextHighlight>
            </h2>
          </div>

          {/* Right Card: Responsive (between title and list on mobile, right column on desktop) */}
          <div className="order-2 md:order-none md:col-start-2 md:row-start-1 md:row-span-2 md:sticky md:top-24 mb-8 md:mb-0">
            <Card className="relative w-full p-4 sm:p-6 rounded-3xl border border-slate-200/90 bg-white shadow-xl flex flex-col gap-4">
              {/* Top Row: Chapter Indicator, Sparkles & Caption + Actions */}
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 sm:pb-4">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-[#0F172A] shrink-0">
                    <Sparkles className="size-4 text-[#0F172A]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-bold tracking-wider text-[#0F172A] uppercase">
                      {currentItem.number} / 05
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeStep}
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-slate-500 font-normal truncate"
                      >
                        {currentItem.caption}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Controls: Mute/Unmute & Fullscreen */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    title={isMuted ? "Unmute" : "Mute"}
                    className="size-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[#0F172A] transition-colors cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="size-3.5" />
                    ) : (
                      <Volume2 className="size-3.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleFullscreen}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-medium transition-colors shadow-xs cursor-pointer"
                  >
                    <Maximize2 className="size-3" />
                    <span>Fullscreen</span>
                  </button>
                </div>
              </div>

              {/* Video Player in rounded light container */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-inner flex items-center justify-center">
                <video
                  ref={videoRef}
                  key={currentItem.video}
                  src={currentItem.video}
                  autoPlay
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleEnded}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Left Steps List */}
          <div className="order-3 md:order-none md:col-start-1 md:row-start-2">
            <ul className="flex flex-col gap-2">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <motion.li
                    key={step.id}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                    onClick={() => {
                      setActiveStep(index);
                      setProgress(0);
                    }}
                    className={cn(
                      "relative overflow-hidden flex items-center gap-3 sm:gap-4 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl cursor-pointer transition-all duration-200 border",
                      isActive
                        ? "border-[#0F172A] bg-slate-50/80 shadow-xs ring-1 ring-[#0F172A]"
                        : "border-transparent hover:bg-slate-50/60"
                    )}
                  >
                    <span
                      className={cn(
                        "size-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 transition-colors duration-200",
                        isActive
                          ? "bg-[#0F172A] text-white"
                          : "bg-slate-100 text-slate-500"
                      )}
                    >
                      {step.id}
                    </span>

                    <span
                      className={cn(
                        "text-xs sm:text-sm font-medium transition-colors duration-200 select-none",
                        isActive
                          ? "text-[#0F172A] font-semibold"
                          : "text-slate-600 hover:text-slate-900"
                      )}
                    >
                      {step.label}
                    </span>

                    {/* Thin progress bar filling at the bottom of active item */}
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 h-[2.5px] bg-[#0F172A] transition-[width] duration-150 ease-linear rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
