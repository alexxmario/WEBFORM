import { cn } from "@/lib/utils";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  ariaLabel?: string;
  multiple?: boolean;
};

export function ChipGroup({
  options,
  value,
  onChange,
  ariaLabel,
  multiple = true,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2" aria-label={ariaLabel}>
      {options.map((option) => {
        const active = value.includes(option.value);
        const nextValue = multiple
          ? active
            ? value.filter((v) => v !== option.value)
            : [...value, option.value]
          : [option.value];
        return (
          <button
            key={option.value}
            type="button"
            onClick={() =>
              onChange(nextValue)
            }
            className={cn(
              "rounded-full border px-3 py-2 text-sm font-medium transition",
              active
                ? "border-primary bg-primary/10 text-foreground"
                : "border-border/70 text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
