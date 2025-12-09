import { motion } from "framer-motion";

type Props = {
  steps: string[];
  current: number;
};

export function Stepper({ steps, current }: Props) {
  const progress = ((current + 1) / steps.length) * 100;

  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-foreground/10">
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-secondary"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}
