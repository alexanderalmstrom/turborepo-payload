import { Slot } from "@radix-ui/react-slot";
import type { ReactNode } from "react";
import { tv } from "tailwind-variants";

type HeroMediaProps = {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
  image?: ReactNode;
};

const heroMediaVariants = tv({
  base: "col-span-full row-span-full",
});

const HeroMedia = ({
  asChild,
  children,
  className,
  ...props
}: HeroMediaProps) => {
  if (!children) return null;

  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={heroMediaVariants({ className })} {...props}>
      {children}
    </Comp>
  );
};

HeroMedia.displayName = "HeroMedia";

export { HeroMedia, heroMediaVariants };
export type { HeroMediaProps };
