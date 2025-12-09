"use client";

import { Toaster } from "sonner";

export function Toast() {
  return (
    <Toaster
      position="top-center"
      closeButton
      toastOptions={{
        className:
          "border border-border/70 bg-card/80 backdrop-blur text-foreground",
      }}
    />
  );
}
