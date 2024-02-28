import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center gap-x-2 whitespace-nowrap border-current",
});

type ButtonProps = {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, type = "button", className, ...props }, ref) => {
    if (!props.children) return null;

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        type={type}
        className={buttonVariants({ className })}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
