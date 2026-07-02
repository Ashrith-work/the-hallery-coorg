import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * shadcn/ui Button, retuned to the house style (PROJECT_RULES §8): text-forward,
 * wide-tracked, near-square corners. Extend variants here as the system grows.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 ease-hallery disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gold: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-gold-soft",
        ghost:
          "border border-cream/50 text-cream hover:border-cream hover:bg-cream hover:text-ink",
        outline:
          "border border-gold text-gold-ink hover:bg-gold hover:text-ink",
        link: "text-gold-ink underline-offset-4 hover:underline",
      },
      size: {
        sm: "px-6 py-2.5",
        md: "px-9 py-4",
        block: "w-full px-9 py-4",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
