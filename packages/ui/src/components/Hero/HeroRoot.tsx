import { Slot } from "@radix-ui/react-slot";
import type { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const heroRootVariants = tv({
  base: "relative grid overflow-hidden",
});

type HeroRootProps = {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
} & VariantProps<typeof heroRootVariants>;

const HeroRoot = ({
  asChild,
  children,
  className,
  ...props
}: HeroRootProps) => {
  if (!children) return null;

  const Comp = asChild ? Slot : "section";

  return (
    <Comp className={heroRootVariants({ className })} {...props}>
      {children}
    </Comp>
  );
};

HeroRoot.displayName = "HeroRoot";

export { HeroRoot, heroRootVariants };
export type { HeroRootProps };
