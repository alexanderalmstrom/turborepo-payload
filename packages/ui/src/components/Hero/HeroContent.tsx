import { Slot } from "@radix-ui/react-slot";
import type { ReactNode } from "react";
import { tv } from "tailwind-variants";

type HeroContentProps = {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
};

const heroContentVariants = tv({
  base: "relative z-10 col-span-full row-span-full",
  variants: {
    position: {
      "top-left": {
        content: "self-start justify-self-start text-left",
      },
      "top-right": {
        content: "self-start justify-self-end text-right",
      },
      "bottom-right": {
        content: "self-end justify-self-end text-right",
      },
      "bottom-left": {
        content: "self-end justify-self-start text-left",
      },
      center: {
        content: "self-center justify-self-center text-center",
      },
    },
  },
  defaultVariants: {
    position: "center",
  },
});

const HeroContent = ({
  asChild,
  children,
  className,
  ...props
}: HeroContentProps) => {
  if (!children) return null;

  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={heroContentVariants({ className })} {...props}>
      {children}
    </Comp>
  );
};

HeroContent.displayName = "HeroContent";

export { HeroContent, heroContentVariants };
export type { HeroContentProps };
