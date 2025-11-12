"use client";

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border text-sm font-semibold tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800/50 dark:focus-visible:ring-white/70 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-zinc-900 text-white shadow-[0_20px_60px_rgba(15,15,15,0.35)] dark:bg-white dark:text-zinc-900 dark:shadow-[0_20px_60px_rgba(255,255,255,0.25)]",
        ghost:
          "border-zinc-300 bg-transparent text-zinc-900 hover:border-zinc-900 hover:bg-zinc-100/60 dark:border-white/20 dark:text-white dark:hover:border-white/60 dark:hover:bg-white/10",
        outline:
          "border-zinc-900 text-zinc-900 bg-transparent hover:bg-zinc-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white/10",
      },
      size: {
        default: "px-6 py-2.5",
        lg: "px-8 py-3 text-base",
        sm: "px-4 py-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        type={asChild ? undefined : "button"}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
