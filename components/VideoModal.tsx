"use client";

import Image from "next/image";
import { Play } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type Props = {
  poster?: string;
};

export function VideoModal({ poster }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group relative w-full overflow-hidden rounded-3xl border border-border/70 bg-card/80 shadow-lg transition hover:-translate-y-1 hover:shadow-float-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <Image
            src={poster || "/demo-poster.svg"}
            alt="Watch a 60-second walkthrough"
            width={1200}
            height={720}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-primary shadow-lg transition group-hover:scale-105">
              <Play className="h-5 w-5" />
            </span>
          </div>
          <div className="absolute bottom-4 left-4 text-left text-sm font-semibold text-white">
            60-second loom-style walkthrough
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle>Blueprint alignment preview</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full">
          <iframe
            src="https://www.loom.com/embed/55f3fdfake"
            title="Blueprint demo"
            className="h-full w-full rounded-b-3xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
