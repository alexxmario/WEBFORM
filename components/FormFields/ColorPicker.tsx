import { useId } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {
  value: string;
  onChange: (value: string) => void;
  presets?: string[];
};

const defaultPresets = ["#0B132B", "#0EA5E9", "#FACC15", "#8B5CF6", "#111827"];

export function ColorPicker({ value, onChange, presets = defaultPresets }: Props) {
  const id = useId();
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Input
          id={id}
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-11 w-20 cursor-pointer p-1"
        />
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1"
          aria-label="Hex value"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <Button
            key={preset}
            type="button"
            variant="ghost"
            size="sm"
            className="group flex items-center gap-2"
            onClick={() => onChange(preset)}
          >
            <span
              className="h-5 w-5 rounded-full border border-border/60"
              style={{ backgroundColor: preset }}
            />
            <span>{preset}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
